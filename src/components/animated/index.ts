import { keyframes } from 'styled-components'

export const animateSquareOne = keyframes`
  0% {
    transform: rotateZ(-5deg);

  }50% {
    transform: rotateZ(10deg);

  } 75% {
    transform: rotateZ(-4deg);

  } 100% {
    transform: rotateZ(10deg);
  }
`

export const animateSquareTwo = keyframes`
  0% {
    transform: scale(0.9);

  }50% {
    transform: scale(0.8);

  } 100% {
    transform: scale(0.9);
  }
`

export const circuit = keyframes`
      0%,5%,10.1%,25.1%,75.1%,98.1%
      {
        opacity: 1;
      }
      99.1%
      {
        opacity: 0.6;
      }
      100%
      {
        opacity: 1;
      }
`
