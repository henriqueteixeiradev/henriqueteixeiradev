import styled, { css, keyframes } from 'styled-components'

const animateDark = keyframes`
  0% {
    background: linear-gradient(311.47deg, #FFFFFF -10.26%, rgba(255, 255, 255, 0) 106.35%);
  } 100%{
    background: linear-gradient(
        311.47deg,
        #0095ff -10.26%,
        rgba(0, 149, 255, 0) 106.35%
      );
  }
`

const animateDarkAfter = keyframes`
  0% {
      transform: translateX(30px);
      box-shadow: 0px 0px 177px #000000, 0px 0px 96px #000000,
          0px 0px 14px #000000, 0px 0px 4px #000000;
  } 100%{
      transform: translateX(0);
      box-shadow: 0px 0px 177px #0095ff, 0px 0px 96px #0095ff,
          0px 0px 14px #0095ff, 0px 0px 4px #0095ff;
  }
`

const animateLight = keyframes`
  0% {
    background: linear-gradient(
        311.47deg,
        #0095ff -10.26%,
        rgba(0, 149, 255, 0) 106.35%
      );
  } 100%{

    background: linear-gradient(311.47deg, #FFFFFF -10.26%, rgba(255, 255, 255, 0) 106.35%);
  }
`

const animateLightAfter = keyframes`
  0% {
    transform: translateX(0);
      box-shadow: 0px 0px 177px #0095ff, 0px 0px 96px #0095ff,
          0px 0px 14px #0095ff, 0px 0px 4px #0095ff;
  } 100%{

          transform: translateX(30px);
      box-shadow: 0px 0px 177px #000000, 0px 0px 96px #000000,
          0px 0px 14px #000000, 0px 0px 4px #000000;
  }
`

export const LogoWrapper = styled.div`
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
export const IconsWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: 0.8;
        transform: translateY(-2px);
      }

      img {
        width: auto;
        height: 28px;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const DarkButton = styled.button`
  width: 68px;
  height: 37px;

  padding: 6px;

  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;

  animation: ${animateDark} 1s ease-in-out forwards;

  cursor: pointer;

  &::after {
    content: '';
    width: 25px;
    height: 25px;
    background: #edeff0;
    border-radius: 76px;
    display: block;
    transform: translateX(0);

    animation: ${animateDarkAfter} 1s ease-in-out forwards;
  }
`
export const LightButton = styled.button`
  width: 68px;
  height: 37px;

  padding: 6px;

  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;

  animation: ${animateLight} 1s ease-in-out forwards;

  cursor: pointer;

  &::after {
    content: '';
    width: 25px;
    height: 25px;
    background: #edeff0;
    border-radius: 76px;
    display: block;
    transform: translateX(0);

    animation: ${animateLightAfter} 1s ease-in-out forwards;
  }
`
