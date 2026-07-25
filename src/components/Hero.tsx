import { UtensilsCrossed, CalendarHeart, ChevronDown, Star } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Cinematic fine dining table setting at 4S Restaurant & Café"
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/55 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-transparent rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-teal-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-10 top-1/2 h-80 w-80 rounded-full bg-ember-400/15 blur-[130px]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-px w-10 bg-ember-400" />
            <span className="section-label">{t('hero.location')}</span>
          </div>

          <h1 className="heading text-[2.75rem] leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {t('hero.title1')}
            <br />
            {lang === 'en' ? (
              <>of <span className="text-gradient">Excellence</span></>
            ) : (
              <span className="text-gradient">{t('hero.title2')}</span>
            )}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-charcoal-200 sm:text-lg">
            {t('hero.subtitle')}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#menu" className="btn-primary group">
              <UtensilsCrossed size={17} />
              {t('hero.viewMenu')}
            </a>
            <a href="#contact" className="btn-ghost group">
              <CalendarHeart size={17} />
              {t('hero.reserveTable')}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-charcoal-300">
            <span className="flex items-center gap-2 text-sm">
              <span className="flex text-ember-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </span>
              <span className="font-medium text-white">4.9</span> · {t('hero.rating')}
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="text-sm">{t('hero.hours')}</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal-300 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t('hero.scroll')}</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
