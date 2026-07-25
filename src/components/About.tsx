import { Leaf, Flame, HeartHandshake, Sparkles } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

export function About() {
  const { t } = useLang();

  const pillars = [
    { icon: Leaf, title: t('about.pillar1.t'), text: t('about.pillar1.d') },
    { icon: Flame, title: t('about.pillar2.t'), text: t('about.pillar2.d') },
    { icon: HeartHandshake, title: t('about.pillar3.t'), text: t('about.pillar3.d') },
    { icon: Sparkles, title: t('about.pillar4.t'), text: t('about.pillar4.d') },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-teal-700/20 blur-[140px] rtl:left-0 rtl:right-auto" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="4S Restaurant & Café interior"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-4 w-44 overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl shadow-black/50 sm:-right-8 sm:w-56 rtl:-left-4 rtl:right-auto sm:rtl:-left-8">
              <img
                src="https://images.pexels.com/photos/54490/pexels-photo-54490.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef plating a dish at 4S"
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute -left-4 top-8 glass rounded-2xl px-5 py-4 shadow-xl shadow-black/40 sm:-left-8 rtl:-right-4 rtl:left-auto sm:rtl:-right-8">
              <p className="heading text-3xl text-ember-400">{t('about.stat')}</p>
              <p className="text-xs uppercase tracking-widest text-charcoal-300">{t('about.statSub')}</p>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-px w-10 bg-ember-400" />
              <span className="section-label">{t('about.label')}</span>
            </div>

            <h2 className="heading text-4xl text-white sm:text-5xl">
              {t('about.title1')} <span className="text-gradient-teal">{t('about.title2')}</span> {t('about.title3')}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-charcoal-200 sm:text-lg">
              {t('about.body')}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-2xl glass-light p-5 transition-all duration-500 hover:-translate-y-1 hover:border-ember-400/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500/20 text-ember-400 ring-1 ring-ember-400/20 transition-colors group-hover:bg-ember-400/20">
                    <p.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal-300">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
