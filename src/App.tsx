/** @jsxImportSource @emotion/react */

import { Box, css, Experimental_CssVarsProvider, IconButton, ToggleButton, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import './style.css'
import plotterArt from './content'
import PlotterArt from './PlotterArt'
import { useCallback, useMemo, useState } from 'react'
import Menu from './Menu'
import { lightTheme, darkTheme } from './theme'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const theme = useMemo(() => {
    return {
      light: lightTheme,
      dark: darkTheme
    }[themeName]
  }, [themeName])
  console.log(themeName, theme)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeName(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  return (
    <Experimental_CssVarsProvider theme={theme}>
      <Box css={headerCSS}>
        <Tooltip title="Open Menu">
          <IconButton onClick={toggleMenu} css={css`align-self: start`}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <ToggleButton
          size='medium'
          value="text"
          onChange={toggleTheme}
          css={css`width: 30; height: 30; font-size: 25px`}
        >
          <Tooltip title="Toggle theme" >
            <span>{themeName === 'light' ? '🌙' : '☀️'}</span>
          </Tooltip>
        </ToggleButton>
      </Box>
      <Box css={wrapperCSS}>
        {plotterArt.map((art) => (
          <PlotterArt key={art.title} {...art} />
        ))}
      </Box>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </Experimental_CssVarsProvider>
  )
}

const headerCSS = css`
  display: flex;
  justify-content: space-between;
`

const wrapperCSS = css`
          `

export default App
