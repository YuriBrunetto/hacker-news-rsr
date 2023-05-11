import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center text-slate-500">
      <Loader2 className="h-8 w-8 animate-spin" />
      Loading posts...
    </div>
  )
}
