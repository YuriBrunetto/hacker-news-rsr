import { HNItem, getPosts } from '@/lib/hn-api'
import Post from '@/components/post'

async function fetchData() {
  const posts: HNItem[] | null = await getPosts(20)
  return posts
}

const Posts = async () => {
  const posts = await fetchData()

  if (posts?.length === 0) return <p>nothin</p>

  return (
    <>
      {posts?.map((post, i) => (
        <Post key={post.id} post={post} i={i} />
      ))}
    </>
  )
}

export default Posts
