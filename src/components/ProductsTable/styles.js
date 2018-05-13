import styled from 'styled-components'
import { colors, borders, padding } from '../../styles'

const ScTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  border: ${borders.grey};
  font-size: 12px;
  width: 100%;
  padding: ${padding.table.padding};
  thead {
    th {
      background-color: ${colors.lightBlue};
      color: ${colors.white};
      padding: ${padding.table.th};
    }
  }
  td {
    padding: ${padding.table.td};
  }
  tbody {
    tr {
      background-color: ${colors.white};
      transition: background-color .2s ease-in-out;
      &:hover {
        background-color: ${colors.greyLight};
        color: ${colors.white};
        transition: background-color .2s ease-in-out;
      }
    }
  }
`

export default ScTable
