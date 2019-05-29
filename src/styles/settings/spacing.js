import { createGlobalStyle } from 'styled-components'

const Spacing = createGlobalStyle`
    :root {
        --spacing-small: 1rem;
        --spacing-medium: 2rem;
        --spacing-big: 4rem;

        --spacing-menu: 80px;
        --spacing-active-menu: 340px;

        --spacing-page-menu: 10vw;
    }

    @media (max-height: 700px) {
        :root {
            --spacing-small: 0.5rem;
            --spacing-big: 2rem;
        }
    }
`

export default Spacing
