import React, { Component, Fragment } from 'react'
import ScOverflow from './styles'
import OverflowMenu from '../../components/OverflowMenu'
import { ScOverflowIcon } from '../OverflowMenu/styles'
// Component
class Overflow extends Component {
  constructor (props) {
    super(props)
    this.calculations = this.calculations.bind(this)
    this.state = {
      hiddenItems: [],
      visibileItems: []
    }
  }

  pillItem (item) {
    return (
      <li
        key={item.id}
        {...item}
      >
        <div className={`pill type-${item.status}`}>
          <span title={`type-${item.value}`}>{`${item.value}`}</span>
        </div>
      </li>
    )
  }

  buildMoreIcon () {
    return (
      <ScOverflowIcon onClick={() => {
        this.setState({
          showOverflow: !this.state.showOverflow
        })
      }}>
        ...
      </ScOverflowIcon>
    )
  }

  buildPills () {
    const items = this.props.orders

    return (
      <ul
        ref={el => {
          this.parentElement = el
        }}
      >
        {items.map((item, index) => {
          return (
            <li
              key={item.id}
              index={index}
              {...item}
            >
              <div className={`pill type-${item.status}`}>
                <span title={`type-${item.value}`}>{`${item.value}`}</span>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  handleResize () {
    let timeout
    let delay = 250
    // window.resize event listener
    window.addEventListener('resize', () => {
      // clear the timeout
      clearTimeout(timeout)
      // start timing for event "completion"
      timeout = setTimeout(this.calculations, delay)
    })
  }

  calculations () {
    const parentRef = this.parentElement
    if (parentRef) {
      const parentBounds = parentRef.getBoundingClientRect().left + 18
      const children = parentRef.children
      const hiddenItems = []
      const visibleItems = []
      console.clear()

      // Loop through all pills
      for (let i = 0; i < children.length; i++) {
        const childBounds = children[i].getBoundingClientRect().left
        const status = children[i].attributes.status.value
        const value = children[i].attributes.value.value
        const details = children[i].attributes.details.value
        const id = children[i].attributes.id.value

        console.log({ childBounds, parentBounds })

        // loop to determine which items are "out of bounds"
        if (parentBounds >= childBounds) {
          hiddenItems.push({
            id: id,
            status: status,
            details: details,
            value: value
          })
        } else {
          visibleItems.push({
            id: id,
            status: status,
            details: details,
            value: value
          })
        }
      }

      this.setState({
        hiddenItems: hiddenItems,
        visibleItems: visibleItems
      })
    }
  }

  componentDidMount () {
    this.handleResize()
    this.calculations()
  }

  visibleItems () {
    const items = this.state.visibleItems
    if (items.length > 0) {
      return (
        <Fragment>
          <ul>
            {
              items.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    {...item}
                  >
                    <div className={`pill type-${item.status}`}>
                      <span title={`type-${item.value}`}>{`${item.value}`}</span>
                    </div>
                  </li>
                )
              })
            }

            {this.buildMoreIcon()}

          </ul>
        </Fragment>
      )
    }
  }

  render () {
    return <Fragment>
      <ScOverflow>
        {
          this.state.visibleItems
            ? this.visibleItems()
            : (this.buildPills())
        }

        <OverflowMenu show={this.state.showOverflow} items={this.state.hiddenItems} />
      </ScOverflow>
    </Fragment>
  }
}

export default Overflow
