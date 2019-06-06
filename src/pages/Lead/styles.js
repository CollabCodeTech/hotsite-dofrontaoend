import styled from 'styled-components'

import { center } from '../../styles/tools/functions'

import SubtitleCollab from '../../objects/SubtitleCollab'
import VideoDofrontaoend from '../../components/VideoDofrontaoend'
import { Form } from '../../components/FormLead/styles'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    min-width: 545px;

    & > ${SubtitleCollab} {
        width: 500px;
        text-align: center;
        color: var(--color-zero);
    }

    & > ${SubtitleCollab}, & > ${VideoDofrontaoend} {
        margin-bottom: var(--spacing-big);
    }

    & > ${Form} {
        min-width: 545px;
    }
`

export const Wrapper = styled.div`
    ${center}
`
