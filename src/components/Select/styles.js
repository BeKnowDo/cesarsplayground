import styled from 'styled-components'
import { colors, borders } from '../../styles'

export const ScSelect = styled.select`
  border: ${borders.grey};
  border-radius: 4px;
  overflow: hidden;
  color: ${colors.grey};
  width: 100%;

  &:focus {
    outline: none;
    border: ${borders.focus};
  }
`
