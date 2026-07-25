export type Locale = 'ar' | 'en'

export type LocalizedString = {
  ar: string
  en: string
}

export type Product = {
  id: string
  categoryId: string
  name: LocalizedString
  description: LocalizedString
  image: string
  calories: number | null
  price: number
  available: boolean
  badge?: LocalizedString
  allergens?: LocalizedString[]
}

export type Category = {
  id: string
  name: LocalizedString
  image: string
  order: number
}

export type RestaurantInfo = {
  name: LocalizedString
  welcome: LocalizedString
  logo: string
  coverImage: string
  currency: {
    code: string
    symbolAr: string
    symbolEn: string
  }
  instagramUrl?: string
  city: LocalizedString
}
