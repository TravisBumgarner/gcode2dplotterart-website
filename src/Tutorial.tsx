import { useMemo } from 'react'

import tutorials from './tutorials'
import { Box } from '@mui/system'

interface Props {
  id: string
}

const Post = ({ id }: Props) => {
  const { title, renderer } = useMemo(() => {
    return tutorials[id]
  }, [id])

  return (
    <Box>
      {/* <Header src={`${__STATIC__}/posts/${id}/${post.preview_image}`}> */}
      {/* <div> */}
      <h1>{title}</h1>
      {renderer()}

    </Box>
  )
}

export default Post
