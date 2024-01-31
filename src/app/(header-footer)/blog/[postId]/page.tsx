import { notFound } from 'next/navigation'

import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown-light.css'

import { getPost, getPosts } from '@/lib/blog'

import NextLink from '@/components/NextLink'

import { Post } from '@/constant/models'

function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(dateString),
  )
}

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
  let previousPostId: string | undefined
  let nextPostId: string | undefined

  allPosts.forEach((p, i) => {
    if (p.meta.id === postId) {
      post = p
      if (i > 0) nextPostId = allPosts[i - 1].meta.id
      if (i < allPosts.length - 1) previousPostId = allPosts[i + 1].meta.id
    }
  })
  if (!post) notFound()

  const { meta, content } = post

  const pubDate = getFormattedDate(meta.date)

  const tags = meta.tags.map((tag, i) => <code key={i}>{tag}</code>)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between'>
        {previousPostId ? (
          <NextLink href={`${previousPostId}`}>Previous Post</NextLink>
        ) : (
          <div></div>
        )}
        {nextPostId ? (
          <NextLink href={`${nextPostId}`}>Next Post</NextLink>
        ) : (
          <div></div>
        )}
      </div>
      <div className='markdown-body blog-post'>
        <div className='pb-2 mb-2 border-b'>
          <h1 className='mb-0'>{meta.title}</h1>
          <span className='text-sm'>
            Published on <b>{pubDate}</b> by <b>{meta.author}</b>
          </span>
          <div className='flex flex-row gap-2 text-sm'>Tags: {tags}</div>
        </div>
        <article>{content}</article>
      </div>
    </div>
  )
}
