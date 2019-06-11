import styled from 'styled-components'

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
    padding: var(--spacing-medium) 0 0 var(--spacing-big);

    & > ${TitleCollab} {
        margin-bottom: var(--spacing-small);
    }

    & > ${SubtitleCollab} {
        max-width: 370px;
    }

    @media (max-width: 770px) {
        padding: 0;
    }
`
