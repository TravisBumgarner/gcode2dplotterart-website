/** @jsxImportSource @emotion/react */

import { Box, css } from '@mui/material'

import './style.css'
import plotterArt from './content'
import PlotterArt from './PlotterArt'

function App () {
  return (
   <Box css={wrapperCSS}>
    {plotterArt.map((art) => (
       <PlotterArt key={art.title} {...art} />
    ))}
   </Box>
  )
}

const wrapperCSS = css`
`

export default App
