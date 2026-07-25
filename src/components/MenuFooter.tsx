import { useLanguage } from '../hooks/useLanguage'

export function MenuFooter() {
  const { ui } = useLanguage()

  return (
    <footer className="space-y-3 px-4 pb-10 pt-4 text-center text-copid-accent">
      <div id="allergens" className="text-sm font-semibold opacity-90">
        {ui('allergensLink')}
      </div>
      <div id="feedback" className="text-sm font-semibold opacity-90">
        {ui('feedbackLink')}
      </div>
    </footer>
  )
}
