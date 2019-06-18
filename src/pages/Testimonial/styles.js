import styled from 'styled-components'

import { Wrapper as Video } from '../../components/VideoTestimonial/styles'

export const Wrapper = styled.section`
    box-sizing: border-box;
    height: 100vh;
    background-color: var(--color-first);
    padding: var(--spacing-big) var(--spacing-page-menu) 0 var(--spacing-menu);

    @media (max-width: 770px) {
        height: auto;
        padding: var(--spacing-very-big) var(--spacing-medium) 0;
    }

    @media (max-height: 780px) {
        height: auto;
    }
`

export const Testimonials = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: var(--spacing-big);

    & ${Video} {
        margin: 0 var(--spacing-small) var(--spacing-big);
    }

    @media (max-width: 770px) {
        padding: 0;
        justify-content: space-around;
    }
`
