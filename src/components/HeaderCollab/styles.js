import styled from 'styled-components'

import { Figure } from '../../objects/LogoCollab/styles'
import CollabCode from '../../objects/CollabCode'
import { Navigation, Content } from '../NavigationCollab/styles'
import BtnCollab from '../BtnCollab'
import { Menu } from '../IconMenu/styles'

export const Header = styled.header`
    box-sizing: border-box;
    background-color: var(--color-zero);
    overflow: hidden;
    padding: var(--spacing-medium) var(--spacing-medium) 0;
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

    & > ${BtnCollab}, & > ${Menu} {
        display: none;
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
        height: 82px;
        overflow: visible;
        transition: none;
        flex-direction: row;

        &:hover {
            width: 100vw;
        }

        & > ${Figure} {
            position: static;
        }

        & ${CollabCode} {
            display: none;
        }

        & > ${BtnCollab}, & > ${Menu} {
            display: block;
            flex-shrink: 0;
        }

        & > ${BtnCollab} {
            height: 42px;
            margin-right: var(--spacing-medium);
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
            transform: ${({ menuActive }) =>
                menuActive ? 'translateX(0)' : 'translateX(100%)'};
            transition: transform 400ms linear;
        }

        & ${Content} {
            opacity: 1;
        }

        &:hover ${CollabCode}, & ${CollabCode} {
            opacity: 0;
        }
    }

    @media (max-width: 350px) {
        & > ${BtnCollab} {
            background-color: var(--color-zero);
            color: var(--color-first);
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100vw;
            height: 50px;
            border-radius: 0;
            box-shadow: 0 -4px 2px var(--color-negative-light);
        }
        & > ${BtnCollab}:hover {
            transform: none;
        }
    }
`
