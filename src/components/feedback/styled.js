import styled from 'styled-components'
import astronaut from 'assets/background.jpg'

export const Container = styled.div`
  background-image: url(${astronaut});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #e5e5e5;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WrapperMessage = styled.div`
  display: flex;
  background-color: #fff;
  height: 200px;
  width: auto;
  border: 10px solid #000;
  border-radius: 20px;
`

export const Title = styled.h1`
  font-size: 160px;
  font-family: 'Catamaran', sans-serif;
  font-weight: 800;

  @media (max-width: 1080px) {
    display: flex;
    align-items: center;
    font-size: xxx-large;
  }

  @media (max-width: 540px) {
    font-size: xx-large;
  }
`

export const StyledImg = styled.img`
  @media (max-width: 540px) {
    height: 100px;
    width: 100px;
    margin: 30px 0;
  }
`

export const GenericMessage = styled.div`
  display: flex;
  height: 200px;
  width: auto;
`

export const GenericTitle = styled.h1`
  color: #000;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
  font-size: 60px;

  @media (max-width: 1080px) {
    display: flex;
    align-items: center;
    font-size: xxx-large;
  }

  @media (max-width: 540px) {
    font-size: xx-large;
  }
`
