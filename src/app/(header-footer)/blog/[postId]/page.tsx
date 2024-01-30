import { notFound } from 'next/navigation'

import 'highlight.js/styles/github-dark.css'

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
      if (i > 0) previousPostId = allPosts[i - 1].meta.id
      if (i < allPosts.length - 1) nextPostId = allPosts[i + 1].meta.id
    }
  })
  if (!post) notFound()

  const { meta, content } = post

  const pubDate = getFormattedDate(meta.date)

  const tags = meta.tags.map((tag, i) => <div key={i}>{tag}</div>)

  return (
    <>
      <div className='flex flex-row justify-between my-5'>
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
      <div className='prose prose-lg max-w-[1100px] icon:no-underline'>
        <div className='pb-2 mb-2 border-b'>
          <h1 className='mb-0'>{meta.title}</h1>
          <span className='mt-0 text-sm'>
            Published on {pubDate} by {meta.author}
          </span>
          <div className='flex flex-row gap-4'>{tags}</div>
        </div>
        <article>{content}</article>
      </div>
    </>
  )
}
