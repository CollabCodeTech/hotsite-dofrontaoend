import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
    :root {
        --color-negative-light: rgba(0, 0, 0, 0.15);
        --color-negative: #000;
        --color-base-light: #828282;
        --color-base: #3A4042;
        --color-zero: #FFF;
        --color-first: #F25A70;
        --color-second: #191637;
        --color-third: #EAE6DA;
    }
`

export default Colors
