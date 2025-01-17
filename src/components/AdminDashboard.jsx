import React, { useState } from 'react';
import { Plus, PencilLine, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const [menuItems, setMenuItems] = useState([]);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItem, setNewItem] = useState({
    category: 'shawarma'
  });

  const handleAddItem = () => {
    if (!newItem.name || !newItem.price) return;
    
    setMenuItems([...menuItems, {
      ...newItem,
      id: Date.now().toString(),
    }]);
    setIsAddingItem(false);
    setNewItem({ category: 'shawarma' });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Menu Management</h1>
        <button
          onClick={() => setIsAddingItem(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
        >
          <Plus size={20} /> Add Item
        </button>
      </div>

      {isAddingItem && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Item Name"
              className="border p-2 rounded"
              value={newItem.name || ''}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="border p-2 rounded"
              value={newItem.price || ''}
              onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="border p-2 rounded"
              value={newItem.image || ''}
              onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
            />
            <select
              className="border p-2 rounded"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            >
              <option value="shawarma">Shawarma</option>
              <option value="sides">Sides</option>
              <option value="drinks">Drinks</option>
              <option value="desserts">Desserts</option>
            </select>
            <textarea
              placeholder="Description"
              className="border p-2 rounded col-span-2"
              value={newItem.description || ''}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setIsAddingItem(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleAddItem}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Add Item
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <span className="text-green-600 font-bold">${item.price}</span>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-end gap-2">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <PencilLine size={20} />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}