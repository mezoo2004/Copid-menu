import type { Locale } from '../types/menu'
import { restaurant } from '../data/restaurant'

export function formatPrice(price: number, locale: Locale): string {
  const formatted = price.toFixed(2)
  if (locale === 'ar') {
    return formatted
  }
  return formatted
}

export function currencyLabel(locale: Locale): string {
  return locale === 'ar' ? restaurant.currency.symbolAr : restaurant.currency.symbolEn
}

export function formatCalories(calories: number | null, _locale: Locale, label: string): string | null {
  if (calories === null || calories === undefined) return null
  return `${calories} ${label}`
}
