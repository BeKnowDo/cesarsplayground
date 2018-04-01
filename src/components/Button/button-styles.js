import styled from 'styled-components'
import { colors, borders, padding } from '../../styles/variables'

const ScButton = styled.button`
 border: ${borders.grey};
 color: ${colors.white};
 padding: ${padding.button};
 background-color: ${colors.green};
 min-width: 80px;
`

export default ScButton
