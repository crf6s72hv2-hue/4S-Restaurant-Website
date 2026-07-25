import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'ar';

type LanguageContextValue = {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const translations: Record<Lang, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.hookah': 'Hookah',
    'nav.gallery': 'Gallery',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.reserve': 'Reserve a Table',

    'hero.location': 'Duhok · Iraq',
    'hero.title1': 'Experience the Taste',
    'hero.title2': 'of Excellence',
    'hero.subtitle': 'Premium dining, unforgettable flavors, and exceptional hospitality in the heart of Duhok.',
    'hero.viewMenu': 'View Menu',
    'hero.reserveTable': 'Reserve Table',
    'hero.rating': 'loved by Duhok',
    'hero.hours': 'Open daily · 08:00 — 24:00',
    'hero.scroll': 'Scroll',

    'about.label': 'About 4S',
    'about.title1': 'Where Duhok gathers to',
    'about.title2': 'savour',
    'about.title3': 'the exceptional.',
    'about.body': 'At 4S Restaurant & Café, food is presented in its highest quality form — creating a dining experience like no other. We blend the warmth of Iraqi hospitality with a modern kitchen, offering Eastern classics, Western steaks, fresh seafood, wood-fired pizzas and more. Our tables are set for long conversations, slow courses, and memories worth coming back to.',
    'about.stat': 'Four Seasons',
    'about.statSub': 'of Flavor',
    'about.pillar1.t': 'Sourced with Care',
    'about.pillar1.d': 'Fresh local produce and quality ingredients, chosen daily for every plate we serve.',
    'about.pillar2.t': 'Crafted by Hand',
    'about.pillar2.d': 'From Eastern classics to Western steaks — every dish finished to order by our kitchen.',
    'about.pillar3.t': 'Warm Hospitality',
    'about.pillar3.d': 'A welcome that feels like home, with service that never crowds the moment.',
    'about.pillar4.t': 'Refined Atmosphere',
    'about.pillar4.d': 'Deep teal tones, soft lighting and curated music for an unhurried dining experience.',

    'featured.label': 'Featured Dishes',
    'featured.title': 'Signatures from our kitchen',
    'featured.subtitle': 'A glimpse of the plates our guests return for — each one a study in balance, texture and restraint.',

    'menu.label': 'The Menu',
    'menu.title': 'Four Seasons of Flavor',
    'menu.subtitle': 'Every dish is presented in its highest quality form — from Eastern classics to Western steaks, seafood, pasta, pizza and more.',
    'menu.disclaimer': 'Prices in Iraqi Dinar. Please inform our team of any allergies. Menu may vary seasonally.',
    'menu.all': 'All',
    'menu.new': 'New',

    'hookah.label': 'Hookah & Shisha',
    'hookah.title': 'Premium Shisha Flavours',
    'hookah.subtitle': 'Crafted for a long, unhurried evening — from fresh fruit hookah to our signature 4S mixes.',
    'hookah.disclaimer': 'Available for in-house guests. Must be 18+.',

    'gallery.label': 'Gallery',
    'gallery.title': 'Moments from our table',
    'gallery.subtitle': 'A look inside the room, the plates, and the atmosphere that make 4S a place worth photographing.',
    'gallery.follow': 'Follow us on Instagram for more',

    'reviews.label': 'Guest Reviews',
    'reviews.title': 'Loved by Duhok's diners',

    'instagram.label': 'On Instagram',
    'instagram.title': 'Follow the latest',
    'instagram.subtitle': 'Follow our kitchen and table for new dishes, specials and behind-the-scenes moments.',
    'instagram.follow': 'Follow',

    'contact.label': 'Contact & Location',
    'contact.title': 'Reserve your table',
    'contact.subtitle': 'Book ahead for evenings and weekends, or simply drop by — we will find you a seat with a view.',
    'contact.formTitle': 'Request a reservation',
    'contact.formSub': 'We will confirm by phone within the hour.',
    'contact.name': 'Full name',
    'contact.phone': 'Phone',
    'contact.date': 'Date',
    'contact.time': 'Time',
    'contact.guests': 'Guests',
    'contact.guest': 'guest',
    'contact.guests_plural': 'guests',
    'contact.requests': 'Special requests',
    'contact.requestsPlaceholder': 'Occasion, seating preference, allergies...',
    'contact.submit': 'Confirm Reservation',
    'contact.sent': 'Request received — we will be in touch',
    'contact.location': 'Location',
    'contact.callPhone': 'Phone',
    'contact.email': 'Email',
    'contact.openingHours': 'Opening hours',
    'contact.whatsapp': 'Message us on WhatsApp',
    'contact.namePlaceholder': 'Your name',

    'footer.tagline': 'Four Seasons of Flavor. Premium dining, unforgettable flavors, and exceptional hospitality in the heart of Duhok.',
    'footer.explore': 'Explore',
    'footer.visit': 'Visit',
    'footer.touch': 'Get in touch',
    'footer.rights': 'All rights reserved.',
    'footer.backTop': 'Back to top',

    'floating.chat': 'Chat with us',
    'floating.call': 'Call now',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.menu': 'القائمة',
    'nav.hookah': 'الأركيلة',
    'nav.gallery': 'المعرض',
    'nav.reviews': 'التقييمات',
    'nav.contact': 'تواصل',
    'nav.reserve': 'احجز طاولة',

    'hero.location': 'دهوك · العراق',
    'hero.title1': 'اكتشف مذاق',
    'hero.title2': 'التميز',
    'hero.subtitle': 'تجربة طعام فاخرة، نكهات لا تُنسى، وضيافة استثنائية في قلب دهوك.',
    'hero.viewMenu': 'عرض القائمة',
    'hero.reserveTable': 'احجز طاولة',
    'hero.rating': 'محبوبة في دهوك',
    'hero.hours': 'مفتوح يومياً · 08:00 — 24:00',
    'hero.scroll': 'اسحب للأسفل',

    'about.label': 'عن 4S',
    'about.title1': 'حيث تجتمع دهوك لـ',
    'about.title2': 'تذوق',
    'about.title3': 'التميز.',
    'about.body': 'في مطعم ومقهى 4S، يُقدّم الطعام بأعلى جودة — لتجربة طعام لا مثيل لها. نمزج دفء الضيافة العراقية مع مطبخ عصري، نقدّم الأطباق الشرقية الكلاسيكية، الستيكات الغربية، المأكولات البحرية الطازجة، البيتزا المخبوزة على الحجر والمزيد. طاولاتنا مهيأة لمحادثات طويلة، أطباق متأنية، وذكريات تستحق العودة.',
    'about.stat': 'أربعة مواسم',
    'about.statSub': 'من النكهة',
    'about.pillar1.t': 'مكونات منتقاة بعناية',
    'about.pillar1.d': 'منتجات محلية طازجة ومكونات عالية الجودة، تُختار يومياً لكل طبق نقدّمه.',
    'about.pillar2.t': 'محضرة يدوياً',
    'about.pillar2.d': 'من الأطباق الشرقية إلى الستيكات الغربية — كل طبق يُحضّر عند الطلب من مطبخنا.',
    'about.pillar3.t': 'ضيافة دافئة',
    'about.pillar3.d': 'ترحيب يبعث على الشعور بالوطن، وخدمة لا تطغى على اللحظة.',
    'about.pillar4.t': 'أجواء راقية',
    'about.pillar4.d': 'درجات تيل عميقة، إضاءة ناعمة وموسيقى منتقاة لتجربة طعام متأنية.',

    'featured.label': 'أطباق مميزة',
    'featured.title': 'اختصاصات من مطبخنا',
    'featured.subtitle': 'لمحة عن الأطباق التي يعود لها ضيوفنا — كل واحد منها دراسة في التوازن والملمس.',

    'menu.label': 'القائمة',
    'menu.title': 'أربعة مواسم من النكهة',
    'menu.subtitle': 'كل طبق يُقدّم بأعلى جودة — من الأطباق الشرقية إلى الستيكات الغربية والمأكولات البحرية والباستا والبيتزا والمزيد.',
    'menu.disclaimer': 'الأسعار بالدينار العراقي. يرجى إبلاغ فريقنا بأي حساسية. قد تتغير القائمة موسمياً.',
    'menu.all': 'الكل',
    'menu.new': 'جديد',

    'hookah.label': 'الأركيلة والشيشة',
    'hookah.title': 'نكهات شيشة فاخرة',
    'hookah.subtitle': 'محضرة لسهارة طويلة ومتأنية — من أركيلة الفواكه الطازجة إلى خلطة 4S المميزة.',
    'hookah.disclaimer': 'متاحة للضيوف داخل المطعم. 18+ فقط.',

    'gallery.label': 'المعرض',
    'gallery.title': 'لحظات من طاولتنا',
    'gallery.subtitle': 'نظرة داخل القاعة، الأطباق، والأجواء التي تجعل 4S مكاناً يستحق التصوير.',
    'gallery.follow': 'تابعنا على إنستغرام للمزيد',

    'reviews.label': 'تقييمات الضيوف',
    'reviews.title': 'محبوبة من ضيوف دهوك',

    'instagram.label': 'على إنستغرام',
    'instagram.title': 'تابع آخر المستجدات',
    'instagram.subtitle': 'تابع مطبخنا وطاولتنا لأطباق جديدة وعروض ولحظات خلف الكواليس.',
    'instagram.follow': 'متابعة',

    'contact.label': 'تواصل والموقع',
    'contact.title': 'احجز طاولتك',
    'contact.subtitle': 'احجز مسبقاً للسهرة وأيام العطلة، أو مر بنا — سنجد لك مكاناً بإطلالة.',
    'contact.formTitle': 'طلب حجز',
    'contact.formSub': 'سنؤكد عبر الهاتف خلال ساعة.',
    'contact.name': 'الاسم الكامل',
    'contact.phone': 'الهاتف',
    'contact.date': 'التاريخ',
    'contact.time': 'الوقت',
    'contact.guests': 'الضيوف',
    'contact.guest': 'ضيف',
    'contact.guests_plural': 'ضيوف',
    'contact.requests': 'طلبات خاصة',
    'contact.requestsPlaceholder': 'المناسبة، تفضيل الجلوس، الحساسية...',
    'contact.submit': 'تأكيد الحجز',
    'contact.sent': 'تم استلام الطلب — سنتواصل معك',
    'contact.location': 'الموقع',
    'contact.callPhone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.openingHours': 'ساعات العمل',
    'contact.whatsapp': 'راسلنا على واتساب',
    'contact.namePlaceholder': 'اسمك',

    'footer.tagline': 'أربعة مواسم من النكهة. تجربة طعام فاخرة، نكهات لا تُنسى، وضيافة استثنائية في قلب دهوك.',
    'footer.explore': 'استكشف',
    'footer.visit': 'زرنا',
    'footer.touch': 'تواصل معنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.backTop': 'العودة للأعلى',

    'floating.chat': 'دردش معنا',
    'floating.call': 'اتصل الآن',
  },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('4s-lang');
      if (saved === 'en' || saved === 'ar') return saved;
    }
    return 'en';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem('4s-lang', lang);
  }, [lang, dir]);

  const t = (key: string): string => translations[lang][key] ?? key;

  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
