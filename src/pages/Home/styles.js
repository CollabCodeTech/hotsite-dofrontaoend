import styled from 'styled-components'

import { Section as Menu } from '../Menu/styles'

export const Main = styled.main`
    position: relative;
    overflow: hidden;
`

export const Wrapper = styled.div`
    & > ${Menu} {
        box-sizing: border-box;
        position: absolute;
        width: 100vw;
        padding-left: var(--spacing-active-menu);
    }
`
