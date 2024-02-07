import { redirect } from 'next/navigation'

import { getPosts } from '@/lib/blog'

export default async function BlogPage() {
  const allPosts = await getPosts()
  let mostRecentPostId: string | undefined
  if (allPosts && allPosts.length > 0) {
    mostRecentPostId = allPosts[0].meta.id
  }
  if (mostRecentPostId) {
    redirect(`blog/${mostRecentPostId}`)
  } else {
    return (
      <div className='flex w-full justify-center'>
        <h1>Coming soon...</h1>
      </div>
    )
  }
}
