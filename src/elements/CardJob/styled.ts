import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15rem;
    width: 100%;

    @media (max-width: 640px) {
      gap: 0rem;
    }
  `}
`

export const CardWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 15rem;

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

    @media (max-width: 525px) {
      flex-direction: column;
      margin-bottom: ${theme.spacings.xxlarge};
    }

    small {
      font-size: ${theme.font.sizes.xxsmall};
      opacity: 0.6;
      width: 100%;

      @media (max-width: 1200px) {
        width: 100%;
      }

      & > ul {
        display: flex;
        flex-direction: column;

        margin-top: ${theme.spacings.xsmall};

        gap: ${theme.spacings.small};
        margin-top: 5rem;

        a {
          color: ${theme.colors.tertiary};
          cursor: pointer;
        }
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

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 700px;
    height: auto;
    transform: translateY(-80px);

    @media (max-width: 1200px) {
      max-width: 500px;
      transform: translateY(-40px);
    }

    @media (max-width: 768px) {
      transform: translate(80px, -80px);
    }

    @media (max-width: 525px) {
      max-width: 250px;
      transform: translate(80px, -80px);
    }

    @media (max-width: 525px) {
      max-width: 150px;
    }
  `}
`
