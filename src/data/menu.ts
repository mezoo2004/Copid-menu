import type { Category, Product } from '../types/menu'

/**
 * Placeholder COPID menu data.
 * Replace names, descriptions, prices, calories, and image paths later
 * without changing component structure.
 */
export const categories: Category[] = [
  {
    id: 'burgers',
    name: { ar: 'البرقر', en: 'Burgers' },
    image: '/images/placeholder-product.svg',
    order: 1,
  },
  {
    id: 'sides',
    name: { ar: 'الأطباق الجانبية', en: 'Side Dishes' },
    image: '/images/placeholder-product.svg',
    order: 2,
  },
  {
    id: 'fries',
    name: { ar: 'البطاطس', en: 'Fries' },
    image: '/images/placeholder-product.svg',
    order: 3,
  },
  {
    id: 'sauces',
    name: { ar: 'الصوصات', en: 'Sauces' },
    image: '/images/placeholder-product.svg',
    order: 4,
  },
  {
    id: 'drinks',
    name: { ar: 'المشروبات', en: 'Drinks' },
    image: '/images/placeholder-product.svg',
    order: 5,
  },
]

export const products: Product[] = [
  {
    id: 'copid-grilled-chicken',
    categoryId: 'burgers',
    name: { ar: 'كوبيد برقر', en: 'COPID Burger' },
    description: {
      ar: 'شريحتين لحم 130غ - صوص C - جبنة مونتري جاك - خس - بصل',
      en: 'Two beef patties 130g – C Sauce – Monterey Jack Cheese – Lettuce – Onion',
    },
    image: '/images/products/copid_burger.png',
    calories: 710,
    price: 22,
    mealPrice: 29,
    available: true,
    allergens: [
      { ar: 'ألبان', en: 'Dairy' },
      { ar: 'بيض', en: 'Eggs' },
      { ar: 'قمح', en: 'Wheat' },
      { ar: 'سمسم', en: 'Sesame' },
    ],
  },
  {
    id: 'copid-smoky-burger',
    categoryId: 'burgers',
    name: { ar: 'سموكي برقر', en: 'Smoky Burger' },
    description: {
      ar: 'شريحتين لحم 130غ - صوص C - صوص سموكي - جبنة مونتري جاك - خس',
      en: 'Two beef patties 130g – C Sauce – Smoky Sauce – Monterey Jack Cheese – Lettuce',
    },
    image: '/images/products/copid_smoky_burger.png',
    calories: 729,
    price: 23,
    mealPrice: 30,
    available: true,
  },
  {
    id: 'copid-travel-burger',
    categoryId: 'burgers',
    name: { ar: 'ترافل برقر', en: 'Truffle Burger' },
    description: {
      ar: 'شريحة لحم 125غ - جبنة مونتري جاك - صوص ترفل - جرجير - بصل مكرمل',
      en: 'Single beef patty 125g – Monterey Jack Cheese – Truffle Sauce – Arugula – Caramelized Onion',
    },
    image: '/images/products/copid_truffle_burger.png',
    calories: 664,
    price: 23,
    mealPrice: 30,
    available: true,
  },
  {
    id: 'copid-classic',
    categoryId: 'burgers',
    name: { ar: 'كرسبي تشكن', en: 'Crispy Chicken' },
    description: {
      ar: 'دجاج كرسبي 100غ - صوص C - خس - سلطة ملفوف - جبن أمريكي',
      en: 'Crispy Chicken 100g – C Sauce – Lettuce – Coleslaw – American Cheese',
    },
    image: '/images/products/copid_crispy_chicken.png',
    calories: 564,
    price: 20,
    mealPrice: 27,
    available: true,
  },
  {
    id: 'copid-crispy-chicken',
    categoryId: 'burgers',
    name: { ar: 'شيبوتلي تشكن', en: 'Chipotle Chicken' },
    description: {
      ar: 'دجاج كرسبي 100غ - صوص شيبوتلي - جبن أمريكي - خس - هلابينو',
      en: 'Crispy Chicken 100g – Chipotle Sauce – American Cheese – Lettuce – Jalapeño',
    },
    image: '/images/products/copid_chipotle_chicken.png',
    calories: 693,
    price: 21,
    mealPrice: 28,
    available: true,
  },
  {
    id: 'smoky-wings',
    categoryId: 'sides',
    name: { ar: 'سموكي وينقز', en: 'Smoky Wings' },
    description: {
      ar: '٦ قطع أجنحة دجاج - صوص سبايسي شيبوتلي - شيبوتلي رانش',
      en: '6 chicken wings - Spicy chipotle sauce - Chipotle ranch',
    },
    image: '/images/products/copid_smoky_wings.png',
    calories: 890,
    price: 18,
    available: true,
  },
  {
    id: 'c-fries',
    categoryId: 'sides',
    name: { ar: 'سي فرايز', en: 'C Fries' },
    description: {
      ar: 'بطاطس ذهبية مقرمشة',
      en: 'Golden crispy fries',
    },
    image: '/images/products/copid_c_fries.png',
    calories: 344,
    price: 17,
    available: true,
  },
  {
    id: 'chicken-fries',
    categoryId: 'sides',
    name: { ar: 'تشكن فرايز', en: 'Chicken Fries' },
    description: {
      ar: 'بطاطس مقلية مغطاة بدجاج كرسبي، صوص C، صوص باربكيو، وبصل أخضر.',
      en: 'Crispy fries topped with crispy chicken, signature C Sauce, BBQ sauce, and fresh chives.',
    },
    image: '/images/products/copid_chicken_fries.png',
    calories: 433,
    price: 18,
    available: true,
  },
  {
    id: 'french-fries',
    categoryId: 'fries',
    name: { ar: 'بطاطس مقلية', en: 'French Fries' },
    description: {
      ar: 'بطاطس ذهبية مقرمشة',
      en: 'Golden crispy fries',
    },
    image: '/images/placeholder-product.svg',
    calories: 344,
    price: 17,
    available: true,
  },
  {
    id: 'sweet-fries',
    categoryId: 'fries',
    name: { ar: 'بطاطس حلوة مقلية', en: 'Sweet Potato Fries' },
    description: {
      ar: 'بطاطس حلوة مقرمشة',
      en: 'Crispy sweet potato fries',
    },
    image: '/images/products/copid_sweet_potato_fries.png',
    calories: 196,
    price: 10,
    available: true,
  },
  {
    id: 'chipotle-sauce',
    categoryId: 'sauces',
    name: { ar: 'صوص C', en: 'C Sauce' },
    description: {
      ar: 'صوص كوبيد الخاص',
      en: 'Signature COPID Sauce',
    },
    image: '/images/products/copid_c_sauce.png',
    calories: 232,
    price: 3,
    available: true,
  },
  {
    id: 'spicy-sauce',
    categoryId: 'sauces',
    name: { ar: 'صوص شيبوتلي', en: 'Chipotle Sauce' },
    description: {
      ar: 'صوص شيبوتلي',
      en: 'Creamy Chipotle Sauce',
    },
    image: '/images/products/copid_chipotle_sauce.png',
    calories: 567,
    price: 3,
    available: true,
  },
  {
    id: 'garlic-sauce',
    categoryId: 'sauces',
    name: { ar: 'صوص سبايسي', en: 'Spicy Sauce' },
    description: {
      ar: 'صوص سبايسي الخاص',
      en: 'Signature Spicy Sauce',
    },
    image: '/images/products/copid_spicy_sauce.png',
    calories: 567,
    price: 3,
    available: true,
  },
  {
    id: 'coca-cola',
    categoryId: 'drinks',
    name: { ar: 'كوكاكولا', en: 'Coca-Cola Original' },
    description: {
      ar: 'ملاحظة: تحتوي المشروبات الغازية على كافيين',
      en: 'Note: Soft drinks contain caffeine',
    },
    image: '/images/products/copid_coca_cola.png',
    calories: 152,
    price: 3,
    available: true,
  },
  {
    id: 'sprite',
    categoryId: 'drinks',
    name: { ar: 'سبرايت', en: 'Sprite' },
    description: {
      ar: 'ملاحظة: تحتوي المشروبات الغازية على كافيين',
      en: 'Note: Soft drinks contain caffeine',
    },
    image: '/images/products/copid_sprite.png',
    calories: 140,
    price:3,
    available: true,
  },
  {
    id: 'coca-cola-light',
    categoryId: 'drinks',
    name: { ar: 'كوكاكولا لايت', en: 'Coca-Cola Light' },
    description: {
      ar: 'ملاحظة: تحتوي المشروبات الغازية على كافيين',
      en: 'Note: Soft drinks contain caffeine',
    },
    image: '/images/products/copid_coca_cola_light.png',
    calories: 1,
    price: 3,
    available: true,
  },
  {
    id: 'arwa-water',
    categoryId: 'drinks',
    name: { ar: 'أروى', en: 'Arwa Water' },
    description: { ar: '', en: '' },
    image: '/images/products/copid_arwa_water.png',
    calories: 0,
    price: 1,
    available: true,
  },
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId && p.available)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}
