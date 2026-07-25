import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, CalendarHeart, Check } from 'lucide-react';
import { restaurantInfo } from '@/data/content';
import { useLang } from '@/i18n/LanguageContext';

export function Contact() {
  const { t, lang, dir } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    window.setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-teal-600/15 blur-[140px] rtl:left-0 rtl:right-auto" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-px w-10 bg-ember-400" />
            <span className="section-label">{t('contact.label')}</span>
          </div>
          <h2 className="heading text-4xl text-white sm:text-5xl">{t('contact.title')}</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-300">{t('contact.subtitle')}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal reveal-delay-1 rounded-[2rem] glass p-7 sm:p-9">
            <h3 className="heading text-2xl text-white">{t('contact.formTitle')}</h3>
            <p className="mt-1 text-sm text-charcoal-300">{t('contact.formSub')}</p>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
              <Field label={t('contact.name')}>
                <input required type="text" name="name" placeholder={t('contact.namePlaceholder')} className={inputCls} />
              </Field>
              <Field label={t('contact.phone')}>
                <input required type="tel" name="phone" placeholder="+964 ..." className={inputCls} />
              </Field>
              <Field label={t('contact.date')}>
                <input required type="date" name="date" className={inputCls} />
              </Field>
              <Field label={t('contact.time')}>
                <input required type="time" name="time" className={inputCls} />
              </Field>
              <Field label={t('contact.guests')} full>
                <select name="guests" className={inputCls} defaultValue="2" dir={dir}>
                  {['1', '2', '3', '4', '5', '6', '7+'].map((n) => (
                    <option key={n} value={n} className="bg-charcoal-900">
                      {n} {n === '1' ? t('contact.guest') : t('contact.guests_plural')}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t('contact.requests')} full>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder={t('contact.requestsPlaceholder')}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <button type="submit" className="btn-primary mt-2 w-full sm:col-span-2">
                {sent ? (
                  <><Check size={17} /> {t('contact.sent')}</>
                ) : (
                  <><CalendarHeart size={17} /> {t('contact.submit')}</>
                )}
              </button>
            </form>
          </div>

          <div className="reveal reveal-delay-2 flex flex-col gap-6">
            <div className="grid gap-4 rounded-[2rem] glass p-7 sm:p-8">
              <InfoRow icon={MapPin} title={t('contact.location')}>
                {restaurantInfo.address[lang]}
              </InfoRow>
              <Divider />
              <InfoRow icon={Phone} title={t('contact.callPhone')}>
                <a href={`tel:${restaurantInfo.phoneTel}`} className="transition-colors hover:text-ember-400" dir="ltr">
                  {restaurantInfo.phoneDisplay}
                </a>
              </InfoRow>
              <Divider />
              <InfoRow icon={Mail} title={t('contact.email')}>
                <a href={`mailto:${restaurantInfo.email}`} className="transition-colors hover:text-ember-400" dir="ltr">
                  {restaurantInfo.email}
                </a>
              </InfoRow>
              <Divider />
              <InfoRow icon={Clock} title={t('contact.openingHours')}>
                {restaurantInfo.hours.map((h) => (
                  <span key={h.days.en} className="block" dir={dir}>
                    {h.days[lang]} · {h.time}
                  </span>
                ))}
              </InfoRow>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-2 w-full"
              >
                {t('contact.whatsapp')}
              </a>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-[2rem] ring-1 ring-white/10 min-h-[280px]">
              <iframe
                title="4S Restaurant & Café location on Google Maps"
                src={restaurantInfo.mapsEmbed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: 'invert(0.92) hue-rotate(170deg) saturate(0.7) brightness(0.9)' }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-charcoal-400 outline-none transition-all duration-300 focus:border-ember-400/60 focus:bg-white/10 focus:ring-2 focus:ring-ember-400/20';

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal-300">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-500/20 text-ember-400 ring-1 ring-ember-400/20">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-charcoal-100">{children}</p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-white/8" />;
}
