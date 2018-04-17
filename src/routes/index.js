import React from 'react'
import { Route } from 'react-router-dom'

import Master from '../layouts/Master'
import Search from '../pages/Search'
import Disclaimer from '../pages/Disclaimer'
import NotFound from '../pages/404'
import UserProfile from '../pages/UserProfile'
import ProductSelection from '../pages/ProductSelection'

const routeNames = {
  PRODUCTS: { name: 'Products', to: '/' },
  DISCLAMIER: { name: 'Disclaimer', to: '/disclaimer' },
  SEARCH: { name: 'Search', to: '/search' },
  PROFILE: { name: 'Profile', to: '/user-profile/:id' }
}

const routes = [
  {
    path: routeNames.DISCLAMIER.to,
    exact: 'exact',
    component: Disclaimer,
    name: routeNames.DISCLAMIER.name
  },
  {
    path: routeNames.PRODUCTS.to,
    exact: 'exact',
    component: ProductSelection,
    name: routeNames.PRODUCTS.name
  },
  {
    path: routeNames.SEARCH.to,
    exact: 'exact',
    component: Search,
    name: routeNames.SEARCH.name
  },
  {
    path: routeNames.PROFILE.to,
    exact: 'exact',
    component: UserProfile,
    name: routeNames.PROFILE.name
  },
  {
    component: NotFound
  }
]

const RouteComponent = route => (
  <Master>
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  </Master>
)

export { routes, routeNames, RouteComponent }
