import styled from 'styled-components'

import TitleCollab from '../../objects/TitleCollab'
import SubtitleCollab from '../../objects/SubtitleCollab'

import LinkCollab from '../../objects/LinkCollab'

export const Actions = styled.nav`
    text-align: right;

    & > ${LinkCollab} {
        margin-right: var(--spacing-medium);
    }
`

export const Header = styled.header`
    height: 255px;
    background-color: var(--color-first);
    padding: var(--spacing-medium) var(--spacing-page-menu) 0 var(--spacing-big);
    padding-top: var(--spacing-medium);
    padding-right: var(--spacing-page-menu);

    & > ${TitleCollab} {
        margin-bottom: var(--spacing-small);
    }

    & > ${SubtitleCollab} {
        max-width: 370px;
    }
`
