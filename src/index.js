import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import Root from './Root'
import store from './store/store'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Arial, sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
