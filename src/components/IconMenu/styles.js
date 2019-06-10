import styled from 'styled-components'

export const Menu = styled.a`
    display: block;
    height: 42px;
    width: 40px;
    position: relative;
`

export const Draw = styled.span`
    display: block;
    height: 7px;
    width: 100%;
    border-radius: 3.5px;
    background-color: var(--color-base);

    &:before,
    &:after {
        content: '';
        position: absolute;
        height: 7px;
        width: 100%;
        border-radius: 3.5px;
        background-color: var(--color-base);
    }

    &:before {
        top: 50%;
        transform: translateY(-50%);
    }

    &:after {
        bottom: 0;
    }
`
