import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUp, Ghost } from 'lucide-react';
import { Logo } from './Logo';
import { restaurantInfo } from '@/data/content';
import { useLang } from '@/i18n/LanguageContext';

export function Footer() {
  const { t, lang } = useLang();

  const columns = [
    {
      title: t('footer.explore'),
      links: [
        { label: t('nav.home'), href: '#home' },
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.menu'), href: '#menu' },
        { label: t('nav.hookah'), href: '#hookah' },
        { label: t('nav.gallery'), href: '#gallery' },
      ],
    },
    {
      title: t('footer.visit'),
      links: [
        { label: t('nav.reviews'), href: '#reviews' },
        { label: t('nav.reserve'), href: '#contact' },
        { label: t('nav.contact'), href: '#contact' },
        { label: 'Instagram', href: restaurantInfo.instagram },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/8 bg-charcoal-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-400/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-charcoal-300">{t('footer.tagline')}</p>
            <div className="mt-6 flex gap-3">
              <Social href={restaurantInfo.instagram} label="Instagram">
                <Instagram size={18} />
              </Social>
              <Social href={restaurantInfo.facebook} label="Facebook">
                <Facebook size={18} />
              </Social>
              <Social href={restaurantInfo.snapchat} label="Snapchat">
                <Ghost size={18} />
              </Social>
              <Social href={`tel:${restaurantInfo.phoneTel}`} label="Phone">
                <Phone size={18} />
              </Social>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-400">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm text-charcoal-300 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-400">
              {t('footer.touch')}
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-charcoal-300">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-teal-400" />
                {restaurantInfo.address[lang]}
              </li>
              <li className="flex gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-teal-400" />
                <a href={`tel:${restaurantInfo.phoneTel}`} className="transition-colors hover:text-white" dir="ltr">
                  {restaurantInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-teal-400" />
                <a href={`mailto:${restaurantInfo.email}`} className="transition-colors hover:text-white" dir="ltr">
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-center text-xs text-charcoal-400 sm:text-start">
            © {new Date().getFullYear()} {restaurantInfo.name[lang]} · {restaurantInfo.city[lang]}. {t('footer.rights')}
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs font-medium text-charcoal-300 transition-colors hover:text-ember-400"
          >
            {t('footer.backTop')} <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl glass-light text-charcoal-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember-400/50 hover:text-ember-400"
    >
      {children}
    </a>
  );
}
