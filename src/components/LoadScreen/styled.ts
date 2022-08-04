import styled, { css, keyframes } from 'styled-components'

const animeLoad = keyframes`
0% {
  transform: rotate(0deg);
  /* filter: hue-rotate(0deg); */
} 100% {
  transform: rotate(360deg);
  /* filter: hue-rotate(360deg); */
}
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #000000; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .load {
      position: relative;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(
        45deg,
        transparent,
        transparent 40%,
        ${theme.colors.primary}
      );
      animation: ${animeLoad} 2s linear infinite;

      &:before {
        content: '';
        position: absolute;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;
        background: #000000;
        border-radius: 50%;
        z-index: 1000;
      }

      &:after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: linear-gradient(
          45deg,
          transparent,
          transparent 40%,
          ${theme.colors.primary}
        );
        border-radius: 50%;
        z-index: 1000;
        z-index: 1;
        filter: blur(30px);
      }
    }
  `}
`
