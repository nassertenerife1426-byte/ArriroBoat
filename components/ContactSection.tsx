'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+34 922 XXX XXX',
      description: 'Llámanos de 8:00 a 20:00'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ballenastenerife.com',
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Puerto de Los Cristianos',
      description: 'Tenerife Sur, Canarias'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Todos los días',
      description: 'Excursiones matutinas y privadas'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-primary-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-100 mb-4">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-lg text-text-200 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre nuestras 
            excursiones o para hacer tu reserva por teléfono.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="border-2 border-primary-200 bg-primary-200/10 hover:bg-primary-200/20 transition-colors duration-300 rounded-lg">
                <div className="p-6 text-center">
                  <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-text-100" />
                  </div>
                  <h3 className="text-lg font-bold text-text-100 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-accent-100 font-semibold mb-1">
                    {info.content}
                  </p>
                  <p className="text-text-200 text-sm">
                    {info.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-text-100 text-center mb-8">
            Preguntas Frecuentes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "¿Qué incluye la excursión?",
                answer: "Incluye avistamiento de ballenas, bebidas, fotos profesionales y guía experto biólogo marino."
              },
              {
                question: "¿Qué pasa si no vemos ballenas?",
                answer: "Tenemos 95% de éxito, pero si no avistamos animales marinos, te devolvemos el 100% del dinero."
              },
              {
                question: "¿Es seguro para niños?",
                answer: "Totalmente seguro. Proporcionamos chalecos salvavidas y tenemos personal especializado en familias."
              },
              {
                question: "¿Puedo cancelar mi reserva?",
                answer: "Sí, cancelación gratuita hasta 24 horas antes de la excursión sin coste alguno."
              }
            ].map((faq, index) => (
              <div key={index} className="border-2 border-primary-200 bg-primary-200/10 rounded-lg">
                <div className="p-6">
                  <h4 className="text-lg font-bold text-text-100 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-text-200">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button 
              className="bg-accent-100 hover:bg-accent-200 text-text-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hacer Reserva Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}