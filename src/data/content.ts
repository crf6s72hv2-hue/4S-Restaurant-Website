// Restaurant info — sourced from the official mynu.app API + Instagram.
export const restaurantInfo = {
  name: { en: '4S Restaurant & Café', ar: 'مطعم ومقهى 4S' },
  tagline: { en: 'Four Seasons of Flavor', ar: 'أربعة مواسم من النكهة' },
  city: { en: 'Duhok, Iraq', ar: 'دهوك، العراق' },
  address: { en: 'Ashty Road, Duhok, Kurdistan Region, Iraq', ar: 'شارع آشتي، دهوك، إقليم كردستان، العراق' },
  phoneDisplay: '+964 751 310 4444',
  phoneTel: '+9647513104444',
  whatsapp: '9647513104444',
  email: 'hello@4sduhok.com',
  instagram: 'https://www.instagram.com/4S.Restaurant.cafe/',
  instagramHandle: '@4s.restaurant.cafe',
  facebook: 'https://www.facebook.com/4s.restaurants.cafe',
  snapchat: 'https://www.snapchat.com/add/fours.rest',
  googleMaps: 'https://www.google.com/maps/place/4S+Restaurant+%26+Cafe/@36.8608095,42.9768622,21z/data=!4m6!3m5!1s0x40088de3d471b373:0x5e93896fecfb5f7e!8m2!3d36.8608661!4d42.9766954!16s%2Fg%2F11v0xz_dd6',
  mapsEmbed: 'https://www.google.com/maps?q=4S+Restaurant+%26+Cafe+Ashty+Road+Duhock&output=embed',
  hours: [
    { days: { en: 'Sunday — Thursday', ar: 'الأحد — الخميس' }, time: '08:00 — 24:00' },
    { days: { en: 'Friday — Saturday', ar: 'الجمعة — السبت' }, time: '08:00 — 24:00' },
  ],
};

export type Review = {
  name: string;
  role: { en: string; ar: string };
  rating: number;
  text: { en: string; ar: string };
};

export const reviews: Review[] = [
  {
    name: 'Lana H.',
    role: { en: 'Food Blogger', ar: 'مدوّنة طعام' },
    rating: 5,
    text: {
      en: 'Easily the most refined dining experience in Duhok. The Poivre Steak is sensational and the salmon was cooked to perfection.',
      ar: 'بلا شك أرقى تجربة طعام في دهوك. ستك البوفار رائع والسلمون كان مطبوخاً باحتراف.',
    },
  },
  {
    name: 'Aram K.',
    role: { en: 'Regular Guest', ar: 'ضيف دائم' },
    rating: 5,
    text: {
      en: 'From the welcome at the door to the last sip of coffee, every detail feels considered. 4S has become our family’s celebration spot.',
      ar: 'من الترحيب عند الباب إلى آخر رشفة قهوة، كل تفصيل مدروس. 4S أصبح مكان احتفال عائلتنا.',
    },
  },
  {
    name: 'Dilan M.',
    role: { en: 'Architect', ar: 'مهندسة معمارية' },
    rating: 5,
    text: {
      en: 'The ambience is warm yet sophisticated — deep teal tones, soft lighting and impeccable service. A true gem on Ashty Road.',
      ar: 'الأجواء دافئة وراقية — درجات تيل عميقة، إضاءة ناعمة وخدمة لا تشوبها شائبة. جوهرة حقيقية في شارع آشتي.',
    },
  },
  {
    name: 'Sherin A.',
    role: { en: 'Designer', ar: 'مصممة' },
    rating: 5,
    text: {
      en: 'The dolma and biryani taste like home, elevated. Beautiful presentation and even better flavour. Four Seasons of Flavor indeed.',
      ar: 'الدولمة والبرياني طعمها كالبيت ولكن بأرقى مستوى. تقديم جميل ونكهة أجمل. أربعة مواسم من النكهة بحق.',
    },
  },
];

export const instagramPosts: { src: string; alt: { en: string; ar: string } }[] = [
  { src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Latte art', ar: 'فن اللاتيه' } },
  { src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Fine dining table', ar: 'طاولة طعام فاخرة' } },
  { src: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Dessert plating', ar: 'تقديم الحلويات' } },
  { src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Cocktail with garnish', ar: 'كوكتيل بالزينة' } },
  { src: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Pizza fresh from oven', ar: 'بيتزا طازجة من الفرن' } },
  { src: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Burger and fries', ar: 'برغر وبطاطس' } },
  { src: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Pancakes with berries', ar: 'بانكيك بالتوت' } },
  { src: 'https://images.pexels.com/photos/2611821/pexels-photo-2611821.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Gourmet plating', ar: 'تقديم الذواقة' } },
  { src: 'https://images.pexels.com/photos/302468/pexels-photo-302468.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Steak and vegetables', ar: 'ستيك وخضروات' } },
  { src: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Grilled specialty', ar: 'تخصص مشوي' } },
  { src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Appetizer selection', ar: 'تشكيلة المقبلات' } },
  { src: 'https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Pasta dish', ar: 'طبق باستا' } },
];
