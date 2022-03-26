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
  `}
`
export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: ${theme.spacings.xsmall};

    h2 {
      font-size: ${theme.font.sizes.xlarge};

      @media (max-width: 768px) {
        font-size: ${theme.font.sizes.large};
      }

      &::after {
        content: '';
        background: ${theme.colors.tertiary};
        width: 50px;
        height: 3px;
        display: block;
        box-shadow: 0px 0px 177px 4px ${theme.colors.primary},
          0px 0px 96px 18px ${theme.colors.secondary},
          0px 0px 14px 1px ${theme.colors.primary},
          0px 0px 4px 1px ${theme.colors.secondary};
        border-radius: 8px;
      }
    }
  `}
`
