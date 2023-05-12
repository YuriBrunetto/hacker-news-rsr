import Posts from '@/components/posts'

export const revalidate = 60

export default function IndexPage() {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </main>
  )
}
