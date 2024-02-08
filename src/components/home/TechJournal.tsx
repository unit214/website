import { getPosts } from '@/lib/blog'

import BlogPostPreview from '@/components/home/techjournal/BlogPostPreview'

export default async function TechJournal() {
  const allPosts = await getPosts()

  // Display tech journal only if at least one post exists
  if (!allPosts || allPosts.length === 0) return <></>
  return (
    <div className='flex w-full justify-center px-10 py-20 lg:px-20'>
      <div className='flex flex-col items-start'>
        <h1 className='mb-10 whitespace-nowrap'>Tech Journal</h1>
        <div className='flex flex-col items-center justify-between gap-14 lg:flex-row lg:items-start lg:gap-10'>
          {
            // Display the three latest posts
            allPosts.slice(0, 3).map((post, index) => {
              return <BlogPostPreview post={post} key={index} />
            })
          }
        </div>
      </div>
    </div>
  )
}
