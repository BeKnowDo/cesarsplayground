import styled from 'styled-components'
import {colors, borders, padding} from '../../styles/variables'

const ScInput = styled.input`
  border: ${borders.grey};
  border-radius: 4px;
  color: ${colors.black};
  padding: ${padding.inputs};
  width: 100%;
  box-sizing: border-box;
  transition: border .2s ease-in;
  
  &:focus {
    outline: none;
    border: ${borders.focus};
    transition: border .2s ease-out;
  }
`

export default ScInput
