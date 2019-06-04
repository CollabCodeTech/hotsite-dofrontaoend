import styled from 'styled-components'

export const Wrapper = styled.article`
    width: 280px;
    border-radius: var(--radius-small);
    overflow: hidden;
`

export const Video = styled.div`
    background-color: var(--color-second);
    width: 100%;
    height: 180px;
`

export const Caption = styled.p`
    background-color: var(--color-third);
    box-sizing: border-box;
    padding-left: var(--spacing-medium);
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    font-size: var(--size-medium);
`
