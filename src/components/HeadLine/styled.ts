import styled, { css, keyframes } from 'styled-components'

const AnimateLetter = keyframes`


    0%,5%,10.1%,15.1%,25.1%,45%,70.1%,90%,100%
      {
        opacity: 0.6;
      }
      5.1%,10%,15.2%,25%,45.1%,70%,90.1%,95%
      
      {
        opacity: 1;
        text-shadow:  0 0 10px,
                      0 0 40px,
                      0 0 80px,
                      0 0 160px;
      }
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background-image: url('/img/bg_image.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    position: relative;

    @media (max-width: 600px) {
      padding: 0 ${theme.spacings.xsmall};
    }

    h1 {
      position: absolute;
      top: 60px;
      font-size: ${theme.font.sizes.medium};

      background-image: linear-gradient(
        179.27deg,
        rgba(0, 149, 255, 0) 0.63%,
        ${theme.colors.primary} 50%,
        rgba(0, 149, 255, 0) 99.37%
      );

      background-repeat: no-repeat;
      background-size: 100% 0.4em;
      background-position: 0px 88%;

      @media (max-width: 768px) {
        top: 20px;
      }
    }

    table tbody {
      display: flex;
      justify-content: center;
      gap: ${theme.spacings.xxsmall};

      width: 100%;
      height: 350px;

      @media (max-width: 768px) {
        padding: 0 ${theme.spacings.xsmall};
        height: 180px;
      }

      tr {
        width: 72px;
        height: 100%;
        border: 1px solid;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        border-image: linear-gradient(
          179.27deg,
          rgba(0, 149, 255, 0) 0.63%,
          ${theme.colors.primary} 50%,
          rgba(0, 149, 255, 0) 99.37%
        );

        border-image-slice: 1;

        @media (max-width: 768px) {
          width: 40px;
        }

        @media (max-width: 525px) {
          width: 30px;
        }

        td {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 44px;
            height: 44px;

            @media (max-width: 768px) {
              width: 24px;
              height: 24px;
            }
          }
        }

        td.letter {
          width: 100%;
          border: 1px solid;

          margin: ${theme.spacings.xsmall} 0;

          border-image: linear-gradient(
            243.46deg,
            ${theme.colors.secondary} 16.66%,
            ${theme.colors.primary} 83.34%
          );

          border-image-slice: 1;

          span {
            animation: ${AnimateLetter} 5s linear infinite;
            font-size: ${theme.font.sizes.xxlarge};
            opacity: 0.6;
            color: ${theme.colors.tertiary};

            text-shadow: 0 0 0 ${theme.colors.tertiary};

            @media (max-width: 768px) {
              font-size: ${theme.font.sizes.medium};
            }
          }
        }

        tr.letter {
          width: 100%;
          border: 1px solid;

          margin: ${theme.spacings.xsmall} 0;

          border-image: linear-gradient(
            243.46deg,
            ${theme.colors.secondary} 16.66%,
            ${theme.colors.primary} 83.34%
          );

          border-image-slice: 1;
        }
      }
    }
  `}
`
