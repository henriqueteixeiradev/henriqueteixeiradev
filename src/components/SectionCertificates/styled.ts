import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background-image: url('/img/bg_image.svg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    padding: ${theme.spacings.large} 0;

    @media (max-width: 768px) {
      margin-top: ${theme.spacings.xlarge};
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

    gap: ${theme.spacings.large};

    @media (max-width: 1200px) {
      padding: 0 ${theme.spacings.xsmall};
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `}
`
export const LeftWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 60%;

    gap: ${theme.spacings.xsmall};

    @media (max-width: 768px) {
      width: 100%;
      margin-top: initial;
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
  `}
`

export const CardsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    max-width: 1200px;
    gap: ${theme.spacings.small};
  `}
`
export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-content: center;
    justify-items: center;

    max-width: 350px;

    transition: all 2s ease-in-out;

    img {
      width: 100%;
      filter: grayscale(100%);

      border-radius: 8px;

      box-shadow: 0px 0px 20px 4px ${theme.colors.primary};

      &:hover {
        filter: grayscale(0);
      }

      @media (max-width: 768px) {
        filter: grayscale(0);
      }
    }
  `}
`
