import React, { Fragment } from 'react';
import Main from './styles'


const Master = props => ({
  render () {
    return (
      <Fragment>
        <Main>
          { this.props.children }
        </Main>
      </Fragment>
    )
  }
})

export default Master;