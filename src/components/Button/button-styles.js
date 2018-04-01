import styled from 'styled-components'
import { colors, borders, padding } from '../../styles/variables'

const ScButton = styled.button`
  border-radius: 4px;
  border: ${borders.grey};
  color: ${colors.white};
  padding: ${padding.button};
  transition: background-color .2s ease-in , color .2s ease-in;
  background-color: ${colors.green};
  width: 100%;
  margin-top: 20px;
  
  &:hover {
    cursor: pointer;
    transition: background-color .2s ease-out, color .2s ease-out;
    background-color: ${colors.lime};
  }

  &:focus {
    outline: none;
  }
`

export default ScButton
