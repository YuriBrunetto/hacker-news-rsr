import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { HNItem } from '@/lib/hn-api'
import { Badge } from '@/components/ui/badge'

TimeAgo.addDefaultLocale(en)

type PostProps = {
  post: HNItem
  i: number
}

const Post: React.FC<PostProps> = ({ post, i }) => {
  const timeAgo = new TimeAgo('en-US')

  return (
    <div key={post.id} className="border-b border-white/[0.1] py-2">
      <div className="flex items-center">
        <p className="font-bold">
          <span className="mr-1 text-white/[0.5]">{i + 1}.</span>
          {post.title}{' '}
        </p>
        <Badge
          variant="secondary"
          className="ml-2 bg-orange-600 text-[10px] hover:bg-orange-500"
        >
          {post.type}
        </Badge>
      </div>
      <p className="text-[12px] text-white/[0.7]">
        {post.score} points by {post.by} &mdash;{' '}
        {timeAgo.format(post.time * 1000)}
      </p>
    </div>
  )
}

export default Post
