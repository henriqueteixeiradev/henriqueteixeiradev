import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 2300px;

    @media (max-width: 768px) {
      height: 45rem;
    }
  `}
`
export const Content = styled.div`
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
