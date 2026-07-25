import { restaurant } from '../data/restaurant'

type Props = {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: Props) {
  return (
    <header className="relative z-[2] w-full min-w-0">
      <div className="cover-frame">
        <img
          src={restaurant.coverImage}
          alt=""
          fetchPriority="high"
        />

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

      <div className="relative z-10 -mt-[60px] flex justify-center">
        <img
          src={restaurant.logo}
          alt={restaurant.name.en}
          className="!h-[120px] !w-[120px] max-h-[120px] max-w-[120px] rounded-full border-[3px] border-copid-bg object-cover shadow-lg"
          width={120}
          height={120}
        />
      </div>
    </header>
  )
}
