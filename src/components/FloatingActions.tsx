import { Phone, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '@/data/content';
import { useLang } from '@/i18n/LanguageContext';

export function FloatingActions() {
  const { t, dir } = useLang();

  return (
    <div className={`fixed bottom-5 z-40 flex flex-col gap-3 ${dir === 'rtl' ? 'left-5' : 'right-5'}`}>
      <a
        href={`https://wa.me/${restaurantInfo.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 transition-all duration-300 hover:scale-110 animate-pulse-glow"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-charcoal-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 ${
            dir === 'rtl' ? 'right-16' : 'left-16'
          }`}
        >
          {t('floating.chat')}
        </span>
      </a>
      <a
        href={`tel:${restaurantInfo.phoneTel}`}
        aria-label="Call the restaurant"
        className="group grid h-14 w-14 place-items-center rounded-full bg-ember-400 text-charcoal-950 shadow-xl shadow-black/40 transition-all duration-300 hover:scale-110"
      >
        <Phone size={22} fill="currentColor" />
        <span
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-charcoal-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 ${
            dir === 'rtl' ? 'right-16' : 'left-16'
          }`}
        >
          {t('floating.call')}
        </span>
      </a>
    </div>
  );
}
