import styled from 'styled-components'
import { colors, borders } from '../../styles/'

export const ScResults = styled.div`
  color: ${colors.grey};
  font-size: 14px;
  margin: 10px;
  box-sizing: content-box;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    border: ${borders.grey};
  }

  th {
    padding: 10px;
  }

  tbody {
    tr {
      &:hover {
          color: ${colors.white};
          background-color: ${colors.grey};

          a {
            color: ${colors.white};
            &:visited {
              color: ${colors.white};
            }
          }
      }
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a{
    display: block;
    padding: 10px;
    transition: color .2s ease-in;
    color: ${colors.black};
    &:hover {
      color: ${colors.white};
      transition: color .2s ease-out;
    }
    &:visited {
      color: ${colors.grey};
    }
  }
`

export const ScResultsHeader = styled.h2`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`
