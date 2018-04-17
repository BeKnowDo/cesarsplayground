import React, { Fragment } from 'react'
import {Main} from './styles'
import Navigation from '../../components/Navigation'

const Master = props => ({
  render () {
    return (
      <Fragment>
        <Main>
          <Navigation />
          <section>
            {this.props.children}
          </section>
        </Main>
      </Fragment>
    )
  }
})

export default Master
