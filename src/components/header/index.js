import React, { useState } from 'react'
import logo from 'assets/logo.png'
import searchIcon from 'assets/ic_search.png'
import { useDispatch } from 'react-redux'
import {
  Container,
  SearchContainer,
  StyledLogo,
  InputContainer,
  InputStyled,
  SearchButton,
  StyledLink
} from './styled'

const Header = ({ handleRepositories }) => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({ userName: '' })

  const inputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleKeyDown = (e) => {
    const { name, value } = e.target

    if (e.key === 'Enter') {
      setValues({ ...values, [name]: value })
      dispatch(handleRepositories(values.userName))
      setValues({ userName: '' })
    }
  }

  const submitForm = () => {
    const { userName } = values
    dispatch(handleRepositories(userName))
    setValues({ userName: '' })
  }

  return (
    <Container as="header">
      <SearchContainer>
        <StyledLink to="/">
          <StyledLogo src={logo} alt="github" />
        </StyledLink>
        <InputContainer>
          <InputStyled
            name="userName"
            type="text"
            value={values.userName}
            onChange={inputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search User"
          />
          <SearchButton type="button" onClick={() => submitForm()}>
            <img src={searchIcon} alt="search icon" />
          </SearchButton>
        </InputContainer>
      </SearchContainer>
    </Container>
  )
}

export default Header
