import styled, { css } from 'styled-components'
import { animateSquareOne, animateSquareTwo, circuit } from 'components/animated'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background-image: url('/img/bg_image.svg');
    background-repeat: no-repeat;
    background-position: right;
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
export const LeftWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 60%;

    margin-top: ${theme.spacings.large};

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
        box-shadow: 0px 0px 177px 4px ${theme.colors.secondary},
          0px 0px 96px 18px ${theme.colors.primary},
          0px 0px 14px 1px ${theme.colors.secondary},
          0px 0px 4px 1px ${theme.colors.primary};
        border-radius: ${theme.border.radius};
        animation: ${circuit} 8s linear infinite;
      }
    }

    p {
      font-size: ${theme.font.sizes.xxsmall};
      opacity: 0.6;
    }
  `}
`
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50%;

    & > svg #squareOne {
      animation: ${animateSquareOne} 5s alternate-reverse infinite;
    }

    & > svg #squareTwo {
      animation: ${animateSquareTwo} 5s alternate-reverse infinite;
    }

    img {
      width: 128px;
      height: auto;
    }

    p {
      font-size: ${theme.font.sizes.xxsmall};
      opacity: 0.6;
      margin-left: 15%;
      transform: translateY(-5px);

      @media (max-width: 1100px) {
        margin-left: 20%;
      }

      @media (max-width: 768px) {
        margin-left: 15%;
      }

      @media (max-width: 525px) {
        margin-left: 25%;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: ${theme.spacings.large};
    }
  `}
`
