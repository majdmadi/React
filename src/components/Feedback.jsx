import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission
    console.log({ ...formData, rating });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Your Feedback</h1>
        <p className="text-xl text-gray-600">
          We value your opinion! Let us know about your dining experience.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-gray-700 mb-4 text-center text-lg">Rate your experience</label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    size={32}
                    className={`${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">Your Feedback</label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Tell us about your experience..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            disabled={!rating}
          >
            Submit Feedback
          </button>
        </form>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Recent Feedback</h2>
        <div className="grid gap-6">
          {/* Example feedback items */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-500 text-sm">2 days ago</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={`${
                      star <= 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              Amazing shawarma! The meat was perfectly seasoned and the service was excellent.
              Will definitely come back again.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-gray-500 text-sm">1 week ago</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={`${
                      star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              Great food and atmosphere. The hummus was particularly good.
              Would recommend to anyone looking for authentic Middle Eastern cuisine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}