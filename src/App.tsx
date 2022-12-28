import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CardContextProvider } from './context/CardContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CardContextProvider>
            <Router />
          </CardContextProvider>
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
