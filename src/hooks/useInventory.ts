import { useCallback } from 'react'
import { useInventoryStore } from '../store/inventory.store'
import { shallow } from 'zustand/shallow'
import { InventoryItem } from '../types/item'

export const useInventory = () => {
  const items = useInventoryStore(state => state.items, shallow)
  const stats = useInventoryStore(state => state.stats, shallow)
  const addItem = useInventoryStore(state => state.addItem)
  const increaseQuantity = useInventoryStore(state => state.increaseQuantity)
  const decreaseQuantity = useInventoryStore(state => state.decreaseQuantity)
  const removeItem = useInventoryStore(state => state.removeItem)

  const handleAddItem = useCallback((item: Omit<InventoryItem, 'qty'> & { qty: number }) => {
    addItem(item)
  }, [addItem])

  const handleIncreaseQuantity = useCallback((id: string) => {
    increaseQuantity(id)
  }, [increaseQuantity])

  const handleDecreaseQuantity = useCallback((id: string) => {
    decreaseQuantity(id)
  }, [decreaseQuantity])

  const handleRemoveItem = useCallback((id: string) => {
    removeItem(id)
  }, [removeItem])

  return {
    items,
    stats,
    handleAddItem,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem
  }
}
