import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import storeConfig from './store'
import { typography } from './styles/variables'

import { routes, RouteComponent } from './routes'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  body {
    font-family: ${typography.fontFamily}
  }
`

const store = storeConfig()

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        {
          routes.map((route, key) => {
            return <RouteComponent key={key} {...route} />
          })
        }
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
