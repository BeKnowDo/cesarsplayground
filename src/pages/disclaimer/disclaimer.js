import React, { PureComponent, Fragment } from 'react'
import DisclaimerForm from '../../components/Forms/DisclaimerForm'
import { connect } from 'react-redux'

// import action creators
import toggleDisclaimerAcceptance from '../../store/disclaimer/disclaimer-actions'
import { addProduct } from '../../store/product-selections/product-selections-actions'

import Product from '../../components/Forms/Product'
import ProductsTable from '../../components/ProductsTable'

class Disclaimer extends PureComponent {
  acceptDisclaimer () {
    return this.props.disclaimer
  }

  productForm () {
    return this.acceptDisclaimer()
      ? <Fragment>
        <Product {...this.props} />
        <ProductsTable />
      </Fragment>
      : null
  }

  render () {
    return (
      <Fragment>
        <DisclaimerForm {...this.props} />
        { this.productForm() }
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    disclaimer: state.disclaimer.disclaimer,
    newProduct: {
      name: state.productsReducer.newProduct ? state.productsReducer.newProduct.name : undefined,
      type: state.productsReducer.newProduct ? state.productsReducer.newProduct.type : undefined
    }
  }
}

const mapDispatchToProps = dispatch => ({

  onChange: e => {
    const checked = e.target.checked
    toggleDisclaimerAcceptance(checked, dispatch)
  },
  addProduct: props => {
    addProduct(props, dispatch)
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer)
