import { useEffect, useRef, type ComponentType } from 'react'
import { CupSoda, Drumstick, Sandwich, Soup, Utensils, type LucideProps } from 'lucide-react'
import type { Category } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'

type Props = {
  categories: Category[]
  activeId: string
  /** Only set on category click — never from scroll-spy. Triggers horizontal nav scroll only. */
  focusRequestId: string | null
  sticky?: boolean
  onSelect: (id: string) => void
}

const categoryIcons: Record<string, ComponentType<LucideProps>> = {
  burgers: Sandwich,
  sides: Drumstick,
  fries: Utensils,
  sauces: Soup,
  drinks: CupSoda,
}

/** Product photos used as category circle images (exact menu paths). */
const categoryImages: Partial<Record<string, string>> = {
  burgers: '/images/products/copid_smoky_burger.png',
  sides: '/images/products/copid_smoky_wings.png',
  fries: '/images/products/copid_sweet_potato_fries.png',
  sauces: '/images/products/copid_c_sauce.png',
  drinks: '/images/products/copid_coca_cola.png',
}

/** Horizontally center a pill inside the nav scroller only — never scrolls the page. */
function scrollPillHorizontally(scroller: HTMLElement, pill: HTMLElement) {
  const scrollerRect = scroller.getBoundingClientRect()
  const pillRect = pill.getBoundingClientRect()
  const delta =
    pillRect.left + pillRect.width / 2 - (scrollerRect.left + scrollerRect.width / 2)

  if (Math.abs(delta) < 2) return
  scroller.scrollBy({ left: delta, behavior: 'smooth' })
}

export function CategoryNav({
  categories,
  activeId,
  focusRequestId,
  sticky = false,
  onSelect,
}: Props) {
  const { tr } = useLanguage()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Horizontal-only sync on explicit click requests — never on scroll-spy activeId updates.
  useEffect(() => {
    if (!focusRequestId) return
    const categoryId = focusRequestId.includes(':')
      ? focusRequestId.split(':')[0]
      : focusRequestId
    const scroller = scrollerRef.current
    const pill = itemRefs.current[categoryId]
    if (!scroller || !pill) return
    scrollPillHorizontally(scroller, pill)
  }, [focusRequestId])

  return (
    <nav
      className={`${sticky ? 'category-nav-sticky' : ''} border-b border-black/5 px-2 pb-3 pt-1`}
      aria-label="Categories"
    >
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-3 overflow-x-auto overscroll-x-contain px-2 py-2"
      >
        {categories.map((category) => {
          const isActive = category.id === activeId
          const Icon = categoryIcons[category.id] ?? Sandwich
          const photo = categoryImages[category.id]
          return (
            <button
              key={category.id}
              type="button"
              ref={(node) => {
                itemRefs.current[category.id] = node
              }}
              onClick={() => onSelect(category.id)}
              className={`category-pill flex w-[88px] shrink-0 flex-col items-center gap-2 ${
                isActive ? 'active' : ''
              }`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="category-icon-circle flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full bg-black/20 shadow-md">
                {photo ? (
                  <img
                    src={photo}
                    alt=""
                    className="category-icon-photo"
                    aria-hidden="true"
                  />
                ) : (
                  <Icon
                    size={30}
                    strokeWidth={1.75}
                    absoluteStrokeWidth={false}
                    className="text-copid-accent"
                    aria-hidden="true"
                  />
                )}
              </span>
              <span className="line-clamp-2 min-h-[2.4em] text-center text-[12px] font-semibold leading-tight text-copid-accent">
                {tr(category.name)}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
