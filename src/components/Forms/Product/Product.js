import React, { PureComponent } from 'react'
import { Flex, Box } from 'grid-styled'
import { withFormik } from 'formik'
import Yup from 'yup'

// Import components
import ScForm from './styles'
import Select from '../../Select'
import Button from '../../Button'
import Input from '../../Input'

class Product extends PureComponent {
  constructor (props) {
    super(props)
    this.addProduct = this.addProduct.bind(this)
    this.state = {
      selection: {
        type: '',
        name: ''
      }
    }
  }

  addProduct (e) {
    e.preventDefault()
    const product = (this.state.selection.name && this.state.selection.type) ? this.state.selection : undefined
    if (product) {
      this.props.addProduct(product)
      this.resetForm()
    }
  }

  resetForm () {
    this.setState({
      selection: {
        name: '',
        type: ''
      }
    })
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

    const productAlias = this.state.selection ? this.state.selection.name : undefined
    const productType = this.state.selection ? this.state.selection.type : undefined

    return (
      <ScForm>
        <Select
          required
          value={productType || ''}
          options={productOptions}
          onChange={e => {
            const type = e.target ? e.target.value : ''
            this.setState({
              selection: {
                ...this.state.selection,
                type: type
              }
            })
          }}
        />
        <Input
          required
          error
          type='text'
          value={productAlias || ''}
          placeholder='Nickname for Product'
          onChange={e => {
            const name = e.target ? e.target.value : ''
            this.setState({
              selection: {
                ...this.state.selection,
                name: name
              }
            })
          }}
        />
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
