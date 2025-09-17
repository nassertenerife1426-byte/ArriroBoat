import { Anchor, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-100 border-t border-primary-200/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent-100 p-2 rounded-lg">
                <Anchor className="h-6 w-6 text-text-100" />
              </div>
              <span className="text-xl font-bold text-text-100">
                Ballenas Tenerife Sur
              </span>
            </div>
            <p className="text-text-200 mb-6 max-w-md">
              Más de 15 años de experiencia ofreciendo las mejores excursiones 
              para avistar ballenas y delfines en las aguas cristalinas de Tenerife Sur.
            </p>
            <div className="flex space-x-4">
              {/* TODO: Agregar enlaces reales a redes sociales */}
              <a href="#" className="bg-primary-200 p-2 rounded-lg hover:bg-accent-100 transition-colors duration-300">
                <Facebook className="h-5 w-5 text-text-100" />
              </a>
              <a href="#" className="bg-primary-200 p-2 rounded-lg hover:bg-accent-100 transition-colors duration-300">
                <Instagram className="h-5 w-5 text-text-100" />
              </a>
              <a href="#" className="bg-primary-200 p-2 rounded-lg hover:bg-accent-100 transition-colors duration-300">
                <Mail className="h-5 w-5 text-text-100" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-text-100 mb-4">Enlaces Rápidos</h4>
            <div className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Excursiones', href: '#excursiones' },
                { name: 'Reservas', href: '#reservas' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-text-200 hover:text-accent-100 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-text-100 mb-4">Contacto</h4>
            <div className="space-y-3 text-text-200">
              <p>Puerto de Los Cristianos</p>
              <p>Tenerife Sur, Canarias</p>
              <p className="text-accent-100 font-semibold">+34 922 XXX XXX</p>
              <p className="text-accent-100 font-semibold">info@ballenastenerife.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-200/20 mt-12 pt-8 text-center">
          <p className="text-text-200 text-sm">
            © 2024 Ballenas Tenerife Sur. Todos los derechos reservados.
          </p>
          <p className="text-text-200 text-xs mt-2">
            {/* FIXME: Agregar enlaces reales a política de privacidad y términos */}
            <a href="#" className="hover:text-accent-100 transition-colors duration-300">Política de Privacidad</a>
            {' • '}
            <a href="#" className="hover:text-accent-100 transition-colors duration-300">Términos de Servicio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}