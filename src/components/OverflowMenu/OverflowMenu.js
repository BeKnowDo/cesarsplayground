import React from 'react'
import {ScOverflowMenu} from './styles'

const OverflowMenu = props => {
  return (
    <ScOverflowMenu {...props}>
      {
        props.items.map((item, index) => {
          return (
            <div key={item.id} index={index}>
              <div className={`overflow-item overflow-type-${item.status}`}>
                <span title={`type-${item.value}`}>{`${item.value}`}</span>
              </div>
            </div>
          )
        })
      }
    </ScOverflowMenu>
  )
}

export default OverflowMenu
