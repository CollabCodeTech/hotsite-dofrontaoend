import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
    html, body {
        background-color: var(--color-third);
        font-size: var(--size-base);
        font-family: 'Roboto Slab', serif;
        color: var(--color-base);
        min-width: 300px;
    }

    body {
        max-width: 100%;
        position: relative;
        overflow-x: hidden;
    }

    input {
        font-family: inherit;
        font-size: inherit;
    }
`

export default Base
