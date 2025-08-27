import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { InventoryItem, InventoryStats } from '../types/item'
import { seedItems } from '../demo/seed'

interface InventoryState {
  items: InventoryItem[]
  stats: InventoryStats
  addItem: (item: Omit<InventoryItem, 'qty' | 'sku' | 'id'> & { sku: string; id: string; qty: number }) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeItem: (id: string) => void
  updateStats: () => void
}

const calculateStats = (items: InventoryItem[]): InventoryStats => {
  if (!items.length) return { totalItems: 0, totalWeight: 0, averageWeight: 0, heaviestItem: null, lightestItem: null }
  
  const totalItems = items.reduce((s, it) => s + it.qty, 0)
  const totalWeight = items.reduce((s, it) => s + it.weight * it.qty, 0)
  
  // Средний вес единицы предмета (с учетом количества)
  const averageWeight = totalItems > 0 ? totalWeight / totalItems : 0
  
  const heaviestItem = items.reduce((h, c) => c.weight > h.weight ? c : h)
  const lightestItem = items.reduce((l, c) => c.weight < l.weight ? c : l)
  
  return { totalItems, totalWeight, averageWeight, heaviestItem, lightestItem }
}

const findSimilarItem = (items: InventoryItem[], newItem: Omit<InventoryItem, 'qty' | 'sku' | 'id'> & { sku: string; id: string; qty: number }) => {
  return items.findIndex(item => 
    item.title === newItem.title && 
    item.weight === newItem.weight && 
    item.image === newItem.image
  )
}

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set, get) => ({
      items: seedItems,
      stats: calculateStats(seedItems),
      addItem: (newItem) => {
        const { items } = get()
        const similarIndex = findSimilarItem(items, newItem)
        let newItems: InventoryItem[]
        
        if (similarIndex >= 0) {
          newItems = items.map((it, idx) => 
            idx === similarIndex ? { ...it, qty: it.qty + newItem.qty } : it
          )
        } else {
          newItems = [...items, { ...newItem, qty: newItem.qty }]
        }
        
        const newStats = calculateStats(newItems)
        set({ items: newItems, stats: newStats })
      },
      increaseQuantity: (id) => {
        const { items } = get()
        const newItems = items.map(it => it.id === id ? { ...it, qty: it.qty + 1 } : it)
        const newStats = calculateStats(newItems)
        set({ items: newItems, stats: newStats })
      },
      decreaseQuantity: (id) => {
        const { items } = get()
        const newItems = items.map(it => it.id === id ? { ...it, qty: Math.max(0, it.qty - 1) } : it).filter(it => it.qty > 0)
        const newStats = calculateStats(newItems)
        set({ items: newItems, stats: newStats })
      },
      removeItem: (id) => {
        const { items } = get()
        const newItems = items.filter(it => it.id !== id)
        const newStats = calculateStats(newItems)
        set({ items: newItems, stats: newStats })
      },
      updateStats: () => {
        const { items } = get()
        const newStats = calculateStats(items)
        set({ stats: newStats })
      }
    }),
    { name: 'inventory-storage-v2' }
  )
)
