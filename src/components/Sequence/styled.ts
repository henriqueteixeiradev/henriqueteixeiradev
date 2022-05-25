import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 2300px;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-height: 100vh;
    padding-top: 120vh;
    position: sticky;
    top: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;
  `}
`
export const ContentFixed = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-height: 100vh;
    padding-top: 120vh;
    position: sticky;
    top: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;
  `}
`
