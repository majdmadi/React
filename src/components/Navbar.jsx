import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">Alsham</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-green-600">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
            <Link to="/feedback" className="text-gray-700 hover:text-green-600">Feedback</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}