import React from 'react'
import { InventoryStats as Stats } from '../types/item'

interface InventoryStatsProps {
  stats: Stats
}

export const InventoryStats: React.FC<InventoryStatsProps> = ({ stats }) => {
  return (
    <div className="stats-card">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
        <span className="mr-3 text-3xl">📊</span>
        Статистика
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">📦</span>
            <span className="text-gray-700 font-medium">Всего предметов</span>
          </div>
          <span className="text-3xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
            {stats.totalItems}
          </span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">⚖️</span>
            <span className="text-gray-700 font-medium">Общий вес</span>
          </div>
          <span className="text-3xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
            {stats.totalWeight.toFixed(1)} кг
          </span>
        </div>
        
                 <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group">
           <div className="flex items-center space-x-3">
             <span className="text-2xl">📏</span>
             <div>
               <span className="text-gray-700 font-medium block">Средний вес</span>
               <span className="text-xs text-gray-500">на единицу</span>
             </div>
           </div>
           <span className="text-3xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
             {stats.averageWeight.toFixed(2)} кг
           </span>
         </div>
        
        {stats.heaviestItem && (
          <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🏋️</span>
              <span className="text-gray-700 font-medium">Самый тяжелый</span>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              {stats.heaviestItem.title}
            </span>
          </div>
        )}
        
        {stats.lightestItem && (
          <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🪶</span>
              <span className="text-gray-700 font-medium">Самый легкий</span>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              {stats.lightestItem.title}
            </span>
          </div>
        )}
      </div>
      
      {/* Прогресс-бар веса */}
      <div className="mt-8 p-4 bg-white/40 rounded-xl">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-700">Загрузка инвентаря</span>
          <span className="text-sm font-medium text-indigo-600">
            {Math.min(100, Math.round((stats.totalWeight / 100) * 100))}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${Math.min(100, Math.round((stats.totalWeight / 100) * 100))}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">
          Максимум: 100 кг
        </div>
      </div>
    </div>
  )
}
