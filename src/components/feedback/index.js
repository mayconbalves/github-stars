import React from 'react'
import { string } from 'prop-types'
import * as S from './styled'
import notFound from 'assets/not_found.png'

const Feedback = ({ message }) => {
  return (
    <S.Container>
      {message === 'Not Found' ? (
        <S.Message>
          <S.Img src={notFound} alt={message} />
          <S.Title>{message}</S.Title>
        </S.Message>
      ) : (
        <S.GenericMessage>
          <S.GenericTitle>{message}</S.GenericTitle>
        </S.GenericMessage>
      )}
    </S.Container>
  )
}

Feedback.propTypes = {
  message: string.isRequired
}

export default Feedback
