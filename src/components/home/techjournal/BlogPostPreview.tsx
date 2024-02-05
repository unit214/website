'use client'

import { formatDate } from '@/lib/date'

import NextImage from '@/components/NextImage'
import NextLink from '@/components/NextLink'

import { Post } from '@/constant/models'

export default function BlogPostPreview({ post }: { post: Post }) {
  return (
    <NextLink
      className='flex flex-col gap-2 no-underline max-w-[350px] transition-opacity duration-200 ease-in hover:opacity-80'
      href={`/blog/${post.meta.id}`}
    >
      <div className='h-[200px] lg:h-[230px] relative'>
        <NextImage
          alt='preview'
          src={post.meta.previewImage || '/blogposts/preview/default.jpg'}
          style={{ objectFit: 'cover' }}
          fill
        />
      </div>
      <div className='font-semibold text-xl'>{post.meta.title}</div>
      <div className='font-light text-xs'>
        {formatDate(post.meta.date)}&nbsp;&nbsp;|&nbsp;&nbsp;by{' '}
        {post.meta.author}
      </div>
      <div className='font-light'>{post.meta.previewText}</div>
      <div className='font-light lg:hidden underline'>Read full article.</div>
    </NextLink>
  )
}
