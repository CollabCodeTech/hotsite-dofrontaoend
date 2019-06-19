import styled, { css } from 'styled-components'

export const Navigation = styled.ol``

export const Item = styled.li`
    color: var(--color-second);
    font-weight: bold;
    font-size: var(--size-big);

    &:not(:last-child) {
        margin-bottom: var(--spacing-medium);
    }
`

export const Link = styled.a`
    display: block;
`

export const Number = styled.span`
    display: inline-block;
    width: 1.2ch;
    text-align: center;
`

export const Content = styled.strong`
    vertical-align: bottom;
    font-size: var(--size-half-big);
    position: relative;
    font-weight: normal;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--color-first);
        transform-origin: left;
        transform: scaleX(0) translateY(100%);
        transition: 200ms transform linear;
    }

    ${({ itemActive }) =>
        itemActive &&
        css`
            &::after {
                transform: scaleX(1) translateY(100%);
            }
        `}
`
