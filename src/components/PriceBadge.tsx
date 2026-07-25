import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/format'

type Props = {
  price: number
  className?: string
}

export function PriceBadge({ price, className = '' }: Props) {
  const { locale } = useLanguage()

  return (
    <span className={`price-badge ${className}`} dir="ltr">
      {locale === 'en' ? (
        <>
          <span>{formatPrice(price, locale)}</span>
          <span className="text-[0.78em] font-bold">SAR</span>
        </>
      ) : (
        <>
          <span className="text-[0.95em] font-bold" aria-hidden="true">
            ﷼
          </span>
          <span>{formatPrice(price, locale)}</span>
        </>
      )}
    </span>
  )
}
