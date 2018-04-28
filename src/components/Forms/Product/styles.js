import styled, { keyframes } from 'styled-components'
import { padding } from '../../../styles'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const ScForm = styled.form`
  padding: ${padding.form};
  animation: ${fadeIn} .5s linear;
  select, input {
    margin-bottom: 16px;
  }
`
export default ScForm
