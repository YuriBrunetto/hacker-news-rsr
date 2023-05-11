import { HNItem, getPosts } from '@/lib/hn-api'

async function fetchData() {
  const posts: HNItem[] | null = await getPosts()
  return posts
}

const Posts = async () => {
  const posts = await fetchData()

  return (
    <>
      {posts?.map((post) => (
        <div
          key={post.id}
          className="flex max-w-[980px] flex-col items-start gap-2"
        >
          <p>{post.title}</p>
        </div>
      ))}
    </>
  )
}

export default Posts
