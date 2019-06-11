import styled from 'styled-components'

import { Wrapper as Video } from '../../components/VideoTestimonial/styles'

export const Wrapper = styled.section`
    height: 100vh;
    background-color: var(--color-first);
    padding-left: var(--spacing-menu);
    padding-right: var(--spacing-page-menu);

    @media (max-width: 770px) {
        padding: var(--spacing-over-big) var(--spacing-medium) 0;
    }

    @media (max-height: 780px) {
        padding-top: var(--spacing-over-big);
        height: auto;
    }
`

export const Testimonials = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: var(--spacing-big);

    & ${Video} {
        margin: 0 var(--spacing-small) var(--spacing-big);
    }

    @media (max-width: 770px) {
        padding: 0;
    }
`
