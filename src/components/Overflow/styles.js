import styled from 'styled-components'

const ScOverflow = styled.div`
  ul {
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    overflow: hidden;
    padding: 10px;
    list-style-type: none;
    margin: 0 auto;
    align-items: center;
  }

  li {
    margin-left: 4px;
  }

  h2 {
    font-weight: 700;
  }

  .pill {
    border-radius: 4px;
    background-color: lightblue;
    padding: 4px;
    &:hover {

    }
  }

  .pill > span {
    white-space: nowrap;
    font-size: 10px;
    display: block;
  }

  .type-active {
    background-color: darkblue;
    color: white;
  }
`
export default ScOverflow
