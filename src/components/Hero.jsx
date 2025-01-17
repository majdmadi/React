import React, { useEffect, useRef } from 'react';
import Menu from './Menu';

export default function Hero() {
  const chefRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (chefRef.current) {
        const scrollPosition = window.scrollY;
        const rotation = scrollPosition * 0.2;
        chefRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Shawarma background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Alsham Shawarma
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Authentic Middle Eastern Cuisine
          </p>
          <div ref={chefRef} className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <img
              src="https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
              alt="Chef cutting shawarma"
              className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}