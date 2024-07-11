import { getPosts } from '@/lib/blog'

import BlogPostPreview from '@/components/home/techjournal/BlogPostPreview'
import NextLink from '@/components/NextLink'

import TextUnderlineRed from '~/svg/text-underline-red.svg'

export default async function TechJournal({
  length = 3,
}: { length?: number } = {}) {
  const allPosts = await getPosts()

  // Display tech journal only if at least one post exists
  if (!allPosts || allPosts.length === 0) return <></>
  return (
    <div className='flex flex-col items-start'>
      <h1 className='mb-10 whitespace-nowrap'>
        <NextLink className='relative no-underline' href='/blog'>
          Tech Journal
          <TextUnderlineRed className='absolute -bottom-2 -left-2 w-[210px]' />
        </NextLink>
      </h1>
      {/* grid view of blogposts */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {
          // Display the three latest posts
          allPosts.slice(0, length).map((post, index) => {
            return <BlogPostPreview post={post} key={index} />
          })
        }
      </div>
    </div>
  )
}
