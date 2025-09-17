'use client';

import { Waves, Eye, Camera } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-100 via-bg-200 to-primary-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-300/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-accent-100/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-200/30 rounded-full animate-wave"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-100 leading-tight">
                Descubre las
                <span className="text-accent-100 block">
                  Ballenas de Tenerife
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-200 max-w-2xl">
                Vive una experiencia única navegando las aguas cristalinas del sur de Tenerife. 
                Observa ballenas piloto, delfines y otros animales marinos en su hábitat natural.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="bg-accent-100 hover:bg-accent-200 text-text-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Disponibilidad
              </button>
              <button 
                className="border-2 border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-text-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
                onClick={() => document.getElementById('excursiones')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Más Información
              </button>
            </div>

            {/* Features highlight */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
              <div className="flex items-center space-x-2 text-primary-200">
                <Eye className="h-5 w-5 text-accent-100" />
                <span className="font-medium">Avistamiento Garantizado</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-200">
                <Camera className="h-5 w-5 text-accent-100" />
                <span className="font-medium">Fotos Incluidas</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-200">
                <Waves className="h-5 w-5 text-accent-100" />
                <span className="font-medium">Guía Experto</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main circular element representing the ocean view */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary-200 to-primary-100 rounded-full flex items-center justify-center shadow-2xl animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-bg-200 to-primary-300 rounded-full flex items-center justify-center">
                  {/* Whale emoji */}
                  <div className="text-6xl md:text-7xl">🐋</div>
                </div>
              </div>
              
              {/* Floating elements around the main circle */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center shadow-lg animate-wave">
                <span className="text-2xl">🐬</span>
              </div>
              <div className="absolute -bottom-8 -left-4 w-12 h-12 bg-primary-300 rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-xl">🌊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-bg-200 to-bg-100 transform rotate-1 origin-left"></div>
    </section>
  );
}