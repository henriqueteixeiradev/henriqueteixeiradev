import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    @media (max-width: 1500px) {
      height: 80vh;
    }
    @media (max-width: 1300px) {
      height: 70vh;
    }
    @media (max-width: 1000px) {
      height: 50vh;
    }
    @media (max-width: 525px) {
      height: 20vh;
    }
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    video {
      position: absolute;
      top: 0;
      z-index: -1;
      width: 99.8%;
    }
  `}
`
