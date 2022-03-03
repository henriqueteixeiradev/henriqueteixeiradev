import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
  `}
`

export const CardWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 140px;

    padding: ${theme.spacings.small};

    background: linear-gradient(
      225.05deg,
      rgba(0, 149, 255, 0.2) 0%,
      rgba(0, 149, 255, 0) 100%
    );

    border-radius: 4px;

    border: 1px solid;

    border-image: linear-gradient(
      243.46deg,
      ${theme.colors.primary} 16.66%,
      rgba(0, 149, 255, 0) 83.34%
    );

    border-image-slice: 1;

    margin-bottom: calc(${theme.spacings.xxlarge} + ${theme.spacings.large});

    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: calc(
        ${theme.spacings.xxlarge} + ${theme.spacings.xxlarge}
      );
    }

    small {
      font-size: ${theme.font.sizes.xxsmall};
      opacity: 0.6;
      width: 40%;

      @media (max-width: 1200px) {
        width: 100%;
      }

      a {
        color: ${theme.colors.tertiary};
        cursor: pointer;
      }
    }

    img {
      max-width: 700px;
      height: auto;
      transform: translateY(-80px);

      @media (max-width: 1200px) {
        max-width: 500px;
        transform: translateY(-40px);
      }

      @media (max-width: 768px) {
        transform: translateY(-50px);
      }

      @media (max-width: 525px) {
        max-width: 350px;
        transform: translateY(-20px);
      }
    }

    &:nth-child(2n + 0) {
      flex-direction: row-reverse;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  `}
`
