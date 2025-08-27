export interface InventoryItem {
  id: string
  sku: string
  title: string
  image: string
  weight: number
  qty: number
}

export interface InventoryStats {
  totalItems: number
  totalWeight: number
  averageWeight: number
  heaviestItem: InventoryItem | null
  lightestItem: InventoryItem | null
}
