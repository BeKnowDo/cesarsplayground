import React, { PureComponent, Fragment } from 'react'
import DisclaimerForm from '../../components/Forms/DisclaimerForm'
import { connect } from 'react-redux'

// import action creators
import toggleDisclaimerAcceptance from '../../store/disclaimer/disclaimer-actions'
import { addProduct, productAlias, productType } from '../../store/product-selections/product-selections-actions'

import Product from '../../components/Forms/Product'

class Disclaimer extends PureComponent {
  acceptDisclaimer () {
    return this.props.disclaimer
  }

  productForm () {
    return this.acceptDisclaimer() ? <Product {...this.props} /> : null
  }

  productList () {
    const products = this.props.products ? this.props.products : null

    if (products.length > 0) {
      return (
        <table>
          <thead>
            <tr>
              <th>Product Type</th>
              <th>Product Alias</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <Fragment>
        <DisclaimerForm {...this.props} />
        { this.productForm() }
        { this.productList() }
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    disclaimer: state.disclaimer.disclaimer,
    products: state.productsReducer.products,
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

  productAlias: e => {
    const name = e.target ? e.target.value : ''
    productAlias(name, dispatch)
  },

  productType: e => {
    const type = e.target.value || ''
    productType(type, dispatch)
  },

  addProduct: props => {
    addProduct(props, dispatch)
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer)
