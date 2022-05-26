import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
  `}
`

export const ImageByImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 2200px;
    justify-content: center;

    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const ImageByImage = styled.div`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: column;
    max-height: 100vh;
    position: sticky;
    top: 0;

    & > img {
      width: 100%;
    }
  `}
`
export const FixedImage = styled.div`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    flex-direction: column;
    max-height: 100vh;
    position: sticky;
    top: 0;

    & > img {
      width: 100%;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  `}
`
