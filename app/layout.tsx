import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ballenas Tenerife Sur - Excursiones Marinas',
  description: 'Descubre las ballenas y animales marinos de Tenerife Sur. Reserva tu excursión en barco para una experiencia única e inolvidable.',
  keywords: 'ballenas, tenerife, excursiones, barco, animales marinos, whale watching, sur tenerife',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-['DM_Sans'] antialiased">{children}</body>
    </html>
  );
}