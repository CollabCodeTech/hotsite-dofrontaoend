import styled, { css } from 'styled-components'

import TitleCollab from '../../objects/TitleCollab'
import SubtitleCollab from '../../objects/SubtitleCollab'
import LinkCollab from '../../objects/LinkCollab'

import BtnCollab from '../BtnCollab'

export const Actions = styled.nav`
    text-align: right;

    & > ${LinkCollab} {
        margin-right: var(--spacing-medium);
    }

    @media (max-width: 930px) {
        & > ${LinkCollab} {
            display: none;
        }
    }

    @media (max-width: 770px) {
        & > ${BtnCollab} {
            display: none;
        }
    }
`

export const Header = styled.header`
    height: 255px;
    background-color: var(--color-first);
    padding: var(--spacing-medium) 0 0
        calc(
            var(--spacing-big) +
                ${({ active }) =>
                    active ? 'var(--spacing-active-menu)' : '0px'}
        );

    ${({ menu }) => menu && 'padding-right: var(--spacing-page-menu)'};

    & > ${TitleCollab} {
        margin-bottom: var(--spacing-small);
    }

    & > ${SubtitleCollab} {
        max-width: 370px;
    }

    @media (max-width: 770px) {
        padding: ${({ testimonial }) =>
                testimonial && 'var(--spacing-over-big)'}
            0 var(--spacing-big);
        height: auto;
        margin-bottom: var(--spacing-big);
        ${({ mobile }) =>
            mobile &&
            css`
                padding-left: var(--spacing-medium);
                padding-right: var(--spacing-medium);
            `};
    }
`
