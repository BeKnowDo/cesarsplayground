import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import { injectGlobal } from 'styled-components'
import { typography } from './styles/variables'

import { routes, RouteComponent } from './routes'

injectGlobal`
  body {
    font-family: ${typography.fontFamily}
  }
`

ReactDOM.render((
  <Router>
    <Switch>
      {
        routes.map((route, key) => {
          return <RouteComponent key={key} {...route} />
        })
      }
    </Switch>
  </Router>
), document.getElementById('root'))
registerServiceWorker()
