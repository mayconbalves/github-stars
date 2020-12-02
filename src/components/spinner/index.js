import React from 'react'
import { Spin, Container } from './styled'

const Spinner = () => {
  return (
    <Container data-testid="spinner">
      <Spin />
    </Container>
  )
}

export default Spinner
