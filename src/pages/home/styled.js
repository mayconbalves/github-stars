import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 25px;
`
