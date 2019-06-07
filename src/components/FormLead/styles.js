import styled from 'styled-components'

import TextCollab from '../../objects/TextCollab'
import InputCollab from '../../objects/InputCollab'

import BtnCollab from '../BtnCollab'

export const Form = styled.form`
    position: relative;

    & > ${TextCollab} {
        margin-bottom: var(--spacing-small);
        color: var(--color-zero);
    }

    & > ${InputCollab} {
        margin-right: var(--spacing-small);
    }

    & > ${BtnCollab} {
        position: absolute;
        right: 0;
        bottom: 0;
    }

    @media (max-width: 600px) {
        & > ${InputCollab} {
            display: block;
            width: 100%;
            text-align: center;
            margin-bottom: var(--spacing-small);
        }

        & > ${BtnCollab} {
            position: static;
            width: 100%;
        }
    }
`
