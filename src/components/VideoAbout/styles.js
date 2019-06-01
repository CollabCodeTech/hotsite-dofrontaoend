import styled from 'styled-components'

import { Video } from '../../objects/VideoCollab/styles'
import SubtitleCollab from '../../objects/SubtitleCollab'
import TextCollab from '../../objects/TextCollab'

export const Wrapper = styled.div`
    & > ${Video} {
        margin-bottom: var(--spacing-big);
        margin-right: var(--spacing-page-menu);
    }

    & > ${SubtitleCollab} {
        margin-bottom: var(--spacing-medium);
    }

    & > ${TextCollab} {
        width: 528px;
    }
`
