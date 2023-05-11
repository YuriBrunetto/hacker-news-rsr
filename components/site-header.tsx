import { MainNav } from '@/components/main-nav'

export function SiteHeader() {
  return (
    <header className="box-shadow-lg sticky top-0 z-40 w-full border-b border-white/[0.1] bg-zinc-900">
      <div className="container flex h-16 items-center justify-center">
        <MainNav />
      </div>
    </header>
  )
}
