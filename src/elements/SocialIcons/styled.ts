import styled, { css } from 'styled-components'

export const SocialIconsWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};

    & > li a {
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
