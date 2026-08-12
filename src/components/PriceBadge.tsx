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

function LabeledPrice({ label, price }: { label: string; price: number }) {
  const { locale } = useLanguage()
  const amount = formatPrice(price, locale)

  if (locale === 'ar') {
    return (
      <span className="price-badge price-badge--labeled">
        <span>
          {label}: {amount} ريال
        </span>
      </span>
    )
  }

  return (
    <span className="price-badge price-badge--labeled" dir="ltr">
      <span>
        {label}: SAR {amount}
      </span>
    </span>
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
    <span className={`flex flex-col items-start gap-1 ${className}`}>
      <LabeledPrice label={ui('priceSingle')} price={price} />
      <LabeledPrice label={ui('priceMeal')} price={mealPrice} />
    </span>
  )
}
