import styled from 'styled-components'
import { colors, borders } from '../../styles'

const ScSelect = styled.select`
  border: ${borders.grey};
  border-radius: 4px;
  overflow: hidden;
  color: ${colors.grey};
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
    border: ${borders.focus};
  }
`
export default ScSelect
