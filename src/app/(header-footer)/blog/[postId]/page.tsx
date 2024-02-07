import { notFound } from 'next/navigation'
import { ReactElement } from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown-light.css'

import { getPost, getPosts } from '@/lib/blog'
import { formatDate } from '@/lib/date'

import NextLink from '@/components/NextLink'

import { Meta, Post } from '@/constant/models'

type BlogPostProps = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()

  if (!posts) return []

  return posts.map((post) => ({
    postId: post.meta.id,
  }))
}

export async function generateMetadata({ params: { postId } }: BlogPostProps) {
  const post = await getPost(postId)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.meta.title,
    description: 'Unit 214',
  }
}

export default async function BlogPost({ params: { postId } }: BlogPostProps) {
  const allPosts = await getPosts()

  if (!allPosts) notFound()

  let post: Post | undefined
  let previousPostMeta: Meta | undefined
  let nextPostMeta: Meta | undefined

  allPosts.forEach((p, i) => {
    if (p.meta.id === postId) {
      post = p
      if (i > 0) nextPostMeta = allPosts[i - 1].meta
      if (i < allPosts.length - 1) previousPostMeta = allPosts[i + 1].meta
    }
  })
  if (!post) notFound()

  const { meta, content } = post

  const pubDate = formatDate(meta.date)

  const tags = meta.tags.map((tag, i) => <code key={i}>{tag}</code>)

  return (
    <div className='flex flex-col'>
      <div className='markdown-body blog-post'>
        <div className='mb-5 border-b pb-2'>
          <h1 className='mb-0'>{meta.title}</h1>
          <span className='text-sm font-light'>
            Published on {pubDate} by {meta.author}
          </span>
          <div className='flex flex-row gap-2 text-sm font-light'>
            Tags: {tags}
          </div>
        </div>
        <article className='border-b'>{content}</article>
      </div>
      <div className='my-10 flex flex-col items-center justify-between gap-10 lg:flex-row'>
        <NextPostLink
          postMeta={previousPostMeta}
          linkText='Previous'
          linkIcon={<HiArrowLongLeft size={24} />}
        />

        <NextPostLink
          postMeta={nextPostMeta}
          linkText='Next'
          linkIcon={<HiArrowLongRight size={24} />}
        />
      </div>
    </div>
  )
}

function NextPostLink({
  postMeta,
  linkText,
  linkIcon,
}: {
  postMeta?: Meta
  linkText: 'Next' | 'Previous'
  linkIcon: ReactElement
}) {
  return postMeta ? (
    <NextLink
      href={postMeta.id}
      className='flex flex-col no-underline transition-opacity duration-200 ease-in hover:opacity-80'
    >
      <div className='flex flex-col items-center gap-1'>
        <span className='font-light'>{linkText} Post</span>
        <span className='text-center font-semibold'>{postMeta.title}</span>
        {linkIcon}
      </div>
    </NextLink>
  ) : (
    <div></div>
  )
}
