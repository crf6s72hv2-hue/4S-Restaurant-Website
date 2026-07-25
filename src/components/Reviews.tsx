import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '@/data/content';
import { useLang } from '@/i18n/LanguageContext';

export function Reviews() {
  const { t, lang, dir } = useLang();
  const [index, setIndex] = useState(0);
  const count = reviews.length;
  const timer = useRef<number | null>(null);

  const go = (n: number) => setIndex((index + n + count) % count);

  useEffect(() => {
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [count]);

  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-teal-600/15 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="flex h-px w-10 bg-ember-400" />
            <span className="section-label">{t('reviews.label')}</span>
            <span className="flex h-px w-10 bg-ember-400" />
          </div>
          <h2 className="heading text-4xl text-white sm:text-5xl">{t('reviews.title')}</h2>
        </div>

        <div className="reveal reveal-delay-1 relative">
          <div className="relative overflow-hidden rounded-[2rem] glass p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 text-ember-400/20 rtl:left-8 rtl:right-auto rtl:rotate-180" size={72} />

            <div className="relative">
              <div className="mb-5 flex text-ember-400">
                {Array.from({ length: reviews[index].rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <blockquote
                key={index}
                className="animate-fade-in heading text-2xl leading-relaxed text-white sm:text-3xl"
                dir={dir}
              >
                “{reviews[index].text[lang]}”
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-base font-bold text-white ring-1 ring-white/10">
                  {reviews[index].name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-white">{reviews[index].name}</p>
                  <p className="text-sm text-charcoal-300">{reviews[index].role[lang]}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === index ? 'w-8 bg-ember-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center rounded-full glass-light text-white transition-all hover:border-ember-400/60 hover:text-ember-400"
              >
                <ChevronLeft size={18} className="rtl:rotate-180" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center rounded-full glass-light text-white transition-all hover:border-ember-400/60 hover:text-ember-400"
              >
                <ChevronRight size={18} className="rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
