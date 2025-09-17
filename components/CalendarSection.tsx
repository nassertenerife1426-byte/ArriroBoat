'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, Clock } from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
  price: number;
  type: 'morning' | 'private';
}

interface DayData {
  date: number;
  available: boolean;
  timeSlots: TimeSlot[];
}

export default function CalendarSection() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);

  // TODO: Conectar con API real para obtener disponibilidad
  const generateCalendarData = (): DayData[] => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const data: DayData[] = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
      data.push({
        date: day,
        available: day > 5, // Solo días después del 5 están disponibles (mock)
        timeSlots: [
          {
            time: '09:00 - 12:00',
            available: Math.random() > 0.3,
            price: 35,
            type: 'morning'
          },
          {
            time: 'Horario Flexible',
            available: Math.random() > 0.6,
            price: 400,
            type: 'private'
          }
        ]
      });
    }
    
    return data;
  };

  const calendarData = generateCalendarData();
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  const handleDateSelect = (dayData: DayData) => {
    if (dayData.available) {
      setSelectedDate(dayData.date);
      setSelectedTimeSlot(null);
    }
  };

  const handleBooking = () => {
    // TODO: Implementar lógica de reserva real
    if (selectedDate && selectedTimeSlot) {
      alert(`Reserva confirmada para el ${selectedDate} de ${monthNames[currentMonth.getMonth()]} a las ${selectedTimeSlot.time}`);
    }
  };

  return (
    <section id="reservas" className="py-20 bg-bg-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-100 mb-4">
            Reserva tu Aventura
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Selecciona la fecha y horario que mejor se adapte a tus planes. 
            ¡Te esperamos para vivir una experiencia única!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="border-2 border-bg-200 rounded-lg bg-white">
              <div className="p-6">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={goToPreviousMonth}
                    className="text-primary-100 hover:bg-bg-200 p-2 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  
                  <h3 className="text-xl font-bold text-primary-100">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  
                  <button
                    onClick={goToNextMonth}
                    className="text-primary-100 hover:bg-bg-200 p-2 rounded-lg transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                    <div key={day} className="text-center text-sm font-semibold text-primary-200 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {calendarData.map((dayData, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(dayData)}
                      disabled={!dayData.available}
                      className={`
                        p-3 rounded-lg text-sm font-medium transition-all duration-200
                        ${dayData.available 
                          ? 'bg-text-100 border-2 border-bg-200 hover:border-accent-100 hover:bg-bg-100 text-primary-100' 
                          : 'bg-bg-300/50 text-primary-200/50 cursor-not-allowed'
                        }
                        ${selectedDate === dayData.date ? 'border-accent-100 bg-accent-100 text-text-100' : ''}
                      `}
                    >
                      {dayData.date}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            {/* Time Slots */}
            {selectedDate && (
              <div className="border-2 border-bg-200 rounded-lg bg-white">
                <div className="p-6">
                  <h4 className="text-lg font-bold text-primary-100 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-accent-100" />
                    Horarios Disponibles
                  </h4>
                  
                  <div className="space-y-3">
                    {calendarData.find(d => d.date === selectedDate)?.timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTimeSlot(slot)}
                        disabled={!slot.available}
                        className={`
                          w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                          ${slot.available 
                            ? 'border-bg-200 hover:border-accent-100 bg-text-100' 
                            : 'border-bg-300 bg-bg-300/50 cursor-not-allowed opacity-50'
                          }
                          ${selectedTimeSlot === slot ? 'border-accent-100 bg-bg-100' : ''}
                        `}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-primary-100">{slot.time}</div>
                            <div className="text-sm text-primary-200">
                              {slot.type === 'morning' ? 'Excursión Matutina' : 'Excursión Privada'}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-accent-100">
                              {slot.type === 'private' ? 'Desde ' : ''}{slot.price}€
                            </div>
                            {!slot.available && (
                              <div className="text-xs text-primary-200">Completo</div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Booking Confirmation */}
            {selectedDate && selectedTimeSlot && (
              <div className="border-2 border-accent-100 bg-gradient-to-br from-bg-100 to-bg-200 rounded-lg">
                <div className="p-6">
                  <h4 className="text-lg font-bold text-primary-100 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-accent-100" />
                    Resumen de Reserva
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-primary-200">Fecha:</span>
                      <span className="font-semibold text-primary-100">
                        {selectedDate} de {monthNames[currentMonth.getMonth()]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-200">Horario:</span>
                      <span className="font-semibold text-primary-100">{selectedTimeSlot.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-200">Tipo:</span>
                      <span className="font-semibold text-primary-100">
                        {selectedTimeSlot.type === 'morning' ? 'Excursión Matutina' : 'Excursión Privada'}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-primary-100">Total:</span>
                      <span className="text-accent-100">
                        {selectedTimeSlot.type === 'private' ? 'Desde ' : ''}{selectedTimeSlot.price}€
                      </span>
                    </div>
                  </div>

                  {/* FIXME: Conectar con sistema de pago real */}
                  <button 
                    onClick={handleBooking}
                    className="w-full bg-accent-100 hover:bg-accent-200 text-text-100 font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Confirmar Reserva
                  </button>
                </div>
              </div>
            )}

            {/* Information Card */}
            <div className="border-2 border-bg-200 rounded-lg bg-white">
              <div className="p-6">
                <h4 className="text-lg font-bold text-primary-100 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-accent-100" />
                  Información Importante
                </h4>
                <div className="space-y-2 text-sm text-primary-200">
                  <p>• Llega 15 minutos antes de la salida</p>
                  <p>• Trae protector solar y gorra</p>
                  <p>• Cancelación gratuita hasta 24h antes</p>
                  <p>• Niños menores de 3 años gratis</p>
                  <p>• Se proporciona chaleco salvavidas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}