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
    <Box css={wrapperCSS}>
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

const wrapperCSS = css`
  width: 100%;
  padding: 0.5rem;
  overflow: auto;
`

const codeWrapperCSS = css`
  font-family: "Roboto Mono";
`

export default Example
