import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background-image: url('/img/bg_image.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    padding: ${theme.spacings.large} 0;

    margin-top: ${theme.spacings.xlarge};

    @media (max-width: 525px) {
      margin-top: initial;
    }
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    gap: ${theme.spacings.xsmall};

    @media (max-width: 1200px) {
      padding: 0 ${theme.spacings.xsmall};
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    svg {
      width: 120px;
      height: auto;
      fill: ${theme.colors.tertiary};
    }

    span {
      font-size: ${theme.spacings.xxsmall};
    }
  `}
`

export const IconsWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};

    img {
      width: auto;
      height: 28px;
    }
  `}
`
