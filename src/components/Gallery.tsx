import { useState, useEffect, useCallback } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { instagramPosts, restaurantInfo } from '@/data/content';
import { useLang } from '@/i18n/LanguageContext';

export function Gallery() {
  const { t, lang } = useLang();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const isOpen = lightbox !== null;

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % instagramPosts.length)),
    []
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + instagramPosts.length) % instagramPosts.length)),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, next, prev]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-px w-10 bg-ember-400" />
              <span className="section-label">{t('gallery.label')}</span>
            </div>
            <h2 className="heading text-4xl text-white sm:text-5xl">{t('gallery.title')}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-charcoal-300">{t('gallery.subtitle')}</p>
        </div>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {instagramPosts.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i)}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative block w-full overflow-hidden rounded-2xl ring-1 ring-white/10`}
            >
              <img
                src={img.src}
                alt={img.alt[lang]}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110 ${
                  i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex items-center gap-2 p-4 text-xs font-medium text-white">
                  <Camera size={14} className="text-ember-400" />
                  {img.alt[lang]}
                </span>
              </div>
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full glass-light text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rtl:left-3 rtl:right-auto">
                <Instagram size={15} />
              </span>
            </button>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <a
            href={restaurantInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost group"
          >
            <Instagram size={17} />
            {t('gallery.follow')}
          </a>
        </div>
      </div>

      {isOpen && lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/90 backdrop-blur-md animate-fade-in"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full glass-light text-white transition-colors hover:text-ember-400 rtl:left-5 rtl:right-auto"
          >
            <X size={22} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full glass-light text-white transition-colors hover:text-ember-400 sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <figure className="mx-auto max-h-[85vh] max-w-3xl px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={instagramPosts[lightbox].src}
              alt={instagramPosts[lightbox].alt[lang]}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl shadow-black/50 animate-scale-in"
            />
            <figcaption className="mt-4 text-center text-sm text-charcoal-300">
              {instagramPosts[lightbox].alt[lang]}
            </figcaption>
          </figure>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full glass-light text-white transition-colors hover:text-ember-400 sm:right-6 rtl:left-3 rtl:right-auto sm:rtl:left-6"
          >
            <ChevronRight size={24} />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full glass-light px-4 py-1.5 text-xs font-medium text-charcoal-200">
            {lightbox + 1} / {instagramPosts.length}
          </span>
        </div>
      )}
    </section>
  );
}
