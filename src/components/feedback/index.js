import React from 'react'
import {
  Container,
  Title,
  WrapperMessage,
  StyledImg,
  GenericMessage,
  GenericTitle
} from './styled'
import notFound from 'assets/not_found.png'

const Feedback = ({ message }) => {
  return (
    <Container>
      {message === 'Not Found' ? (
        <WrapperMessage>
          <StyledImg src={notFound} alt={message} />
          <Title>{message}</Title>
        </WrapperMessage>
      ) : (
        <GenericMessage>
          <GenericTitle>{message}</GenericTitle>
        </GenericMessage>
      )}
    </Container>
  )
}

export default Feedback
