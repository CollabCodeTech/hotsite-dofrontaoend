import styled from 'styled-components'

import { Wrapper as Video } from '../../components/VideoTestimonial/styles'

export const Wrapper = styled.section`
    height: 100vh;
    background-color: var(--color-first);
    padding-left: var(--spacing-menu);
    padding-right: var(--spacing-page-menu);
`

export const Testimonials = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: var(--spacing-big);

    & ${Video} {
        margin-bottom: var(--spacing-big);
    }
`
