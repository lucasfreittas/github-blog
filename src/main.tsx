import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes/Router'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Styles/global';
import { defaultTheme } from './Styles/Themes/default';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
