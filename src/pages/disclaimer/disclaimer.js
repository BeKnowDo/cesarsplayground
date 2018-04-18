import React, { PureComponent, Fragment } from 'react'
import DisclaimerForm from '../../components/Forms/DisclaimerForm'
import { connect } from 'react-redux'

import { toggleDisclaimerAcceptance } from '../../store/disclaimer/disclaimer-actions'

class Disclaimer extends PureComponent {
  render () {
    return (
      <Fragment>
        <DisclaimerForm {...this.props} />
      </Fragment>
    )
  }
}
function mapStateToProps (state) {
  return {
    disclaimer: state.disclaimer.disclaimer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onChange: e => {
      const checked = e.target.checked
      // console.log(checked)
      toggleDisclaimerAcceptance(checked, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer)
