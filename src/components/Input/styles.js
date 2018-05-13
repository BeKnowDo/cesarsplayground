import styled from 'styled-components'
import {colors, borders, padding} from '../../styles/variables'

const ScInput = styled.input`
  border: ${borders.grey};
  ${props => props.error ? `${borders.error}` : null};
  border-radius: 4px;
  color: ${colors.black};
  padding: ${padding.inputs};
  box-sizing: border-box;
  width: 100%;
  transition: border .2s ease-in;
  
  &:focus {
    outline: none;
    border: ${borders.focus};
    transition: border .2s ease-out;
  }
`

export default ScInput
