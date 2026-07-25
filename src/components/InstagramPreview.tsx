import { Instagram, ArrowUpRight } from 'lucide-react';
import { instagramPosts, restaurantInfo } from '@/data/content';
import { useLang } from '@/i18n/LanguageContext';

export function InstagramPreview() {
  const { t, lang } = useLang();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-12 flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-px w-10 bg-ember-400" />
            <span className="section-label">{t('instagram.label')}</span>
            <span className="flex h-px w-10 bg-ember-400" />
          </div>
          <h2 className="heading text-4xl text-white sm:text-5xl">{restaurantInfo.instagramHandle}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal-300">
            {t('instagram.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {instagramPosts.slice(0, 12).map((post, i) => (
            <a
              key={post.src}
              href={restaurantInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className={`reveal reveal-delay-${(i % 5) + 1} group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10`}
            >
              <img
                src={post.src}
                alt={post.alt[lang]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-400 group-hover:opacity-100">
                <ArrowUpRight size={22} className="text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <a href={restaurantInfo.instagram} target="_blank" rel="noreferrer" className="btn-ghost group">
            <Instagram size={17} />
            {t('instagram.follow')} {restaurantInfo.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
