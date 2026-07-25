import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/format'

type Props = {
  price: number
  mealPrice?: number
  className?: string
}

function Amount({ price }: { price: number }) {
  const { locale } = useLanguage()

  return locale === 'en' ? (
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
  )
}

export function PriceBadge({ price, mealPrice, className = '' }: Props) {
  const { ui } = useLanguage()

  if (mealPrice == null) {
    return (
      <span className={`price-badge ${className}`} dir="ltr">
        <Amount price={price} />
      </span>
    )
  }

  return (
    <span className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      <span className="price-badge" dir="ltr">
        <span className="text-[0.78em] font-bold opacity-80">{ui('priceSingle')}</span>
        <Amount price={price} />
      </span>
      <span className="price-badge" dir="ltr">
        <span className="text-[0.78em] font-bold opacity-80">{ui('priceMeal')}</span>
        <Amount price={mealPrice} />
      </span>
    </span>
  )
}
