import { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/menu'
import { useLanguage } from '../hooks/useLanguage'
import { formatCalories } from '../utils/format'
import { PriceBadge } from '../components/PriceBadge'
import { EmptyState } from '../components/EmptyState'

export function ProductDetails() {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const { tr, ui, locale } = useLanguage()
  const product = useMemo(() => getProductById(id), [id])

  if (!product) {
    return (
      <div className="menu-shell">
        <EmptyState />
        <div className="px-4 pb-8 text-center">
          <Link to="/" className="text-copid-accent underline">
            {ui('back')}
          </Link>
        </div>
      </div>
    )
  }

  const calories = formatCalories(product.calories, locale, ui('calories'))

  const share = async () => {
    const shareData = {
      title: tr(product.name),
      text: tr(product.description),
      url: window.location.href,
    }
    try {
      if (navigator.share) await navigator.share(shareData)
      else await navigator.clipboard.writeText(window.location.href)
    } catch {
      /* user cancelled */
    }
  }

  return (
    <div className="menu-shell pb-10">
      <div className="relative">
        <img
          src={product.image}
          alt={tr(product.name)}
          className="h-[280px] w-full rounded-b-3xl object-cover bg-copid-sheet"
        />

        <button
          type="button"
          onClick={share}
          aria-label={ui('share')}
          className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="M8.3 13.2l7.4 4.2M15.7 6.6l-7.4 4.2" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label={ui('back')}
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9.5 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="px-4 pt-5">
        <h1 className="text-2xl font-bold text-copid-accent">{tr(product.name)}</h1>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.badge ? (
            <span className="inline-flex items-center gap-1 rounded-lg bg-copid-price px-3 py-1.5 text-sm font-semibold text-copid-deep">
              {tr(product.badge)} *
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1 rounded-lg bg-copid-price px-3 py-1.5 text-sm font-semibold text-copid-deep">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-copid-deep text-[10px]">
              i
            </span>
            {ui('nutrition')}
          </span>
        </div>

        {calories ? (
          <div className="mt-3">
            <span className="inline-flex rounded-lg bg-copid-price px-3 py-1.5 text-sm font-semibold text-copid-deep">
              {calories}
            </span>
          </div>
        ) : null}

        {product.allergens?.length ? (
          <div className="mt-5">
            <p className="mb-2 text-sm font-semibold text-copid-accent">{ui('allergensTitle')}</p>
            <div className="flex flex-wrap gap-2">
              {product.allergens.map((allergen) => (
                <span
                  key={allergen.en}
                  className="rounded-full bg-copid-price px-3 py-1 text-xs font-semibold text-copid-deep"
                >
                  {tr(allergen)}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {tr(product.description) ? (
          <p className="mt-5 text-[15px] leading-relaxed text-copid-accent/90">
            {tr(product.description)}
          </p>
        ) : null}

        <div className="mt-6 flex justify-end">
          <PriceBadge price={product.price} />
        </div>
      </div>
    </div>
  )
}
