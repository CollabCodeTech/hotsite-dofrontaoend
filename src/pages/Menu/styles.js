import styled from 'styled-components'

import { Video } from '../../objects/VideoCollab/styles'
import TextCollab from '../../objects/TextCollab'

import { Header } from '../../components/HeaderContent/styles'
import { Wrapper as VideoWrapper } from '../../components/VideoAbout/styles'
import { List } from '../../components/ListContent/styles'

export const Section = styled.section`
    height: 100vh;
    background-color: var(--color-third);
    padding-left: var(--spacing-active-menu);
    transition: opacity 400ms linear;
    opacity: ${({ active }) => (active ? '1' : '0')};

    & > ${VideoWrapper} {
        float: right;
        transform: translateY(calc(var(--spacing-very-big) * -1));
    }

    & > ${List} {
        padding-top: var(--spacing-big);
        padding-left: var(--spacing-big);
    }

    @media (max-width: 1330px) {
        height: auto;

        & > ${VideoWrapper} {
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

            & > ${List} {
                display: inline-block;
                padding-left: 0;
                width: 528px;
                text-align: left;
            }
        }
    }
`
