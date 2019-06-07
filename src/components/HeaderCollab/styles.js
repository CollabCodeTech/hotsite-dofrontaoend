import styled from 'styled-components'

import { Figure } from '../../objects/LogoCollab/styles'
import CollabCode from '../../objects/CollabCode'
import { Navigation, Content } from '../NavigationCollab/styles'

export const Header = styled.header`
    box-sizing: border-box;
    background-color: var(--color-zero);
    overflow: hidden;
    padding: 20px 20px 0;
    width: ${({ active }) =>
        active ? 'var(--spacing-active-menu)' : 'var(--spacing-menu)'};
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    will-change: width;
    transition: width 300ms linear;
    cursor: pointer;

    &:hover {
        width: var(--spacing-active-menu);
    }

    & > ${Navigation} {
        padding-left: 11px;
        width: var(--spacing-active-menu);
    }

    & > ${Figure} {
        position: absolute;
        top: var(--spacing-medium);
        width: var(--spacing-active-menu);
    }

    & ${CollabCode}, & ${Content} {
        transition: opacity 100ms linear;
        opacity: ${({ active }) => (active ? 1 : 0)};
    }

    &:hover ${CollabCode}, &:hover ${Content} {
        transition-duration: 200ms;
        transition-delay: 150ms;
        opacity: 1;
    }

    @media (max-width: 770px) {
        width: 100vw;
        height: 70px;
        overflow: visible;
        transition: none;

        &:hover {
            width: 100vw;
        }

        &:hover > ${Navigation} {
            transform: translateX(0);
        }

        & > ${Navigation} {
            background-color: var(--color-zero);
            height: calc(100vh - 70px);
            width: 100vw;
            padding-top: var(--spacing-big);
            padding-left: var(--spacing-medium);
            position: fixed;
            top: 70px;
            left: 0;
            transform: translateX(100%);
            transition: transform 400ms linear;
        }

        & ${Content} {
            opacity: 1;
        }

        &:hover ${CollabCode}, & ${CollabCode} {
            opacity: 0;
        }
    }
`
