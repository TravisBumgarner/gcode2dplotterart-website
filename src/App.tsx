/** @jsxImportSource @emotion/react */

import { Box, css, Experimental_CssVarsProvider, IconButton, ToggleButton, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import './style.css'
import plotterArt from './content'
import PlotterArt from './PlotterArt'
import { useCallback, useMemo, useState } from 'react'
import Menu from './Menu'
import { lightTheme, darkTheme } from './theme'

interface ThemePickerProps {
  toggleTheme: () => void
  theme: 'light' | 'dark'
}

const ThemePicker = ({ toggleTheme, theme }: ThemePickerProps) => {
  return (
    <Box css={themePickerCSS}>
      <ToggleButton
        size='medium'
        value="text"
        onChange={toggleTheme}
        css={css`width: 50px; height: 50px; font-size: 30px`}
      >
        <Tooltip title="Toggle theme" >
          <span>{theme === 'light' ? '🌙' : '☀️'}</span>
        </Tooltip>
      </ToggleButton>
    </Box>
  )
}

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
          <IconButton onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <ThemePicker toggleTheme={toggleTheme} theme={themeName} />
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

const themePickerCSS = css`
  position: fixed;
  right: 1rem;
  top: 1rem;
`

export default App
