import React, { useState } from 'react'
import logo from 'assets/logo.png'
import searchIcon from 'assets/ic_search.png'
import { useDispatch } from 'react-redux'
import * as S from './styled'

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
    <S.Container as="header">
      <S.SearchContainer>
        <S.StyledLink to="/">
          <S.StyledLogo src={logo} alt="github" />
        </S.StyledLink>
        <S.InputContainer>
          <S.InputStyled
            name="userName"
            type="text"
            value={values.userName}
            onChange={inputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search User"
          />
          <S.SearchButton type="button" onClick={submitForm}>
            <img src={searchIcon} alt="search icon" />
          </S.SearchButton>
        </S.InputContainer>
      </S.SearchContainer>
    </S.Container>
  )
}

export default Header
