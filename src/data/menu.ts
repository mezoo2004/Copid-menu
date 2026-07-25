import type { Category, Product } from '../types/menu'

/**
 * Placeholder COPID menu data.
 * Replace names, descriptions, prices, calories, and image paths later
 * without changing component structure.
 */
export const categories: Category[] = [
  {
    id: 'burgers',
    name: { ar: 'الساندوتشات والبرقر', en: 'Sandwiches & Burgers' },
    image: '/images/placeholder-product.svg',
    order: 1,
  },
  {
    id: 'sides',
    name: { ar: 'الأطباق الجانبية', en: 'Sides' },
    image: '/images/placeholder-product.svg',
    order: 2,
  },
  {
    id: 'sauces',
    name: { ar: 'الصوصات', en: 'Sauces' },
    image: '/images/placeholder-product.svg',
    order: 3,
  },
  {
    id: 'drinks',
    name: { ar: 'المشروبات', en: 'Drinks' },
    image: '/images/placeholder-product.svg',
    order: 4,
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
    image: '/images/products/copid_item_8.png',
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
    image: '/images/products/copid_item_6.png',
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
    image: '/images/products/copid_item_4.png',
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
    image: '/images/products/copid_item_5.png',
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
    image: '/images/products/copid_item_7.png',
    calories: 693,
    price: 21,
    mealPrice: 28,
    available: true,
  },
  {
    id: 'fries',
    categoryId: 'sides',
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
    categoryId: 'sides',
    name: { ar: 'بطاطس حلوة مقلية', en: 'Sweet Potato Fries' },
    description: {
      ar: 'بطاطس حلوة مقرمشة',
      en: 'Crispy sweet potato fries',
    },
    image: '/images/placeholder-product.svg',
    calories: 196,
    price: 10,
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
    image: '/images/products/copid_item_2.png',
    calories: 890,
    price: 18,
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
    image: '/images/products/copid_item_1.png',
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
    image: '/images/products/copid_item_3.png',
    calories: 567,
    price: 3,
    available: true,
  },
  {
    id: 'garlic-sauce',
    categoryId: 'sauces',
    name: { ar: 'صوص سموكي', en: 'Smoky Sauce' },
    description: {
      ar: 'صوص سموكي',
      en: 'Smoky Signature Sauce',
    },
    image: '/images/products/copid_item_9.png',
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
