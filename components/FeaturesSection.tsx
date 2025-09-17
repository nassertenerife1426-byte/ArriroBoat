'use client';

import { Clock, Users, Shield, Camera, Map, Heart } from 'lucide-react';

export default function FeaturesSection() {
  const excursiones = [
    {
      icon: Clock,
      title: "Excursión Matutina",
      description: "3 horas de navegación (9:00 - 12:00). Ideal para familias y mejores condiciones del mar.",
      price: "35€/adulto",
      highlight: "Más Popular"
    },
    {
      icon: Users,
      title: "Excursión Privada",
      description: "Barco exclusivo para tu grupo. Horario flexible y experiencia personalizada.",
      price: "Desde 400€",
      highlight: "Exclusiva"
    }
  ];

  const caracteristicas = [
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Barcos certificados y personal cualificado para tu tranquilidad."
    },
    {
      icon: Camera,
      title: "Fotos Profesionales",
      description: "Capturamos los mejores momentos de tu aventura marina."
    },
    {
      icon: Map,
      title: "Guía Experto",
      description: "Aprende sobre la fauna marina local con nuestros biólogos marinos."
    },
    {
      icon: Heart,
      title: "Experiencia Inolvidable",
      description: "95% de avistamiento exitoso de ballenas y delfines todo el año."
    }
  ];

  return (
    <section id="excursiones" className="py-20 bg-text-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-100 mb-4">
            Nuestras Excursiones
          </h2>
          <p className="text-lg text-primary-200 max-w-3xl mx-auto">
            Elige la experiencia perfecta para ti. Todas nuestras excursiones incluyen 
            avistamiento de ballenas, bebidas y el mejor equipo profesional.
          </p>
        </div>

        {/* Excursions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {excursiones.map((excursion, index) => {
            const IconComponent = excursion.icon;
            return (
              <div key={index} className="relative border-2 border-bg-200 hover:border-accent-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg bg-white">
                {excursion.highlight && (
                  <div className="absolute -top-3 left-6 bg-accent-100 text-text-100 px-4 py-1 rounded-full text-sm font-semibold">
                    {excursion.highlight}
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-bg-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary-100" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-100 mb-2">
                        {excursion.title}
                      </h3>
                      <p className="text-primary-200 mb-4">
                        {excursion.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-accent-100">
                          {excursion.price}
                        </span>
                        <button 
                          className="bg-primary-100 hover:bg-primary-200 text-text-100 px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                          onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Reservar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caracteristicas.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 bg-bg-100 rounded-lg hover:bg-bg-200 transition-colors duration-300">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-text-100" />
                </div>
                <h3 className="text-lg font-bold text-primary-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-200 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}