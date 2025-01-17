import React from 'react';
import { Utensils, Coffee, IceCream2, GlassWater } from 'lucide-react';

const menuItems = {
  shawarma: [
    {
      id: 1,
      name: "Classic Chicken Shawarma",
      description: "Tender marinated chicken with garlic sauce and pickles",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Beef Shawarma Plate",
      description: "Seasoned beef with hummus, rice, and fresh vegetables",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
  ],
  sides: [
    {
      id: 3,
      name: "Hummus",
      description: "Creamy chickpea dip with olive oil and pine nuts",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1590646605946-01d1d1a63e62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Falafel",
      description: "Crispy chickpea fritters with tahini sauce",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
  ],
  drinks: [
    {
      id: 5,
      name: "Mint Lemonade",
      description: "Fresh squeezed lemonade with mint leaves",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Turkish Coffee",
      description: "Traditional coffee with cardamom",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
  ],
  desserts: [
    {
      id: 7,
      name: "Baklava",
      description: "Layered phyllo pastry with nuts and honey",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "Kunafa",
      description: "Sweet cheese pastry with rose water syrup",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1632845514753-be3c4314e3f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
  ]
};

export default function Menu() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600">
            Discover our authentic Middle Eastern flavors
          </p>
        </div>

        <div className="grid gap-16">
          {/* Shawarma Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Utensils className="text-green-600" size={32} />
              <h3 className="text-3xl font-bold">Shawarma</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems.shawarma.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{item.name}</h4>
                      <span className="text-green-600 font-bold">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sides Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Coffee className="text-green-600" size={32} />
              <h3 className="text-3xl font-bold">Sides</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems.sides.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{item.name}</h4>
                      <span className="text-green-600 font-bold">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GlassWater className="text-green-600" size={32} />
              <h3 className="text-3xl font-bold">Drinks</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems.drinks.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{item.name}</h4>
                      <span className="text-green-600 font-bold">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <IceCream2 className="text-green-600" size={32} />
              <h3 className="text-3xl font-bold">Desserts</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems.desserts.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{item.name}</h4>
                      <span className="text-green-600 font-bold">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}