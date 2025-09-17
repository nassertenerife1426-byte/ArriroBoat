import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CalendarSection from '@/components/CalendarSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-100">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CalendarSection />
      <ContactSection />
      <Footer />
    </main>
  );
}