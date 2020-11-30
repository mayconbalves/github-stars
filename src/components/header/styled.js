import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  background-color: #000;
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  height: 50px;
  width: 100%;
`

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-column: col 2 / span 7;
`

export const StyledLogo = styled.img`
  width: 50px;
`

export const StyledLink = styled(Link)`
  align-self: center;
`

export const InputContainer = styled.div`
  align-self: center;
  grid-column: col 2 / span 11;
`

export const InputStyled = styled.input`
  float: left;
  height: 40px;
  width: 95%;
  padding: 10px;
  font-size: 18px;
  outline: none;
  border-width: 1px 0 1px 1px;

  @media (max-width: 980px) {
    font-size: 12px;
    width: 70%;
  }
`
export const SearchButton = styled.button`
  cursor: pointer;
  float: left;
  height: 40px;
  outline: none;
  width: 5%;

  @media (max-width: 980px) {
    width: 15%;
  }
`
