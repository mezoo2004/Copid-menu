import { restaurant } from '../data/restaurant'
import { useLanguage } from '../hooks/useLanguage'

type Props = {
  onFeedbackClick?: () => void
}

export function RestaurantInfo({ onFeedbackClick }: Props) {
  const { tr, ui, toggleLocale } = useLanguage()

  return (
    <section className="relative px-4 pb-3 pt-2 text-copid-accent">
      <div className="mb-3 flex min-h-8 items-center justify-start" dir="ltr">
        <button
          type="button"
          onClick={toggleLocale}
          className="inline-flex items-center gap-1.5 rounded-full px-1 py-1 text-sm font-semibold text-copid-accent"
          aria-label={ui('languageLabel')}
        >
          <span className="text-[10px] opacity-80">▼</span>
          <span>{ui('languageLabel')}</span>
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0 text-copid-accent"
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M3.5 12h17M12 3.5c2.5 2.8 3.8 5.6 3.8 8.5S14.5 17.7 12 20.5C9.5 17.7 8.2 14.9 8.2 12S9.5 6.3 12 3.5z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="text-center">
        <h1 className="font-display text-[1.55rem] font-medium leading-tight tracking-wide text-copid-accent">
          {tr(restaurant.welcome)}
        </h1>

        <div className="mt-3 flex items-center justify-center gap-5 text-copid-accent">
          <button
            type="button"
            onClick={onFeedbackClick}
            aria-label={ui('feedbackLink')}
            className="opacity-90 transition hover:opacity-100"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3.5l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 15.8l-4.8 2.46.92-5.34-3.88-3.78 5.36-.78L12 3.5z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {restaurant.instagramUrl ? (
            <a
              href={restaurant.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="opacity-90 transition hover:opacity-100"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
