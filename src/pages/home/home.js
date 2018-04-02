import React, { Component, Fragment } from 'react'
import connect from 'react-redux'

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

function mapStateToProps (state) {
  
}

function mapDispatchToProps (dispatch) {

}

export default connect()(HomePage)
