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
        max-width: 40%;
    }

    @media (max-height: 780px) {
        height: auto;
    }
`
