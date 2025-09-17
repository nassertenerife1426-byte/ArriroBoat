'use client';

import { useState } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Excursiones', href: '#excursiones' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="bg-primary-100/95 backdrop-blur-sm border-b border-primary-200/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-accent-100 p-2 rounded-lg">
              <Anchor className="h-6 w-6 text-text-100" />
            </div>
            <span className="text-xl font-bold text-text-100">
              Ballenas Tenerife
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-200 hover:text-text-100 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="bg-accent-100 hover:bg-accent-200 text-text-100 font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reservar Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-100 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-primary-200/20">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-200 hover:text-text-100 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="bg-accent-100 hover:bg-accent-200 text-text-100 font-semibold py-2 rounded-lg mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Reservar Ahora
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}