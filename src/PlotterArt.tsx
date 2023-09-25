/** @jsxImportSource @emotion/react */

import { Box, Typography, css } from '@mui/material'
import { CodeBlock, dracula } from 'react-code-blocks'

interface Props {
  title: string
  description: string
  code: string
}

const Example = ({ title, description, code }: Props) => {
  return (
    <Box>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Box css={codeWrapperCSS}>
        <CodeBlock
          text={code}
          language={'python'}
          showLineNumbers
          theme={dracula}
        />
      </Box>
    </Box>
  )
}

const codeWrapperCSS = css`
  font-family: "Roboto Mono";
  max-height:500px;
  overflow: auto;
`

export default Example
