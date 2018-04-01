import React, { Component, Fragment } from 'react'
import Header from '../../components/Header'
import Search from '../../components/Search'

class HomePage extends Component {
  render () {
    return (
      <Fragment>
        <Header text='Search Users' />
        <Search />
      </Fragment>
    )
  }
}

export default HomePage
