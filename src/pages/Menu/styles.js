import styled from 'styled-components'

import { Video } from '../../objects/VideoCollab/styles'
import TextCollab from '../../objects/TextCollab'

import { Header } from '../../components/HeaderContent/styles'
import { Wrapper as VideoWrapper } from '../../components/VideoAbout/styles'
import { List } from '../../components/ListContent/styles'

export const Wrapper = styled.div`
    padding-left: ${({ preloadActive }) =>
        preloadActive ? 'var(--spacing-active-menu)' : 'var(--spacing-medium)'};
`

export const Section = styled.section`
    box-sizing: border-box;
    position: ${({ active, preloadActive }) =>
        active || preloadActive ? 'static' : 'absolute'};
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    min-height: 900px;
    background-color: var(--color-third);
    will-change: padding-left;
    transition: opacity 400ms linear, padding-left 300ms linear;
    opacity: ${({ active, preloadActive }) =>
        active || preloadActive ? '1' : '0'};
    padding-left: ${({ activeMouseEnter }) =>
        activeMouseEnter
            ? 'var(--spacing-active-menu)'
            : 'var(--spacing-menu)'};

    & > ${Wrapper} {
        padding-left: var(--spacing-medium);
    }

    & ${VideoWrapper} {
        float: right;
        transform: translateY(calc(var(--spacing-very-big) * -1));
    }

    & ${List} {
        padding-top: var(--spacing-big);
        padding-left: var(--spacing-medium);
    }

    @media (max-width: 1330px) {
        height: auto;

        & ${VideoWrapper} {
            float: none;
            transform: translateY(calc(var(--spacing-big) * -1));
        }

        @media (max-width: 1330px) {
            text-align: center;

            & > ${Header} {
                text-align: left;
            }

            & ${Video} {
                margin-right: auto;
                display: inline-block;
            }

            & ${TextCollab} {
                display: inline-block;
            }

            & ${List} {
                display: inline-block;
                padding-left: 0;
                width: 528px;
                text-align: left;
            }
        }
    }

    @media (max-width: 1140px) {
        padding-left: var(--spacing-menu);

        & > ${Wrapper} {
            padding-left: var(--spacing-menu);
        }
    }

    @media (max-width: 770px) {
        padding-left: 0;
        padding-bottom: var(--spacing-very-big);
        text-align: left;

        & > ${Wrapper}, & > ${Header} {
            padding-left: var(--spacing-medium);
            padding-right: var(--spacing-medium);
        }

        & ${VideoWrapper} {
            transform: none;
            margin-bottom: var(--spacing-medium);
        }

        & ${Video} {
            display: none;
        }

        & ${TextCollab} {
            width: auto;
        }
    }
`
