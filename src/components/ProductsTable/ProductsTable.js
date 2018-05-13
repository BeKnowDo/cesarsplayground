import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import ScTable from './styles'

function mapStateToProps (state) {
  return {
    products: state.productsReducer.products
  }
}

class ProductsTable extends PureComponent {
  productsList () {
    const products = this.props.products ? this.props.products : null

    if (products.length > 0) {
      return (
        <ScTable>
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
        </ScTable>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <Fragment>
        { this.productsList() }
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps
)(ProductsTable)
