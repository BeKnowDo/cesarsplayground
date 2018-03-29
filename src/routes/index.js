import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/home'
import Disclaimer from '../pages/disclaimer'

const routes = [
  {
    path: '/',
    exact: 'exact',
    component: Home
  },
  {
    path: '/disclaimer',
    component: Disclaimer
  }
]

const RouteComponent = route => (<Route
  path={route.path}
  render={props => (
    <route.component {...props} routes={route.routes} />
  )}
/>)

export { routes, RouteComponent }
