import React, { Component } from 'react'

// Component
class Overflow extends Component {
  constructor (props) {
    super(props)
    this.calculations = this.calculations.bind(this)
    this.state = {
      width: null
    }
  }

  buildPills (width) {
    const items = this.props.orders
    width = this.state.width

    return (
      <ul
        width={width}
        ref={el => {
          this.parentElement = el
        }}
      >
        {items.map((item, index) => {
          return (
            <li key={item.id} index={index}>
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
      // console.log(parentRef);
      const parentWidth = parentRef.clientWidth
      const parentBounds = parentRef.getBoundingClientRect()
      const children = parentRef.children
      const firstChildWidth = children[0].clientWidth

      const maxChildrenAllowed = Math.floor(parentWidth / firstChildWidth) - 1
      const tempWidth = parentWidth / firstChildWidth
      console.clear()
      for (let i = 0; i < children.length; i++) {
        console.log({
          x: children[i].getBoundingClientRect().x,
          y: children[i].getBoundingClientRect().y,
          left: children[i].getBoundingClientRect().left,
          right: children[i].getBoundingClientRect().right
        })
      }
      this.setState({
        width: parentWidth
      })

      console.log({
        parentBounds,
        x: parentBounds.x,
        y: parentBounds.y,
        left: parentBounds.left,
        right: parentBounds.right
      })

      // console.log({
      //   parentBounds,
      //   parentWidth,
      //   firstChildWidth,
      //   children,
      //   tempWidth,
      //   maxChildrenAllowed
      // });
    }
  }

  componentDidMount () {
    this.handleResize()
    this.calculations()
  }

  render () {
    return (
      <div className='pill-container'>
        <h4>PILL CONTAINER</h4>
        {this.buildPills(this.state.width)}
      </div>
    )
  }
}

export default Overflow
