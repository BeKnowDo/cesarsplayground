import React, { Component } from 'react'

// Import components
import Overflow from '../../components/Overflow'

class OverflowContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        { id: 123, value: '1000m @620', details: 'Order is active. Details: 10m @620', status: 'active' },
        { id: 456, value: '10m @630', details: 'Order is suspended. Details: 10m @630', status: 'suspended' },
        { id: 789, value: '10m @640', details: 'Order is filled. Details: 10m @640', status: 'filled' },
        { id: 987, value: '10m @650', details: 'Order is active. Details: 10m @650', status: 'active' },
        { id: 654, value: '10000m @660', details: 'Order is active. Details: 10m @660', status: 'active' },
        { id: 321, value: '1000m @670', details: 'Order is active. Details: 10m @670', status: 'active' },
        { id: 147, value: '10m @680', details: 'Order is active. Details: 10m @680', status: 'active' },
        { id: 852, value: '10m @690', details: 'Order is active. Details: 10m @690', status: 'active' }
      ]
    }
  }

  render () {
    return <Overflow orders={this.state.items} />
  }
}

export default OverflowContainer
