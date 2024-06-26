import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'system-ui', 'sans-serif'].join(','),
  },
})

const MUIThemeContextProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MUIThemeContextProvider
