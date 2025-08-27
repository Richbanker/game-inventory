import React, { useState } from 'react'
import { InventoryItem } from '../types/item'
import { useInventory } from '../hooks/useInventory'
import { seedItems } from '../demo/seed'

export const AddItemForm: React.FC = () => {
  const [id, setId] = useState('')
  const [sku, setSku] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [weight, setWeight] = useState<number>(0)
  const [qty, setQty] = useState<number>(1)
  const { handleAddItem } = useInventory()

  const handleItemSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItem = seedItems.find(item => item.id === e.target.value)
    if (selectedItem) {
      setId(selectedItem.id)
      setSku(selectedItem.sku)
      setTitle(selectedItem.title)
      setImage(selectedItem.image)
      setWeight(selectedItem.weight)
      setQty(1)
    }
  }

  const onAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!id || !sku || !title || !image || weight <= 0 || qty <= 0) return
    const item: InventoryItem = { id, sku, title, image, weight, qty }
    handleAddItem(item)
    setId(''); setSku(''); setTitle(''); setImage(''); setWeight(0); setQty(1)
  }

  const isValid = id.trim() !== '' && sku.trim() !== '' && title.trim() !== '' && image.trim() !== '' && weight > 0 && qty >= 1

  return (
    <div className="modern-card p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Добавить предмет</h2>
      <form onSubmit={onAdd} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Выбрать готовый предмет</label>
          <select 
            className="modern-input w-full" 
            onChange={handleItemSelect}
            defaultValue=""
          >
            <option value="">Выберите предмет...</option>
            {seedItems.map(item => (
              <option key={item.id} value={item.id}>
                {item.title} ({item.weight} кг)
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
            <input 
              className="modern-input w-full" 
              placeholder="Уникальный идентификатор" 
              value={id} 
              onChange={e => setId(e.target.value)} 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
            <input 
              className="modern-input w-full" 
              placeholder="Артикул товара" 
              value={sku} 
              onChange={e => setSku(e.target.value)} 
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Название</label>
          <input 
            className="modern-input w-full" 
            placeholder="Название предмета" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Путь к изображению</label>
          <input 
            className="modern-input w-full" 
            placeholder="/assets/pistol.png" 
            value={image} 
            onChange={e => setImage(e.target.value)} 
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Вес (кг)</label>
            <input 
              className="modern-input w-full bg-gray-100 cursor-not-allowed" 
              type="number" 
              step="0.1" 
              value={weight} 
              readOnly
              title="Вес автоматически устанавливается при выборе предмета"
            />
            <p className="text-gray-500 text-sm mt-1">Вес устанавливается автоматически</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Количество</label>
            <input 
              className="modern-input w-full" 
              type="number" 
              min="1"
              placeholder="1" 
              value={qty} 
              onChange={e => setQty(Number(e.target.value))} 
              required
            />
            {qty < 1 && qty !== 0 && (
              <p className="text-red-500 text-sm mt-1">Количество должно быть не менее 1</p>
            )}
          </div>
        </div>
        <button 
          type="submit" 
          className={`modern-button w-full ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isValid}
        >
          Добавить предмет
        </button>
      </form>
    </div>
  )
}
