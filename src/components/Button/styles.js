import styled from 'styled-components'
import { colors, borders, padding } from '../../styles/variables'

const ScButton = styled.button`
  border-radius: 4px;
  border: ${borders.grey};
  color: ${colors.white};
  padding: ${props => props.padding ? `${props.padding}` : `${padding.button}`};
  transition: background-color .2s ease-in , color .2s ease-in;

  background-color: ${props => props.continue ? `${colors.blue}` : `${colors.greyLight}`};
  width: 100%;

  &:hover {
    cursor: pointer;
    transition: background-color .2s ease-out, color .2s ease-out;
    background-color: ${props => props.continue ? `${colors.lightBlue}` : `${colors.black}`};
    border: ${borders.focus};
    color: ${colors.white};
  }
  &[disabled] {
    cursor: not-allowed;
  }

  ${props => props.negative ? `
    background-color: ${colors.red};
    color: ${colors.white};
  `
    : null
}
  ${props => props.continue ? `
    background-color: ${colors.green};
    color: ${colors.black};
  `
    : null
}

  ${props => props.addProduct ? `
    background-color: ${colors.blue};
    color: ${colors.white};
  `
    : null
}

  &:focus {
    outline: none;
  }
`

export default ScButton
