import Posts from '@/components/posts'

export default function IndexPage() {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </main>
  )
}
