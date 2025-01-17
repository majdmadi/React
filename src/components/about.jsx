import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Since 1995, Alsham Shawarma has been serving authentic Middle Eastern
          cuisine in the heart of the city. Our recipes have been passed down
          through generations, bringing the true taste of Damascus to your
          plate.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Restaurant interior"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Traditional Methods</h2>
          <p className="text-gray-600 mb-6">
            We take pride in our traditional cooking methods, using only the
            finest ingredients and authentic spice blends. Our shawarma is
            marinated for 24 hours and slow-cooked to perfection on vertical
            rotisseries.
          </p>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <Clock className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold">Opening Hours</h3>
                <p className="text-gray-600">Mon-Sun: 11:00 AM - 01:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">
                  430 Rideau St, Ottawa, ON K1N 5Z2
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold">Contact</h3>
                <p className="text-gray-600">+1 (000) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Fresh ingredients"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
          <p className="text-gray-600">
            We source the freshest ingredients daily from local suppliers to
            ensure the highest quality.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Traditional recipes"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Traditional Recipes</h3>
          <p className="text-gray-600">
            Our recipes have been perfected over generations to bring you
            authentic flavors.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Dining experience"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Dining Experience</h3>
          <p className="text-gray-600">
            Enjoy your meal in our comfortable and authentic Middle Eastern
            atmosphere.
          </p>
        </div>
      </div>
    </div>
  );
}
