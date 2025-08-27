import React from 'react'
import { InventoryItem } from '../types/item'
import { InventoryCard } from './InventoryCard'

interface InventoryListProps {
  items: InventoryItem[]
  onIncrease: (id: string) => void
  onDecrease: (id: string) => void
  onRemove: (id: string) => void
}

export const InventoryList: React.FC<InventoryListProps> = ({ items, onIncrease, onDecrease, onRemove }) => {
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0)
  const totalWeight = items.reduce((sum, item) => sum + (item.weight * item.qty), 0)

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Инвентарь пуст</h3>
        <p className="text-gray-600">Добавьте предметы в инвентарь, используя форму выше</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Предметы</h2>
        <span className="text-sm text-gray-600">Всего: {items.length}</span>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </div>
      <div className="border-t pt-4 mt-6">
        <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
          <span>Итого:</span>
          <span>{totalItems} шт., {totalWeight.toFixed(1)} кг</span>
        </div>
      </div>
    </div>
  )
}
