import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  `}
`
