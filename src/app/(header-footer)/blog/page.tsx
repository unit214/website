import { notFound, redirect } from 'next/navigation'

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
    return notFound()
  }
}
