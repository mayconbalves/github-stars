import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  height: 90%;
  width: 100%;
  background-color: rgba(256, 256, 256, 0.6);
`

export const Spin = styled.div`
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  &::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 10px #cfd0d1;
    border-bottom-color: #efae34;
    border-radius: 50%;
    content: '';
    height: 100px;
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }
`
