import styled from 'styled-components'
import { colors, borders, padding } from '../../styles/'

const ScResults = styled.div`
  color: ${colors.grey};
  font-size: 12px;
  background-color: ${colors.tan};
  border: ${borders.grey};
  padding: ${padding.form};

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`

export default ScResults
