import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
    html, body {
        background-color: var(--color-third);
        font-size: var(--size-base);
        font-family: 'Roboto Slab', serif;
        color: var(--color-base);
    }

    input {
        font-family: inherit;
        font-size: inherit;
    }
`

export default Base
