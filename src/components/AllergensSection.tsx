import {
  allergens,
  allergensNote,
  allergensSubtitle,
  allergensTitle,
} from '../data/allergens'

export function AllergensSection() {
  return (
    <section
      id="allergens"
      dir="rtl"
      className="scroll-mt-[calc(9.5rem+env(safe-area-inset-top,0px))] px-4 pb-2 pt-3"
    >
      <h2 className="text-[clamp(1.15rem,4.5vw,1.35rem)] font-bold text-copid-accent">
        {allergensTitle}
      </h2>
      <p className="mt-1.5 text-[13px] leading-relaxed text-copid-accent/85">
        {allergensSubtitle}
      </p>

      <ul className="mt-4 space-y-2.5">
        {allergens.map((item) => (
          <li
            key={item.name}
            className="rounded-2xl border border-copid-accent/15 bg-black/20 px-3.5 py-3"
          >
            <p className="text-[15px] font-bold leading-snug text-copid-accent">
              <span aria-hidden="true" className="me-1.5">
                {item.icon}
              </span>
              {item.name}
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-copid-accent/80">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-2xl border border-copid-accent/20 bg-copid-price/10 px-3.5 py-3 text-start">
        <p className="text-[13px] leading-relaxed text-copid-accent/90">
          <span className="font-bold text-copid-accent">تنبيه:</span>{' '}
          {allergensNote}
        </p>
      </div>
    </section>
  )
}
