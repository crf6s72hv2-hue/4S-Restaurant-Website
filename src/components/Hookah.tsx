import { Wind } from 'lucide-react';
import { menuCategories } from '@/data/menuData';
import { useLang } from '@/i18n/LanguageContext';

export function Hookah() {
  const { t, lang, dir } = useLang();
  const hookah = menuCategories.find((c) => c.name.en === 'Hookah');

  if (!hookah) return null;

  return (
    <section id="hookah" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-teal-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-ember-400/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="flex h-px w-10 bg-ember-400" />
            <span className="section-label">{t('hookah.label')}</span>
            <span className="flex h-px w-10 bg-ember-400" />
          </div>
          <h2 className="heading text-4xl text-white sm:text-5xl">{t('hookah.title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-charcoal-300">
            {t('hookah.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {hookah.items.map((item, i) => (
            <article
              key={item.name.en}
              className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-2xl glass ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:ring-ember-400/40`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[lang]}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/15 to-transparent" />
                <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full glass-light text-ember-400 rtl:left-3 rtl:right-auto">
                  <Wind size={15} />
                </div>
              </div>
              <div className="relative -mt-10 px-3.5 pb-4 pt-1 sm:px-4">
                <h3 className="heading text-base leading-tight text-white sm:text-lg" dir={dir}>
                  {item.name[lang]}
                </h3>
                <p className="mt-2 text-sm font-semibold text-ember-400">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-12 text-center text-xs text-charcoal-400">{t('hookah.disclaimer')}</p>
      </div>
    </section>
  );
}
