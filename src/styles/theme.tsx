import { blue, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { jaJP } from '@mui/material/locale'

export const theme = createTheme(
  {
    palette: {
      primary: { main: '#1a1a1a' },
      secondary: { main: '#6ec1eb' },
      info: { main: blue[300], dark: blue[800] },
      warning: { main: red[200] },
      background: { default: '#802828' },
    },
    typography: {
      fontFamily: ['Noto sans JP', 'Roboto', 'sans-serif'].join(','),
    },
  },
  jaJP
)
