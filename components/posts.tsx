import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { HNItem, getPosts } from '@/lib/hn-api'

import { Badge } from './ui/badge'

TimeAgo.addDefaultLocale(en)

async function fetchData() {
  const posts: HNItem[] | null = await getPosts(20)
  return posts
}

const Posts = async () => {
  const timeAgo = new TimeAgo('en-US')
  const posts = await fetchData()

  if (posts === null) return <p>nothin</p>

  return (
    <>
      {posts.map((post, i) => (
        <div key={post.id} className="border-b border-slate-900 py-2">
          <div className="flex items-center">
            <p className="text-sm font-bold">
              <span className="mr-1 text-slate-500">{i + 1}.</span>
              {post.title}{' '}
            </p>
            <Badge variant="secondary" className="ml-2 text-[10px]">
              {post.type}
            </Badge>
          </div>
          <p className="text-[12px] text-slate-600">
            {post.score} points by {post.by} &mdash;{' '}
            {timeAgo.format(post.time * 1000)}
          </p>
        </div>
      ))}
    </>
  )
}

export default Posts
