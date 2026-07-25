import { ArrowUpRight } from 'lucide-react';
import { featuredDishes } from '@/data/menuData';
import { useLang } from '@/i18n/LanguageContext';

export function FeaturedDishes() {
  const { t, lang } = useLang();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-px w-10 bg-ember-400" />
            <span className="section-label">{t('featured.label')}</span>
          </div>
          <h2 className="heading text-4xl text-white sm:text-5xl">{t('featured.title')}</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-300">{t('featured.subtitle')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredDishes.map((dish, i) => (
            <article
              key={dish.name.en}
              className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-[1.75rem] glass ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:ring-ember-400/40`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name[lang]}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                {dish.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-ember-400/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal-950 backdrop-blur-sm rtl:right-4 rtl:left-auto">
                    {dish.tag[lang]}
                  </span>
                )}
              </div>

              <div className="relative -mt-16 px-6 pb-7 pt-2">
                <h3 className="heading text-2xl text-white">{dish.name[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{dish.desc[lang]}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-semibold text-ember-400">{dish.price}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-ember-400 group-hover:bg-ember-400 group-hover:text-charcoal-950">
                    <ArrowUpRight size={16} className="rtl:rotate-[-90deg]" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
