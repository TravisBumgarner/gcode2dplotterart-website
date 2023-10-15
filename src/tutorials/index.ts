import Foo from './foo.mdx'

interface BlogPost {
  id: string
  title: string
  date: string
  draft: boolean
  renderer: (props?: any) => JSX.Element
  description: string
  preview_image: string
}

const posts: Record<string, BlogPost> = {
  'a-collection-of-tips-to-become-a-software-engineer': {
    id: 'a-collection-of-tips-to-become-a-software-engineer',
    renderer: Foo,
    title: 'A Collection of Tips to Become a Software Engineer',
    date: '2019-04-15',
    draft: false,
    description: 'Over the years I have been on both sides of the interview process. I have learned a wealth of experience, here is my advice.',
    preview_image: 'preview_image.jpg'
  }
}

export default posts
export type { BlogPost }
