import React from 'react'
import { InventoryList } from './InventoryList'
import { InventoryStats } from './InventoryStats'
import { useInventory } from '../hooks/useInventory'
import { AddItemForm } from './AddItemForm'

export const Inventory: React.FC = () => {
  const { items, stats, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveItem } = useInventory()
  
  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <header className="text-center space-y-8">
          <div className="relative">
            <h1 className="header-title text-6xl md:text-7xl font-black tracking-tight mb-8">
              Инвентарь
            </h1>
            <div className="flex justify-center space-x-3 mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

          </div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
              <AddItemForm />
            </div>
            <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="modern-card p-6">
                <InventoryList 
                  items={items} 
                  onIncrease={handleIncreaseQuantity} 
                  onDecrease={handleDecreaseQuantity} 
                  onRemove={handleRemoveItem} 
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="fade-in-up" style={{animationDelay: '0.6s'}}>
              <InventoryStats stats={stats} />
            </div>
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="flex justify-center space-x-8 mt-16 opacity-30">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  )
}
