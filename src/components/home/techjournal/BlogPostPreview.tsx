import { formatDate } from '@/lib/date'

import NextImage from '@/components/NextImage'
import NextLink from '@/components/NextLink'

import { Post } from '@/constant/models'

export default function BlogPostPreview({ post }: { post: Post }) {
  return (
    <NextLink
      className='flex max-w-[350px] flex-col gap-2 no-underline transition-opacity duration-200 ease-in hover:opacity-80'
      href={`/blog/${post.meta.id}`}
    >
      <div className='relative mb-4 h-[200px] lg:h-[230px]'>
        <NextImage
          alt='preview'
          src={post.meta.previewImage || '/blogposts/preview/default.jpg'}
          style={{ objectFit: 'contain' }}
          fill
        />
      </div>
      <div className='text-xl font-semibold'>{post.meta.title}</div>
      <div className='text-xs font-light'>
        {formatDate(post.meta.date)}&nbsp;&nbsp;|&nbsp;&nbsp;by{' '}
        {post.meta.author}
      </div>
      <div className='font-light'>{post.meta.previewText}</div>
      <div className='font-light underline lg:hidden'>Read full article.</div>
    </NextLink>
  )
}
