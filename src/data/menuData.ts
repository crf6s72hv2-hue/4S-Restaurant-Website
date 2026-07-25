// Auto-generated from the official 4S mynu.app menu API.
// 25 categories, 169 items, bilingual (EN/AR), real product images.
// To update: re-fetch from https://m.mynu.app/api/v1/menu/66b20282ea6a7a41ab47e017

export type MenuCategory = {
  id: string;
  name: { en: string; ar: string };
  blurb: { en: string; ar: string };
  image: string;
  items: MenuItem[];
};

export type MenuItem = {
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  price: string;
  image: string;
  isNew?: boolean;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "cat0",
    name: { en: "Soups", ar: "الشوربة" },
    blurb: { en: "Warm, comforting bowls to begin.", ar: "أطباق دافئة ومريحة للبدء." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/SOU.png",
    items: [
    { name: { en: "Mushroom Soup", ar: "شوربة فطر" }, desc: { en: "", ar: "" }, price: "5,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/887702629.jpeg" }
    ]
  },
  {
    id: "cat1",
    name: { en: "Cold Appetizers", ar: "مقبلات باردة" },
    blurb: { en: "Fresh, chilled starters to awaken the palate.", ar: "مقبلات باردة ومنعشة لفتح الشهية." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/CDA.jpeg",
    items: [
    { name: { en: "Baba ghanoush", ar: "بابا غنوج" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/54792516.jpeg" },
    { name: { en: "Beetroot Hummus", ar: "حمص شوندر" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/803038880.jpeg" },
    { name: { en: "G Kufta", ar: "يلانجي" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/329702195.jpeg" },
    { name: { en: "Hummus with Meat", ar: "حمص بالحمة" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/594180373.jpeg" },
    { name: { en: "Hummus with Tahini", ar: "حمص بالطحينة" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/290446044.jpeg" },
    { name: { en: "Motabal", ar: "متبل" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/686526015.jpeg" },
    { name: { en: "English Appetizers", ar: "مقبلات إنكليزية" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/185527055.jpeg" }
    ]
  },
  {
    id: "cat2",
    name: { en: "Hot Appetizers", ar: "مقبلات ساخنة" },
    blurb: { en: "Crispy, savoury bites served warm.", ar: "لقمات مقرمشة ومالحة تقدم ساخنة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/HOA.jpeg",
    items: [
    { name: { en: "Borek with Meat", ar: "بورك باللحم" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/98136661.jpeg" },
    { name: { en: "Borek with Cheese", ar: "بورك بالجبن" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/341964478.jpeg" },
    { name: { en: "Tripoli kibbeh", ar: "كبة طرابلسية" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/328336728.jpeg" },
    { name: { en: "Finger Cheese", ar: "فينكر بالجبن " }, desc: { en: "", ar: "" }, price: "5,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/406281221.jpeg" }
    ]
  },
  {
    id: "cat3",
    name: { en: "Salads", ar: "سلطات" },
    blurb: { en: "Bright, crisp and fresh.", ar: "سلطات مشرقة ومقرمشة وطازجة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/SLD.jpeg",
    items: [
    { name: { en: "Avocado Salad", ar: "سلطة أفوكادو" }, desc: { en: "", ar: "" }, price: "11,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/155826630.jpeg" },
    { name: { en: "Tabbouleh", ar: "تبولة" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/673665504.jpeg" },
    { name: { en: "Diet Salad", ar: "سلطة دايت" }, desc: { en: "", ar: "" }, price: "13,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/30358761.jpeg" },
    { name: { en: "Arugula salad", ar: "سلطة جرجير" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/828012486.jpeg" },
    { name: { en: "Sharqiya", ar: "سلطة شرقية" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/997051445.jpeg" },
    { name: { en: "Caesar", ar: "سلطة سيزر" }, desc: { en: "", ar: "" }, price: "9,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/670410555.jpeg" },
    { name: { en: "4S salad", ar: "سلطة 4S" }, desc: { en: "", ar: "" }, price: "13,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/35273097.jpeg" },
    { name: { en: "Fattoush", ar: "سلطة فتوش" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/289282316.jpeg" }
    ]
  },
  {
    id: "cat4",
    name: { en: "Western Dishes", ar: "الأطباق الغربیة" },
    blurb: { en: "Steaks and Western classics, plated to order.", ar: "ستيكات وأطباق غربية كلاسيكية تقدم عند الطلب." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/WEE.jpeg",
    items: [
    { name: { en: "Poivre Steak", ar: "بوافر ستيك" }, desc: { en: "", ar: "" }, price: "26,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/66790492.jpeg" },
    { name: { en: "Medallium Steak", ar: "ستيك ميداليون" }, desc: { en: "", ar: "" }, price: "27,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/18633996.jpeg" },
    { name: { en: "Beef stroganoff", ar: "بيف ستريغانوف" }, desc: { en: "", ar: "" }, price: "24,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/429741176.jpeg" },
    { name: { en: "Chicken Steak with Herbs and Lemon", ar: "ستيك دجاج بالاعشاب وليمون " }, desc: { en: "", ar: "" }, price: "22,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/70384589.jpeg" },
    { name: { en: "Chicken Steak ", ar: "ستيك دجاج" }, desc: { en: "", ar: "" }, price: "22,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/973632759.jpeg" },
    { name: { en: "Chicken Steak with Curry", ar: "ستیک دجاج بالكاري" }, desc: { en: "", ar: "" }, price: "22,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/56737666.jpeg" },
    { name: { en: "Chicken Steak with mushrooms", ar: "ستيك دجاج بالفطر" }, desc: { en: "", ar: "" }, price: "23,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/57767639.jpeg" },
    { name: { en: "Chicken Cordon Bleu", ar: "كوردون بلو دجاج" }, desc: { en: "", ar: "" }, price: "25,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/660169029.jpeg" },
    { name: { en: "Chicken Fajita Meal", ar: "وجبة فاهيتا دجاج" }, desc: { en: "", ar: "" }, price: "20,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/61775115.jpeg" },
    { name: { en: "Dynamite Chicken", ar: "داينميت دجاج" }, desc: { en: "", ar: "" }, price: "20,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/173288978.jpeg" },
    { name: { en: "Chicken Escalope", ar: "سكالوب دجاج" }, desc: { en: "", ar: "" }, price: "21,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/236315292.jpeg" },
    { name: { en: "Crispy", ar: "كريسبي" }, desc: { en: "", ar: "" }, price: "18,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/54162857.jpeg" },
    { name: { en: "Chicken Crunchy", ar: "كرانشي دجاج" }, desc: { en: "", ar: "" }, price: "20,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/565786497.jpeg" }
    ]
  },
  {
    id: "cat5",
    name: { en: "Sea Food", ar: "المأكولات البحریة" },
    blurb: { en: "Grilled and dynamite-style seafood, sourced fresh.", ar: "مأكولات بحرية مشوية وديناميت طازجة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/ASEA.png",
    items: [
    { name: { en: "Salmon", ar: "سالمون" }, desc: { en: "", ar: "" }, price: "29,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/354828649.jpeg" },
    { name: { en: "Grilled shrimp", ar: "روبيان مشوي" }, desc: { en: "", ar: "" }, price: "26,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/414069023.jpeg" },
    { name: { en: "Dynamite shrimp", ar: "روبيان داينميت" }, desc: { en: "", ar: "" }, price: "25,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/756597063.jpeg" }
    ]
  },
  {
    id: "cat6",
    name: { en: "Oriental Meals", ar: "وجبات الشرقیة" },
    blurb: { en: "Fragrant Iraqi and Eastern classics.", ar: "أطباق عراقية وشرقية عطرة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/AORD.jpeg",
    items: [
    { name: { en: "Oven Qozi", ar: "قوزي بالفرن" }, desc: { en: "", ar: "" }, price: "24,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/863953642.jpeg" },
    { name: { en: "Meat Kabsa", ar: "كبسة لحم" }, desc: { en: "", ar: "" }, price: "24,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/712288396.jpeg" },
    { name: { en: "Dolma", ar: "دولمة" }, desc: { en: "", ar: "" }, price: "25,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/981901073.jpeg" },
    { name: { en: "Shepherd qaliya", ar: "قلية شفانا" }, desc: { en: "", ar: "" }, price: "23,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/229981998.jpeg" },
    { name: { en: "Sham Lamb Quzi", ar: "قوزي شام لحم" }, desc: { en: "", ar: "" }, price: "25,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/806219753.jpeg" },
    { name: { en: "Sham Chicken Quzi", ar: "قوزي شام دجاج" }, desc: { en: "", ar: "" }, price: "19,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/932143508.jpeg" },
    { name: { en: "Meat Biryani", ar: "برياني لحم" }, desc: { en: "", ar: "" }, price: "24,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/744766252.jpeg" },
    { name: { en: "Chicken Biryani", ar: "برياني دجاج" }, desc: { en: "", ar: "" }, price: "19,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/494576240.jpeg" },
    { name: { en: "Meat Maqluba", ar: "مقلوبة لحم" }, desc: { en: "", ar: "" }, price: "24,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/717418171.jpeg" },
    { name: { en: "Chicken Maqloba", ar: "مقلوبة دجاج" }, desc: { en: "", ar: "" }, price: "19,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/542058078.jpeg" },
    { name: { en: "Chicken Kabsa", ar: "كبسة دجاج" }, desc: { en: "", ar: "" }, price: "18,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/605725712.jpeg" },
    { name: { en: "Meat Tashrib", ar: "تشريب لحم" }, desc: { en: "", ar: "" }, price: "23,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/78946049.jpeg" }
    ]
  },
  {
    id: "cat7",
    name: { en: "Pizza", ar: "بيتزا" },
    blurb: { en: "Stone-baked pizzas, classic to creative.", ar: "بيتزا مخبوزة على الحجر، من الكلاسيكية إلى الإبداعية." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/PIZ.jpeg",
    items: [
    { name: { en: "Chicken Pizza", ar: "بيتزا دجاج" }, desc: { en: "", ar: "" }, price: "14,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/161469524.jpeg" },
    { name: { en: "Eat Mix Pizza", ar: "ايت ميكس بيتزا " }, desc: { en: "", ar: "" }, price: "15,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/282709262.jpeg" },
    { name: { en: "Pepperoni Pizza", ar: "بيتزا بيبروني" }, desc: { en: "", ar: "" }, price: "15,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/46842899.jpeg" },
    { name: { en: "Barbecue Pizza", ar: "بيتزا باربكيو" }, desc: { en: "", ar: "" }, price: "15,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/509848242.jpeg" },
    { name: { en: "Calzone", ar: "بیتزا كالزوني" }, desc: { en: "", ar: "" }, price: "16,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/892766043.jpeg" },
    { name: { en: "Crispy Pizza", ar: "بيتزا كريسبي" }, desc: { en: "", ar: "" }, price: "14,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/361282465.jpeg" },
    { name: { en: "Four Seasons Pizza", ar: "بيتزا فصول الأربعة" }, desc: { en: "", ar: "" }, price: "14,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/319979397.jpeg" },
    { name: { en: "Star Pizza", ar: "ستار بيتزا" }, desc: { en: "", ar: "" }, price: "16,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/550572973.jpeg" },
    { name: { en: "Milano Pizza", ar: "ميلانو بيتزا" }, desc: { en: "", ar: "" }, price: "17,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/727072882.jpeg" },
    { name: { en: "Mix pizza", ar: "بيتزا ميكس" }, desc: { en: "", ar: "" }, price: "15,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/219191416.jpeg" },
    { name: { en: "Margarita Pizza", ar: "بيتزا مارغريتا" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/142690469.jpeg" },
    { name: { en: "Meat pizza", ar: "بيتزا لحم" }, desc: { en: "", ar: "" }, price: "15,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/43865998.jpeg" },
    { name: { en: "Meat pide", ar: "بيدا لحم" }, desc: { en: "", ar: "" }, price: "15,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/205652302.jpeg" },
    { name: { en: "Nachos pizza", ar: "بيتزا ناتجوز" }, desc: { en: "", ar: "" }, price: "17,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/497602467.jpeg" }
    ]
  },
  {
    id: "cat8",
    name: { en: "Broasted", ar: "بروستد" },
    blurb: { en: "Crispy marinated chicken, broasted golden.", ar: "دجاج متبل ومقرمش مقلي ذهبياً." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/BROSTED.png",
    items: [
    { name: { en: "Whole Broasted Chicken", ar: "بروستید كامل" }, desc: { en: "", ar: "" }, price: "27,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/59999563.jpeg" },
    { name: { en: "Half Broasted Meal", ar: "بروستيد نص وجبة" }, desc: { en: "", ar: "" }, price: "15,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/954984368.jpeg" },
    { name: { en: "Wings (6 PCs)", ar: "أجنحة (6 قطع)" }, desc: { en: "", ar: "" }, price: "13,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/657032274.jpeg" },
    { name: { en: "Crispy Legs (5 PCs)", ar: "وجبة فخد (5 قطع)" }, desc: { en: "", ar: "" }, price: "15,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/266165758.jpeg" }
    ]
  },
  {
    id: "cat9",
    name: { en: "Sandwiches", ar: "ساندويشات" },
    blurb: { en: "Hand-pressed burgers and sandwiches.", ar: "برغر وساندويشات محضرة يدوياً." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/SSN.jpeg",
    items: [
    { name: { en: "Classic Meat Burger", ar: "كلاسيك برغر لحم" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/761780155.jpeg" },
    { name: { en: "Classic Chicken Burger", ar: "كلاسيك برغر دجاج" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/500639890.jpeg" },
    { name: { en: "G-Class Burger", ar: "جيكلاس برغر" }, desc: { en: "", ar: "" }, price: "13,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/958725312.jpeg" },
    { name: { en: "Mushroom Burger", ar: "ماشروم برغر" }, desc: { en: "", ar: "" }, price: "13,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/864078287.jpeg" },
    { name: { en: "4S Burger", ar: "فور اس برغر" }, desc: { en: "", ar: "" }, price: "13,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/269853440.jpeg" },
    { name: { en: "Crispy Sandwich", ar: "ساندويش كريسبي" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/645629139.jpeg" },
    { name: { en: "Chicken Fajita Sandwich", ar: "ساندويش فاهيتا دجاج" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/137350267.jpeg" },
    { name: { en: "Pão de Pollo Sandwich", ar: "ساندويش بانيو دي بولو " }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/421717774.jpeg" }
    ]
  },
  {
    id: "cat10",
    name: { en: "Pasta", ar: "باستا" },
    blurb: { en: "Italian classics, alfredo, lasagna and more.", ar: "أطباق إيطالية كلاسيكية، ألفريدو ولازانيا والمزيد." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/PAS.jpeg",
    items: [
    { name: { en: "Penny Alfredo", ar: "بيني ألفريدو" }, desc: { en: "", ar: "" }, price: "18,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/781249592.jpeg" },
    { name: { en: "Fettuccine Alfredo", ar: "فيتوتشيني ألفريدو" }, desc: { en: "", ar: "" }, price: "18,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/793862245.jpeg" },
    { name: { en: "Lasagna", ar: "لازانيا" }, desc: { en: "", ar: "" }, price: "16,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/22448833.jpeg" },
    { name: { en: "Penny arabiata", ar: "بيني أرابياتا" }, desc: { en: "", ar: "" }, price: "18,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/723632062.jpeg" }
    ]
  },
  {
    id: "cat11",
    name: { en: "Cocktails", ar: "كوكتيل" },
    blurb: { en: "Signature mocktail blends, crafted in-house.", ar: "خلطات موكتيل مميزة محضرة في المنزل." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/CCK.jpeg",
    items: [
    { name: { en: "Bao Stan Cocktail", ar: "كوكتيل باو ستان" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/334601403.jpeg" },
    { name: { en: "Mar Cocktail", ar: "كوكتيل مار" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/58209593.jpeg" },
    { name: { en: "Havana Cocktail", ar: "كوكتيل هافانا" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/955825702.jpeg" },
    { name: { en: "Mandy Set Cocktail", ar: "كوكتيل ماندي سيت" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/858048961.jpeg" },
    { name: { en: "Cinderella Cocktail", ar: "كوكتيل سندريلا" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/362881087.jpeg" },
    { name: { en: "Avocado Cocktail", ar: "كوكتيل أفوكادو" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/294444546.jpeg" },
    { name: { en: "Raspberry Cocktail", ar: "كوكتيل رازبيري" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/630852113.jpeg" }
    ]
  },
  {
    id: "cat12",
    name: { en: "Fresh Juices", ar: "عصائر الطبيعیة" },
    blurb: { en: "Cold-pressed from fresh fruit.", ar: "عصائر طبيعية معصورة من فواكه طازجة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/FRJ.jpeg",
    items: [
    { name: { en: "Kiwi Juice", ar: "عصير كيوي" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/579576125.jpeg" },
    { name: { en: "Strawberry Juice", ar: "عصير فراولة" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/121165669.jpeg" },
    { name: { en: "Lemon & Mint Juice", ar: "عصير ليمون ونعناع" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/166854063.jpeg" },
    { name: { en: "Green Apple Juice", ar: "عصير تفاح أخضر" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/348874003.jpeg" },
    { name: { en: "Carrot Juice", ar: "عصير جزر" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/863342290.jpeg" },
    { name: { en: "Orange Juice", ar: "عصير برتقال" }, desc: { en: "", ar: "" }, price: "5,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/542065077.jpeg" },
    { name: { en: "Lemon Juice", ar: "عصير ليمون" }, desc: { en: "", ar: "" }, price: "5,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/602623726.jpeg" },
    { name: { en: "Melon Juice", ar: "عصير شمام" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/750853068.jpeg" },
    { name: { en: "Watermelon Juice", ar: "عصير بطيخ" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/55600810.jpeg" },
    { name: { en: "Pomegranate Juice", ar: "عصير رمان" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/940530316.jpeg" },
    { name: { en: "Pineapple Juice", ar: "عصير أناناس" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/845145168.jpeg" }
    ]
  },
  {
    id: "cat13",
    name: { en: "Energy Drink", ar: "مشروب الطاقة" },
    blurb: { en: "Boosted refreshment with a kick.", ar: "مشروبات منعشة بطاقة إضافية." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/ENG.jpeg",
    items: [
    { name: { en: "Red Bull Kiwi", ar: "ريدبول كيوي" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/785152109.jpeg" },
    { name: { en: "Red Bull Blue Sky", ar: "ريدبول بلو سكاي" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/24979630.jpeg" },
    { name: { en: "Red Bull Sour Berry", ar: "ريدبول ساور بيري" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/35291655.jpeg" }
    ]
  },
  {
    id: "cat14",
    name: { en: "Hot Drinks", ar: "المشروبات الساخنة" },
    blurb: { en: "Comforting warm beverages.", ar: "مشروبات دافئة ومريحة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/HOT.jpeg",
    items: [
    { name: { en: "Caffè Latte", ar: "كافيه لاتيه" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/400002695.jpeg" },
    { name: { en: "Caramel Latte", ar: "كراميل لاتيه" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/898852737.jpeg" },
    { name: { en: "Mocha Latte", ar: "موكا لاتيه" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/293801127.jpeg" },
    { name: { en: "Pistachio Latte", ar: "بيستاشيو لاتيه" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/429715472.jpeg" }
    ]
  },
  {
    id: "cat15",
    name: { en: "Mojitos", ar: "موهيتو" },
    blurb: { en: "Refreshing, minty and bright.", ar: "منعشة بالنعناع ومشرقة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/MOJ.jpeg",
    items: [
    { name: { en: "Asian Cloud Mojito", ar: "موهيتو أسیا كلاود" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/642253462.jpeg" },
    { name: { en: "Passion Fruit Mojito", ar: "موهيتو باشن فروت" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/915362199.jpeg" },
    { name: { en: "Classic Mojito", ar: "موهيتو كلاسيك" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/451355997.jpeg" },
    { name: { en: "Mixed Berry Mojito", ar: "موهيتو توت مشكل" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/835896301.jpeg" },
    { name: { en: "Blue Sky Mojito", ar: "موهيتو بلو سكاي" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/874582871.jpeg" }
    ]
  },
  {
    id: "cat16",
    name: { en: "Milkshakes", ar: "ميلك شيك" },
    blurb: { en: "Thick, creamy and indulgent.", ar: "كثيفة وكريمية وغنية." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/MLK.jpeg",
    items: [
    { name: { en: "Oreo Milkshake", ar: "ميلك شيك أوريو" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/52780735.jpeg" },
    { name: { en: "Caramel Milkshake", ar: "ميلك شيك كراميل" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/896380481.jpeg" },
    { name: { en: "Chocolate Milkshake", ar: "ميلك شيك شوكولا" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/643274673.jpeg" },
    { name: { en: "Pistachio Milkshake", ar: "ميلك شيك بستاشيو" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/94007939.jpeg" },
    { name: { en: "Strawberry Milkshake", ar: "ميلك شيك فراولة" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/986150421.jpeg" },
    { name: { en: "Vanilla Milkshake", ar: "ميلك شيك فانيلا" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/587621169.jpeg" }
    ]
  },
  {
    id: "cat17",
    name: { en: "Iced Tea", ar: "ايس تي" },
    blurb: { en: "Chilled, fruity and refreshing.", ar: "شاي مثلج فواكيه ومنعش." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/IEA.jpeg",
    items: [
    { name: { en: "Peach Iced Tea", ar: "آيس تي خوخ" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/483012900.jpeg" },
    { name: { en: "Lemon Iced Tea", ar: "آيس تي ليمون" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/17064805.jpeg" },
    { name: { en: "Strawberry Iced Tea", ar: "آيس تي فراولة" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/453076705.jpeg" }
    ]
  },
  {
    id: "cat18",
    name: { en: "Hot Coffee", ar: "القهوة الساخنة" },
    blurb: { en: "From Turkish to espresso, brewed right.", ar: "من التركية إلى الإسبريسو، مخمرة بإتقان." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/HCF.jpeg",
    items: [
    { name: { en: "Turkish Coffee", ar: "قهوة تركي" }, desc: { en: "", ar: "" }, price: "4,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/657451147.jpeg" },
    { name: { en: "Espresso Macchiato", ar: "إسبريسو ماكياتو" }, desc: { en: "", ar: "" }, price: "4,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/718593040.jpeg" },
    { name: { en: "Double Espresso", ar: "دبل إسبريسو" }, desc: { en: "", ar: "" }, price: "5,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/933543366.jpeg" },
    { name: { en: "Tea", ar: "شاي" }, desc: { en: "", ar: "" }, price: "1,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/576042230.jpeg" },
    { name: { en: "Single Espresso", ar: "سينكل إسبريسو" }, desc: { en: "", ar: "" }, price: "4,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/833833024.jpeg" },
    { name: { en: "Cappuccino", ar: "كابتشينو" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/273947481.jpeg" },
    { name: { en: "Americano", ar: "أمريكانو" }, desc: { en: "", ar: "" }, price: "5,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/82697784.jpeg" }
    ]
  },
  {
    id: "cat19",
    name: { en: "Ice Coffee", ar: "القهوة الباردة" },
    blurb: { en: "Cold, smooth and energising.", ar: "قهوة باردة وناعمة ومنشطة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/IFF.jpeg",
    items: [
    { name: { en: "Iced Spanish Latte", ar: "آيس سبانيش لاتيه" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/317832254.jpeg" },
    { name: { en: "Iced Mocha Latte", ar: "آيس موكا لاتيه" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/228992096.jpeg" },
    { name: { en: "Iced Pistachio Latte", ar: "آيس بستاشيو لاتيه" }, desc: { en: "", ar: "" }, price: "7,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/943552015.jpeg" },
    { name: { en: "Iced Americano", ar: "آيس أمريكانو" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/196161741.jpeg" },
    { name: { en: "Iced Latte", ar: "آيس لاتيه" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/491011187.jpeg" }
    ]
  },
  {
    id: "cat20",
    name: { en: "Smoothies", ar: "سموذي" },
    blurb: { en: "Blended fruit, thick and nourishing.", ar: "عصائر فواكه مخلوطة كثيفة ومغذية." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/SMO.jpeg",
    items: [
    { name: { en: "Mango Smoothie", ar: "سموذي مانجو" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/678804968.jpeg" },
    { name: { en: "Blue Ocean Smoothie", ar: "سموذي بلو أوشن" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/889763030.jpeg" },
    { name: { en: "Peach Smoothie", ar: "سموذي خوخ" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/846572263.jpeg" },
    { name: { en: "Kiwi Smoothie", ar: "سموذي كيوي" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/307418762.jpeg" },
    { name: { en: "Blueberry Smoothie", ar: "سموذي بلوبيري" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/365682740.jpeg" }
    ]
  },
  {
    id: "cat21",
    name: { en: "Ice cream", ar: "الآيس كريم" },
    blurb: { en: "Cool, creamy scoops.", ar: "كرات آيس كريم باردة وكريمية." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/ICC.jpeg",
    items: [
    { name: { en: "Mixed Ice Cream", ar: "آيس كريم مشكل" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/381483996.jpeg" },
    { name: { en: "Pistachio Ice Cream", ar: "آيس كريم بستاشيو" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/280392966.jpeg" },
    { name: { en: "Strawberry Ice Cream", ar: "آيس كريم فراولة" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/42228865.jpeg" },
    { name: { en: "Caramel Ice Cream", ar: "آيس كريم كراميل" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/281860471.jpeg" },
    { name: { en: "Chocolate Ice Cream", ar: "آيس كريم شوكولا" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/324307375.jpeg" },
    { name: { en: "Vanilla Ice Cream", ar: "آيس كريم فانيلا" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/3508171.jpeg" }
    ]
  },
  {
    id: "cat22",
    name: { en: "Desserts", ar: "الحلويات" },
    blurb: { en: "Waffles, crepes and sweet endings.", ar: "وافل وكريب وختام حلو." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/DSS.jpeg",
    items: [
    { name: { en: "Nutella Waffle", ar: "وافل نوتيلا" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/119441363.jpeg" },
    { name: { en: "Lotus Waffle", ar: "وافل لوتس" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/223065962.jpeg" },
    { name: { en: "Nutella Crêpe", ar: "كريب نوتيلا" }, desc: { en: "", ar: "" }, price: "9,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/925596813.jpeg" },
    { name: { en: "Brownies Waffle", ar: "وافل براونيز" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/877476533.jpeg" },
    { name: { en: "Nutella Pancake", ar: "بان كيك نوتيلا" }, desc: { en: "", ar: "" }, price: "9,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/798998590.jpeg" },
    { name: { en: "Lotus Crêpe", ar: "كريب لوتس" }, desc: { en: "", ar: "" }, price: "9,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/884455286.jpeg" },
    { name: { en: "Kinder Brownies Crêpe", ar: "كريب كيندر براونيز" }, desc: { en: "", ar: "" }, price: "11,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/751925241.jpeg" },
    { name: { en: "Pistachio Pancake", ar: "بان كيك بستاشيو" }, desc: { en: "", ar: "" }, price: "11,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/946194199.jpeg" },
    { name: { en: "Chocolate Cake", ar: "كيك شوكولا" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/677635537.jpeg" },
    { name: { en: "Pistachio Cake", ar: "كيك بستاشيو" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/582006302.jpeg" },
    { name: { en: "Pistachio Crepe", ar: "كريب بستاشيو" }, desc: { en: "", ar: "" }, price: "11,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/132475200.jpeg" },
    { name: { en: "Pistachio Waffle", ar: "وافل بستاشيو" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/283248804.jpeg" },
    { name: { en: "Rainbow Cake", ar: "كيك ألوان" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/208935195.jpeg" },
    { name: { en: "Red Velvet Cake", ar: "كيك ريد فلفت" }, desc: { en: "", ar: "" }, price: "6,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/316081234.jpeg" }
    ]
  },
  {
    id: "cat23",
    name: { en: "Kunafa", ar: "الكنافة" },
    blurb: { en: "Arabic pastry, cheese and cream.", ar: "كنافة عربية بالجبن والقشطة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/KUN.jpeg",
    items: [
    { name: { en: "Qatmer Waffle", ar: "قاتمر وافل" }, desc: { en: "", ar: "" }, price: "18,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/23493208.jpeg" },
    { name: { en: "Cream Kunafa", ar: "كنافة قيماغ" }, desc: { en: "", ar: "" }, price: "8,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/93347501.jpeg" },
    { name: { en: "Cheese Kunafa", ar: "كنافة جبنة" }, desc: { en: "", ar: "" }, price: "10,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/580125848.jpeg" },
    { name: { en: "Pistachio Kunafa", ar: "كنافة فستق" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/206100626.jpeg" },
    { name: { en: "4S Kunafa", ar: "كنافة 4S" }, desc: { en: "", ar: "" }, price: "17,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/917072692.jpeg" }
    ]
  },
  {
    id: "cat24",
    name: { en: "Hookah", ar: "الأركيلة" },
    blurb: { en: "Premium shisha flavours, crafted for a long evening.", ar: "نكهات أركيلة فاخرة لسهالة طويلة." },
    image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/categories/normal/HOO.jpeg",
    items: [
    { name: { en: "Fresh Fruit hookah", ar: "أركيلة فواكه طازجة" }, desc: { en: "", ar: "" }, price: "22,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/222239510.jpeg" },
    { name: { en: "Gum and Mint", ar: "علكة ونعناع" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/227393341.jpeg" },
    { name: { en: "Limon and Mint", ar: "ليمون ونعناع" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/743000659.jpeg" },
    { name: { en: "Two Apples", ar: "تفاحتين" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/82062480.jpeg" },
    { name: { en: "4S Mix (1)", ar: "خلطة 4S (1)" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/185690673.jpeg" },
    { name: { en: "Baghdadi Mix", ar: "خلطة بغدادي" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/70664741.jpeg" },
    { name: { en: "English", ar: "انكليزي" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/312745457.jpeg" },
    { name: { en: "Grape and Mint", ar: "عنب ونعناع" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/9756165.jpeg" },
    { name: { en: "4S Mix (2)", ar: "خلطة 4S (2)" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/871632450.jpeg" },
    { name: { en: "4S Mix (3)", ar: "خلطة 4S (3)" }, desc: { en: "", ar: "" }, price: "12,000 IQD", image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/964433913.jpeg" }
    ]
  }
];

export type FeaturedDish = {
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  price: string;
  tag: { en: string; ar: string };
  image: string;
};

export const featuredDishes: FeaturedDish[] = [
  { name: { en: "Poivre Steak", ar: "بوافر ستيك" }, desc: { en: "Pepper-crusted beef steak with a rich pan sauce.", ar: "ستيك لحم بالفلفل مع صلصة غنية." }, price: "26,000 IQD", tag: { en: "House Signature", ar: "اختصاص البيت" }, image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/66790492.jpeg" },
  { name: { en: "Salmon", ar: "سالمون" }, desc: { en: "Fresh Atlantic salmon, grilled to order.", ar: "سلمون أطلسي طازج مشوي عند الطلب." }, price: "29,000 IQD", tag: { en: "From the Sea", ar: "من البحر" }, image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/354828649.jpeg" },
  { name: { en: "Dolma", ar: "دولمة" }, desc: { en: "Stuffed vegetables in the Iraqi tradition, slow-cooked.", ar: "خضار محشية بالطريقة العراقية مطبوخة على نار هادئة." }, price: "25,000 IQD", tag: { en: "Eastern Classic", ar: "كلاسيكية شرقية" }, image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/981901073.jpeg" },
  { name: { en: "Eat Mix Pizza", ar: "ايت ميكس بيتزا " }, desc: { en: "", ar: "" }, price: "15,000 IQD", tag: { en: "Crowd Favourite", ar: "المفضلة لدى الضيوف" }, image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/282709262.jpeg" },
  { name: { en: "Dynamite Chicken", ar: "داينميت دجاج" }, desc: { en: "", ar: "" }, price: "20,000 IQD", tag: { en: "Chef's Pick", ar: "اختيار الشيف" }, image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/173288978.jpeg" },
  { name: { en: "Oreo Milkshake", ar: "ميلك شيك أوريو" }, desc: { en: "Thick, creamy Oreo-blended milkshake.", ar: "ميلك شيك كثيف كريمي بنكهة أوريو." }, price: "7,000 IQD", tag: { en: "Sweet Indulgence", ar: "متعة حلوة" }, image: "https://r2.mynu.site/images/66b20282ea6a7a41ab47e017/items/52780735.jpeg" }
];
