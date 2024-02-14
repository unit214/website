import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { Pluggable } from 'unified'

import { Meta, Post } from '@/constant/models'

const BLOG_POST_FOLDER = 'blogposts'

const allBlogPostIds = fs
  .readdirSync(path.join(process.cwd(), BLOG_POST_FOLDER))
  .filter((path) => /\.md$/.test(path))
  .map((fileName) => {
    return fileName.replace(/\.md$/, '')
  })

export async function getPost(postId: string): Promise<Post | undefined> {
  let fileContent
  try {
    fileContent = fs.readFileSync(
      path.join(process.cwd(), `${BLOG_POST_FOLDER}/${postId}.md`),
      'utf8',
    )
  } catch (err) {
    return undefined
  }

  const { frontmatter, content } = await compileMDX<{
    title: string
    date: string
    author: string
    tags: string[]
    previewImage?: string
    previewText: string
  }>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeHighlight as unknown as Pluggable,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'append',
            },
          ],
        ],
      },
    },
  })

  const meta: Meta = {
    id: postId,
    title: frontmatter.title,
    date: new Date(frontmatter.date),
    tags: frontmatter.tags,
    author: frontmatter.author,
    previewImage: frontmatter.previewImage,
    previewText: frontmatter.previewText,
  }

  return {
    meta,
    content: content,
  }
}

export async function getPosts(): Promise<Post[] | undefined> {
  const posts: Post[] = []
  for (const postId of allBlogPostIds) {
    const post = await getPost(postId)
    if (post) {
      posts.push(post)
    }
  }

  // Newer posts will be first in the list
  return posts.sort((a, b) => b.meta.date.getTime() - a.meta.date.getTime())
}
