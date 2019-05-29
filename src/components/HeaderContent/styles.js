import styled from 'styled-components'

import TitleCollab from '../../objects/TitleCollab'

export const Header = styled.header`
    height: 255px;
    background-color: var(--color-first);

    & > ${TitleCollab} {
        margin-bottom: var(--spacing-small);
    }
`
