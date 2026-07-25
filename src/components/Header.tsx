import { restaurant } from '../data/restaurant'

type Props = {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: Props) {
  return (
    <header className="relative z-[2] w-full min-w-0">
      <div
        className="cover-frame"
        style={{ backgroundImage: `url(${restaurant.coverImage})` }}
        role="img"
        aria-label={restaurant.name.en}
      >
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Menu"
          className="menu-profile-btn absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-copid-deep/75 text-copid-accent shadow-md backdrop-blur-sm"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M5 19.5c1.8-3.2 4.2-4.8 7-4.8s5.2 1.6 7 4.8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="floating-logo">
        <div className="floating-logo-badge">
          <img
            src="/images/logo-badge.png"
            alt={restaurant.name.en}
          />
        </div>
      </div>
    </header>
  )
}
