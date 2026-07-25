import { LanguageProvider } from '@/i18n/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { FeaturedDishes } from '@/components/FeaturedDishes';
import { Menu } from '@/components/Menu';
import { Hookah } from '@/components/Hookah';
import { Gallery } from '@/components/Gallery';
import { Reviews } from '@/components/Reviews';
import { InstagramPreview } from '@/components/InstagramPreview';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function Site() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <Hookah />
        <Gallery />
        <Reviews />
        <InstagramPreview />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
