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
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      padding: 0 ${theme.spacings.xsmall};
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `}
`
export const TechnologiesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 60%;

    gap: ${theme.spacings.xsmall};

    @media (max-width: 768px) {
      width: 100%;
    }

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

    p {
      font-size: ${theme.font.sizes.xxsmall};
      opacity: 0.6;

      cite {
        background-image: linear-gradient(
          120deg,
          ${theme.colors.secondary},
          ${theme.colors.primary}
        );
        background-repeat: no-repeat;
        background-size: 100% 0.4em;
        background-position: 0px 88%;
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));

      li {
        display: flex;
        align-items: center;
        font-size: ${theme.font.sizes.xxsmall};

        img {
          width: 56px;
        }
      }
    }
  `}
`
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: ${theme.spacings.large};
    }

    img {
      width: auto;
      height: 380px;
    }
  `}
`
