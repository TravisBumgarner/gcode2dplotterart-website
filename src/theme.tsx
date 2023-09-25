import { type ThemeOptions, experimental_extendTheme as extendTheme } from '@mui/material/styles'
import _ from 'lodash'

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.35
    },
    h2: {
      color: 'var(--mui-palette-secondary-main)',
      fontSize: '1.7rem',
      fontWeight: 700,
      lineHeight: 1.35

    },
    h3: {
      color: 'var(--mui-palette-primary-main)',
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: 1.35,
      margin: '0 0 0.5rem 0'
    },
    body1: {
      color: 'var(--mui-palette-text-primary)'
    },
    body2: {
      color: 'var(--mui-palette-text-primary)'
    }
  }
}

const darkThemeOptions = {
  palette: {
    primary: {
      main: 'rgb(76, 125, 165)'
    },
    secondary: {
      main: 'rgb(73, 190, 170)'
    },
    text: {
      primary: 'rgb(215,227,232)'
    },
    action: {
      disabled: 'rgb(199, 197, 197)'
    },
    background: {
      default: 'rgb(92, 94, 95)',
      paper: 'rgb(184, 203, 210)'
    },
    warning: {
      main: 'rgb(238, 184, 104)'
    },
    error: {
      main: 'rgb(239, 118, 122)'
    }
  }
}

const lightThemeOptions = {
  palette: {
    primary: {
      main: 'rgb(86, 105, 188)'
    },
    secondary: {
      main: 'rgb(74, 171, 100)'
    },
    text: {
      primary: 'rgb(0, 0, 0)'
    },
    action: {
      disabled: 'rgb(126, 126, 126)'
    },
    background: {
      default: 'rgb(255, 255, 255)',
      paper: 'rgb(232, 232, 232)'
    },
    warning: {
      main: 'rgb(238, 184, 104)'
    },
    error: {
      main: 'rgb(239, 118, 122)'
    }
  }
}

export const lightTheme = extendTheme(_.merge(baseThemeOptions, lightThemeOptions))
export const darkTheme = extendTheme(_.merge(baseThemeOptions, darkThemeOptions))
