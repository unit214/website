import { notFound } from 'next/navigation'
import { ReactElement } from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import { SiGooglecalendar } from 'react-icons/si'

import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown-light.css'

import { getPost, getPosts } from '@/lib/blog'
import { formatDate } from '@/lib/date'

import NextLink from '@/components/NextLink'

import { siteConfig } from '@/constant/config'
import { Meta, Post } from '@/constant/models'
import { teamMembers } from '@/constant/teamMembers'

type BlogPostProps = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()

  // TODO change to empty array once https://github.com/vercel/next.js/issues/61213 is resolved
  if (!posts || posts.length === 0) {
    return [{ postId: 'none' }]
  }

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
    description: post.meta.previewText,
    openGraph: {
      title: post.meta.title,
      description: post.meta.previewText,
      url: `${siteConfig.url}/blog/${post.meta.id}`,
      type: 'article',
      images: [
        {
          url: `${siteConfig.url}${post.meta.previewImage}`,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.previewText,
      images: [
        {
          url: `${siteConfig.url}${post.meta.previewImage}`,
          alt: post.meta.title,
        },
      ],
    },
  }
}

export default async function BlogPost({ params: { postId } }: BlogPostProps) {
  const allPosts = await getPosts()

  if (!allPosts || allPosts.length === 0) notFound()

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

  const teamMember = teamMembers.find(({ name }) => name === meta.author)

  return (
    <div className='flex flex-col'>
      <div className='markdown-body blog-post'>
        <div className='mb-5 pb-2'>
          <h1 className='mb-0'>{meta.title}</h1>
          <span className='text-sm font-light'>
            Published on {pubDate} by {meta.author}
          </span>
        </div>
        <article>{content}</article>
        <h2>About the Author</h2>
        <div className='flex w-full border-b pb-4'>
          {teamMember ? (
            <div className='flex flex-1 flex-row gap-6'>
              <div>
                <teamMember.logo className='h-16 w-full' />
              </div>
              <div>
                <div className='font-semibold'>{teamMember.name}</div>
                {teamMember.description}
              </div>
            </div>
          ) : null}
          {teamMember?.calendarLink ? (
            <div className='flex flex-1 items-center justify-center text-2xl'>
              <NextLink href={teamMember?.calendarLink} isExternalLink>
                Book a meeting with {meta.author}{' '}
                <SiGooglecalendar className='inline' />
              </NextLink>
            </div>
          ) : null}
        </div>
        <div className='mt-4 flex flex-row gap-2 text-sm font-light'>
          Tags: {tags}
        </div>
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
