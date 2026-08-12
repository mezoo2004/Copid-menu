import type { Locale } from '../types/menu'

export const ui = {
  ar: {
    languageLabel: 'English',
    calories: 'سعرة حرارية',
    allergensTitle: 'يحتوي على أطعمة قد تسبب الحساسية',
    allergensLink: 'مسببات الحساسية',
    feedbackLink: 'الملاحظات والتقييم',
    nutrition: 'التغذية والنشاط',
    newBadge: 'جديد',
    unavailable: 'غير متوفر',
    emptyTitle: 'لا توجد أصناف',
    emptyBody: 'جرّب فئة أخرى أو عد لاحقاً.',
    loading: 'جاري التحميل...',
    back: 'رجوع',
    share: 'مشاركة',
    close: 'إغلاق',
    menu: 'القائمة',
    priceSingle: 'سعر البرجر',
    priceMeal: 'سعر الوجبة',
    addonsTitle: 'الإضافات',
    addonPatty: 'شريحة لحم إضافية +8 ريال',
    addonCheese: 'شريحة جبن إضافية +3 ريال',
  },
  en: {
    languageLabel: 'العربية',
    calories: 'calories',
    allergensTitle: 'Contains foods that may cause allergies',
    allergensLink: 'Allergens',
    feedbackLink: 'Feedback & Reviews',
    nutrition: 'Nutrition & Activity',
    newBadge: 'New',
    unavailable: 'Unavailable',
    emptyTitle: 'No items found',
    emptyBody: 'Try another category or check back later.',
    loading: 'Loading...',
    back: 'Back',
    share: 'Share',
    close: 'Close',
    menu: 'Menu',
    priceSingle: 'Single',
    priceMeal: 'Meal',
    addonsTitle: 'Add-ons',
    addonPatty: 'Extra Beef Patty +8 SAR',
    addonCheese: 'Extra Cheese Slice +3 SAR',
  },
} as const

export type UiKey = keyof (typeof ui)['en']

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key]
}
