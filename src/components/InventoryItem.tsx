import React from 'react'
import { InventoryItem as ItemType } from '../types/item'

interface InventoryItemProps {
  item: ItemType
  onIncrease: (id: string) => void
  onDecrease: (id: string) => void
  onRemove: (id: string) => void
}

export const InventoryItem: React.FC<InventoryItemProps> = React.memo(({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center gap-6 p-6 border-b border-[#2a2a2a] bg-[#141414]">
      <div className="w-14 h-14 rounded-lg bg-[#111] border border-[#2a2a2a] flex items-center justify-center overflow-hidden">
        <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-lg font-semibold truncate">{item.title}</div>
        <div className="text-gray-400 text-sm">{item.sku} • {item.weight} кг</div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => onDecrease(item.id)} className="w-10 h-10 rounded-md bg-[#2b2b2b] text-white border border-[#3a3a3a] hover:border-red-600 hover:bg-[#2b1515]">-</button>
        <div className="w-12 text-center text-white text-xl font-bold">{item.qty}</div>
        <button onClick={() => onIncrease(item.id)} className="w-10 h-10 rounded-md bg-red-700 text-white border border-red-600 hover:bg-red-600">+</button>
        <button onClick={() => onRemove(item.id)} className="w-10 h-10 rounded-md bg-[#2b2b2b] text-white border border-[#3a3a3a] hover:border-red-600">×</button>
      </div>
    </div>
  )
})

InventoryItem.displayName = 'InventoryItem'
