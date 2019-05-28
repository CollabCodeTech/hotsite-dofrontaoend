import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
    html, body {
        font-size: var(--size-base);
        font-family: 'Roboto Slab', serif;
    }

    input {
        font-family: inherit;
        font-size: inherit;
    }
`

export default Base
