import * as React from 'react'
import Link from 'next/link'

import { Icons } from '@/components/icons'

export function MainNav() {
  return (
    <div className="flex gap-6">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">Hacker News</span>
      </Link>
    </div>
  )
}
