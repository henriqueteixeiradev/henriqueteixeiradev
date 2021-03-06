import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    height: 100px;

    margin: 0 auto;

    > svg {
      width: 190px;
      height: auto;
      padding: ${theme.spacings.small};
      fill: ${theme.colors.tertiary};

      @media (max-width: 525px) {
        width: 150px;
      }
    }

    @media (max-width: 1200px) {
      padding: 0 ${theme.spacings.xsmall};
    }
  `}
`
