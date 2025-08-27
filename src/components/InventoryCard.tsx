import React from 'react'
import { InventoryItem } from '../types/item'

interface InventoryCardProps {
  item: InventoryItem
  onIncrease: (id: string) => void
  onDecrease: (id: string) => void
  onRemove: (id: string) => void
}

export const InventoryCard: React.FC<InventoryCardProps> = React.memo(({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="item-card fade-in-up">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex justify-center md:justify-start">
          <div className="item-image flex items-center justify-center">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium">
                      ${item.title.charAt(0).toUpperCase()}
                    </div>
                  `
                }
              }}
            />
          </div>
        </div>
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h3>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-600">
            <span>ID: {item.id}</span>
            <span>SKU: {item.sku}</span>
            <span>Вес: {item.weight} кг</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onDecrease(item.id)}
              className="quantity-button decrease focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              disabled={item.qty <= 1}
              aria-label={`Уменьшить количество ${item.title}`}
            >
              -
            </button>
            <span className="text-xl font-bold text-gray-800 min-w-[2rem] text-center">
              {item.qty}
            </span>
            <button
              onClick={() => onIncrease(item.id)}
              className="quantity-button focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={`Увеличить количество ${item.title}`}
            >
              +
            </button>
            <button
              onClick={() => onRemove(item.id)}
              className="action-button ml-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label={`Удалить ${item.title}`}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

InventoryCard.displayName = 'InventoryCard'
