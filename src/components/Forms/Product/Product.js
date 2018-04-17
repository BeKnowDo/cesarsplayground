import React, { PureComponent} from 'react'

// Import components
import { ScForm } from './styles'
import Select from '../../Select'

class Product extends PureComponent {
  render () {
    const productOptions = [
      {
        name: 'Credit Card',
        value: 'cc'
      },
      {
        name: 'Insurance',
        value: 'insurance'
      }
    ]
    return (
      <ScForm>
        <Select options={productOptions} />
      </ScForm>
    )
  }
}

export default Product
