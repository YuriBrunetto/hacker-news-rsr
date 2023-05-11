type HNIdItem = number
export type HNItem = {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}

export async function getNewPosts(limit = 10): Promise<HNIdItem[]> {
  const response = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  )
  const data = await response.json()
  return data.slice(0, limit)
}

async function getItemById(id: number): Promise<HNItem> {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  )
  const data = await response.json()

  return data
}

export async function getPosts(): Promise<HNItem[] | null> {
  try {
    const ids: HNIdItem[] = await getNewPosts()
    const posts: Promise<HNItem>[] = ids.map(
      async (id: HNIdItem) => await getItemById(id)
    )
    return Promise.all(posts)
  } catch (error) {
    console.error(`Error retrieving posts: ${error}`)
    return null
  }
}
