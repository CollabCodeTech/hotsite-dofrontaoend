import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
    }

    ol, ul {
        list-style: none;
    }
`

export default Reset
