import { Link } from 'react-router-dom'
import type { Product } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { formatCalories } from '../utils/format'
import { PriceBadge } from './PriceBadge'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { tr, ui, locale, dir } = useLanguage()
  const calories = formatCalories(product.calories, locale, ui('calories'))

  return (
    <Link
      to={`/item/${product.id}`}
      className="flex min-w-0 gap-3 px-3 py-3 text-inherit no-underline transition active:bg-black/5 sm:px-4"
      dir="ltr"
    >
      {product.id === 'copid-classic' ||
      product.id === 'copid-smoky-burger' ||
      product.id === 'copid-crispy-chicken' ||
      product.id === 'copid-travel-burger' ||
      product.id === 'copid-grilled-chicken' ||
      product.id === 'arwa-water' ? (
        <span className="product-image product-image-frame">
          <img
            src={product.image}
            alt={tr(product.name)}
            className={
              product.id === 'copid-crispy-chicken'
                ? 'product-image-zoom product-image-zoom--crispy'
                : product.id === 'copid-travel-burger'
                  ? 'product-image-zoom product-image-zoom--travel'
                  : product.id === 'copid-grilled-chicken'
                    ? 'product-image-zoom product-image-zoom--jalapeno'
                    : product.id === 'arwa-water'
                      ? 'product-image-drink product-image-drink--arwa'
                      : 'product-image-zoom'
            }
            width={106}
            height={106}
            loading="lazy"
            decoding="async"
          />
        </span>
      ) : (
        <img
          src={product.image}
          alt={tr(product.name)}
          className={
            product.id === 'coca-cola-light'
              ? 'product-image product-image--cola-light'
              : 'product-image'
          }
          width={106}
          height={106}
          loading="lazy"
          decoding={product.id === 'coca-cola-light' ? 'async' : undefined}
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col" dir={dir}>
        <div className="flex items-start gap-2">
          <h3 className="min-w-0 flex-1 text-[1.05rem] font-bold leading-snug text-copid-accent">
            {tr(product.name)}
          </h3>
          {product.badge ? (
            <span className="shrink-0 rounded-md bg-copid-price px-1.5 py-0.5 text-[10px] font-bold text-copid-deep">
              {tr(product.badge)}
            </span>
          ) : null}
        </div>

        {tr(product.description) ? (
          <p className="mt-1 line-clamp-3 text-[13px] leading-relaxed text-copid-accent/85">
            {tr(product.description)}
          </p>
        ) : null}

        {product.categoryId === 'burgers' ? (
          <div className="mt-1 text-[11px] leading-snug text-copid-accent/80">
            <p className="font-semibold text-copid-accent/90">{ui('addonsTitle')}</p>
            {product.id === 'copid-grilled-chicken' ||
            product.id === 'copid-smoky-burger' ||
            product.id === 'copid-travel-burger' ? (
              <p>• {ui('addonPatty')}</p>
            ) : null}
            <p>• {ui('addonCheese')}</p>
          </div>
        ) : null}

        {calories ? (
          <p className="mt-1.5 flex items-center gap-1 text-[12px] text-copid-accent/80">
            <span aria-hidden="true" className="text-[11px] text-emerald-200/90">
              ✦
            </span>
            <span>{calories}</span>
          </p>
        ) : null}

        <div className="mt-auto flex justify-start pt-2">
          <PriceBadge price={product.price} mealPrice={product.mealPrice} />
        </div>
      </div>
    </Link>
  )
}
