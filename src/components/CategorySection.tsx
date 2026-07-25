import type { Category, Product } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { ProductCard } from './ProductCard'
import { EmptyState } from './EmptyState'

type Props = {
  category: Category
  products: Product[]
}

export function CategorySection({ category, products }: Props) {
  const { tr } = useLanguage()

  return (
    <section
      id={`category-${category.id}`}
      className="scroll-mt-[calc(9.5rem+env(safe-area-inset-top,0px))] px-1 pb-4 min-w-0"
    >
      <h2 className="px-4 pb-2 pt-3 text-[clamp(1.15rem,4.5vw,1.35rem)] font-bold text-copid-accent break-words">
        {tr(category.name)}
      </h2>

      {products.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="divide-y divide-black/10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
