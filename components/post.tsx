import Link from 'next/link'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { HNItem } from '@/lib/hn-api'

TimeAgo.addDefaultLocale(en)

type PostProps = {
  post: HNItem
  i: number
}

const Post: React.FC<PostProps> = ({ post, i }) => {
  const timeAgo = new TimeAgo('en-US')

  return (
    <Link
      href={post.url ? post.url : ''}
      key={post.id}
      title={post.title}
      className="block border-b border-white/[0.1] py-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center">
        <p className="font-bold">
          <span className="mr-1 text-white/[0.5]">{i + 1}.</span>
          {post.title}{' '}
        </p>
      </div>
      <div className="text-[12px] text-white/[0.7]">
        {post.score} points by {post.by} &mdash;{' '}
        {timeAgo.format(post.time * 1000)}
      </div>
    </Link>
  )
}

export default Post
