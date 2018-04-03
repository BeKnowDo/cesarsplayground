import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

import Header from '../../components/Header'
import Search from '../../components/Search'

// Import our action creators
import { search } from '../../store/search/search-actions'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <Header text='Search Users' />
        <Search {...this.props} />
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    form: state.form
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleChange: e => {
      const value = e.target.value ? e.target.value : null
      const key = (value !== null) ? e.target.id : null

      if(value !== null && key !== null) {
        const query = {}
        query[key] = value
        search(query, dispatch)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
