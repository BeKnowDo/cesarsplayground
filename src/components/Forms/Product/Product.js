import React, { PureComponent } from 'react'
import { Flex, Box } from 'grid-styled'

// Import components
import ScForm from './styles'
import Select from '../../Select'
import Button from '../../Button'
import Input from '../../Input'

class Product extends PureComponent {
  constructor (props) {
    super(props)
    this.addProduct = this.addProduct.bind(this)
  }

  addProduct (e) {
    e.preventDefault()
    const product = (this.props.newProduct.name && this.props.newProduct.type) ? this.props.newProduct : undefined
    console.log(product)
    if (product) {
      this.props.addProduct(product)
    }
  }
  render () {
    const productOptions = [
      {
        name: 'Choose a product...',
        value: ''
      },
      {
        name: 'Credit Card',
        value: 'cc'
      },
      {
        name: 'Insurance',
        value: 'insurance'
      }
    ]

    const productAlias = this.props.newProduct ? this.props.newProduct.name : undefined

    return (
      <ScForm>
        <div>
          <Select
            required
            options={productOptions}
            onChange={this.props.productType}
          />
          <Input
            required
            type='text'
            value={productAlias || ''}
            placeholder='Nickname for Product'
            onChange={this.props.productAlias}
          />
        </div>

        <Flex>
          <Box width={1 / 2} pt={2} pr={2}>
            <Button
              text='Add Another Product'
              onClick={this.addProduct}
            />
          </Box>

          <Box width={1 / 2} pt={2} pl={2}>
            <Button
              text='Continue'
              continue
            />
          </Box>

        </Flex>
      </ScForm>
    )
  }
}

export default Product
