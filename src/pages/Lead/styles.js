import styled from 'styled-components'

import { center } from '../../styles/tools/functions'

import SubtitleCollab from '../../objects/SubtitleCollab'

import VideoDofrontaoend from '../../components/VideoDofrontaoend'
import { Form } from '../../components/FormLead/styles'
import { Title } from '../../components/TitleDofrontaoend/styles'

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

    @media (max-width: 600px) {
        box-sizing: border-box;
        padding-left: var(--spacing-medium);
        padding-right: var(--spacing-medium);
        min-width: auto;
        width: 100%;

        & > ${Title} {
            font-size: 40px;
        }

        & > ${SubtitleCollab} {
            width: 100%;
            font-size: 16px;
        }

        & > ${Form} {
            min-width: auto;
        }
    }

    @media (max-width: 430px) {
        & > ${Title} {
            font-size: 35px;
        }
    }

    @media (max-width: 380px) {
        & > ${Title} {
            font-size: 30px;
        }
    }

    @media (max-width: 330px) {
        & > ${Title} {
            font-size: 26px;
        }
    }
`

export const Wrapper = styled.div`
    ${center}

    @media (max-width: 770px) {
        box-sizing: border-box;
        padding-top: 70px
        padding-left: 0;
    }
`
