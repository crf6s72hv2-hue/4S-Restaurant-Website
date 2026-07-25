import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { menuCategories } from '@/data/menuData';
import { useLang } from '@/i18n/LanguageContext';

export function Menu() {
  const { t, lang, dir } = useLang();
  const foodCategories = menuCategories.filter((c) => c.name.en !== 'Hookah');
  const [active, setActive] = useState(foodCategories[0].id);
  const category = foodCategories.find((c) => c.id === active) ?? foodCategories[0];

  return (
    <section id="menu" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-ember-400/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="flex h-px w-10 bg-ember-400" />
            <span className="section-label">{t('menu.label')}</span>
            <span className="flex h-px w-10 bg-ember-400" />
          </div>
          <h2 className="heading text-4xl text-white sm:text-5xl">{t('menu.title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-charcoal-300">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="reveal reveal-delay-1 mb-10 flex flex-wrap justify-center gap-2">
          {foodCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === c.id
                  ? 'bg-ember-400 text-charcoal-950 glow-ember'
                  : 'glass-light text-charcoal-200 hover:text-white'
              }`}
            >
              {c.name[lang]}
            </button>
          ))}
        </div>

        <p
          key={category.id + '-blurb'}
          className="animate-fade-in mb-8 text-center text-sm uppercase tracking-[0.25em] text-charcoal-400"
        >
          {category.blurb[lang]}
        </p>

        <div
          key={category.id}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
        >
          {category.items.map((item, i) => (
            <article
              key={item.name.en}
              className="group relative animate-scale-in overflow-hidden rounded-2xl glass ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:ring-ember-400/40"
              style={{ animationDelay: `${Math.min(i * 50, 400)}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[lang]}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/10 to-transparent" />
                {item.isNew && (
                  <span className="absolute top-3 flex items-center gap-1 rounded-full bg-teal-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
                    <Sparkles size={10} /> {t('menu.new')}
                  </span>
                )}
              </div>
              <div className="relative -mt-8 px-3.5 pb-4 pt-1 sm:px-4">
                <h3 className="heading text-base leading-tight text-white sm:text-lg" dir={dir}>
                  {item.name[lang]}
                </h3>
                {item.desc[lang] && (
                  <p className="mt-1 text-xs leading-relaxed text-charcoal-300" dir={dir}>
                    {item.desc[lang]}
                  </p>
                )}
                <p className="mt-2 text-sm font-semibold text-ember-400">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-12 text-center text-xs text-charcoal-400">{t('menu.disclaimer')}</p>
      </div>
    </section>
  );
}
