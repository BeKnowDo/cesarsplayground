import styled from 'styled-components'
import { borders, colors, shadows } from '../../styles'

const ScOverflowIcon = styled.span`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

const ScOverflowMenu = styled.div`
  text-align: right;
  font-weight: 700;
  overflow: visible;
  list-style-type: none;
  margin: 0;
  padding: 5px 10px;
  border: ${borders.grey};
  display: inline-block;
  ${borders.radius};
  font-size: 12px;
  position: absolute;
  background-color: ${colors.white};
  box-shadow: ${shadows.grey};
  display: ${props => (props.show ? `block` : 'none')};
  &.show {
    display: block;
  }

  > div {
    margin: 0;
    padding: 5px 0;
    &:hover {
      cursor: pointer;
    }
  }
`

export { ScOverflowMenu, ScOverflowIcon }
