import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Disclaimer from '../pages/Disclaimer'
import NotFound from '../pages/404'
import UserProfile from '../pages/UserProfile'

const routes = [
  {
    path: '/',
    exact: 'exact',
    component: Home
  },
  {
    path: '/disclaimer',
    exact: 'exact',
    component: Disclaimer
  },
  {
    path: '/user-profile/:id',
    exact: 'exact',
    component: UserProfile
  },
  {
    component: NotFound
  }
]

const RouteComponent = route => (<Route
  path={route.path}
  render={props => (
    <route.component {...props} routes={route.routes} />
  )}
/>)

export { routes, RouteComponent }
