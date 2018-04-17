import styled from 'styled-components'
import { colors } from '../../styles'

export const ScNav = styled.nav`
  margin: 0;
  padding: 10px;
  background-color: ${colors.blue};
  color: ${colors.white};
  ul {
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    padding: 0;
  }
  a {
    display: block;
    padding: 8px 14px;
    text-decoration: none;
    color: ${colors.white};

    &:visited {
      color: rgba(255, 255, 255, .8);
    }
  }
`
