import { getPosts } from '@/lib/blog'

import BlogPostPreview from '@/components/home/techjournal/BlogPostPreview'

export default async function TechJournal() {
  const allPosts = await getPosts()

  // Display tech journal only if at least one post exists
  if (allPosts && allPosts.length > 0) {
    return (
      <div className='flex w-full justify-center px-10 lg:px-20 py-20'>
        <div className='flex flex-col items-start'>
          <h1 className='whitespace-nowrap mb-10'>Tech Journal</h1>
          <div className='flex justify-between items-center lg:items-start gap-14 lg:gap-10 flex-col lg:flex-row'>
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
  } else return <></>
}
