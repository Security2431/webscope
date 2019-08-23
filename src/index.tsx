import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const rootEl = document.getElementById('root')

const render = (Component: React.FC) => ReactDOM.render(<Component />, rootEl)

render(App)
declare var module: any

if (module.hot) {
  module.hot.accept('./components/App', () => render(App))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
