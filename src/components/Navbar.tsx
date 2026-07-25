import { useEffect, useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { Logo } from './Logo';
import { useLang } from '@/i18n/LanguageContext';

export function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.menu'), href: '#menu' },
    { label: t('nav.hookah'), href: '#hookah' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.reviews'), href: '#reviews' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/30' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="4S home" className="shrink-0 transition-opacity hover:opacity-90">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative px-4 py-2 text-sm font-medium text-charcoal-100 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-ember-400 to-transparent transition-transform duration-300 group-hover:scale-x-100 rtl:origin-right" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-ember-400/60 hover:text-ember-400"
          >
            <Languages size={15} />
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
          <a href="#contact" className="btn-primary !py-2.5 !px-6 text-xs">
            {t('nav.reserve')}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="grid h-11 w-11 place-items-center rounded-xl glass-light text-white"
          >
            <Languages size={18} />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-xl glass-light text-white"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`fixed inset-0 top-0 z-40 bg-charcoal-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-[72px] z-50 mx-3 origin-top rounded-3xl glass p-6 transition-all duration-400 ${
            open ? 'scale-y-100 opacity-100' : 'scale-y-90 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-charcoal-100 transition-colors hover:bg-white/5 hover:text-ember-400"
                  style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                >
                  {l.label}
                  <span className="text-ember-400/60 rtl:rotate-180">›</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            {t('nav.reserve')}
          </a>
        </div>
      </div>
    </header>
  );
}
