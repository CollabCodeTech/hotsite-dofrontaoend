import styled from 'styled-components'

import { center } from '../../styles/tools/functions'

import InstructorAvatar from '../../objects/InstructorAvatar'
import TitleCollab from '../../objects/TitleCollab'
import TextCollab from '../../objects/TextCollab'

export const Wrapper = styled.div`
    ${center}
    flex-direction: column;

    & > ${TitleCollab}, & > ${InstructorAvatar} {
        margin-bottom: var(--size-small);
    }

    & > ${TextCollab} {
        width: 732px;
    }

    @media (max-width: 900px) {
        & > ${TextCollab} {
            width: auto;
            padding-left: var(--spacing-medium);
            padding-right: var(--spacing-medium);
        }
    }

    @media (max-width: 770px) {
        height: auto;
        padding: var(--spacing-over-big) 0 var(--spacing-very-big);
    }

    @media (max-height: 780px) {
        padding-top: var(--spacing-over-big);
        padding-bottom: var(--spacing-very-big);
        height: auto;
    }
`
