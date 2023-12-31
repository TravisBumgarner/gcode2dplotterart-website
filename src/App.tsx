/** @jsxImportSource @emotion/react */

import { Box, css, Experimental_CssVarsProvider, ToggleButton, Tooltip } from '@mui/material'

import './style.css'
import { useCallback, useMemo, useState } from 'react'
import Menu from './Menu'
import { lightTheme, darkTheme } from './theme'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const theme = useMemo(() => {
    return {
      light: lightTheme,
      dark: darkTheme
    }[themeName]
  }, [themeName])
  console.log(themeName, theme)

  const toggleTheme = useCallback(() => {
    setThemeName(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  return (
    <BrowserRouter>
      <Experimental_CssVarsProvider theme={theme}>
        <ToggleButton
          size='medium'
          value="text"
          onChange={toggleTheme}
          css={toggleCSS}
        >
          <Tooltip title="Toggle theme" >
            <span>{themeName === 'light' ? '🌙' : '☀️'}</span>
          </Tooltip>
        </ToggleButton>
        <Box css={wrapperCSS}>
          <Menu />
          <Router />
        </Box>
      </Experimental_CssVarsProvider>
    </BrowserRouter>
  )
}

const wrapperCSS = css`
  display: flex;
  flex-direction: row;
`

const toggleCSS = css`
  width: 40px;
  height: 40px;
  font-size: 25px;
  position: fixed;
  right: 1rem;
  top: 1rem;
`

export default App
