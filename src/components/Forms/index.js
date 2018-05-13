import styled from 'styled-components'
import { borders } from '../../styles/variables'

const ScForm = styled.form`
  padding: 10px;
  border-radius: 4px;
  border: ${borders.white};
  > div {
    display: flex;
  }
`
export default ScForm
