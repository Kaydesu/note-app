import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    button {
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 5px 12px
    }

    input {
        padding: 5px 12px;
        outline: none;
        border: none;
        border-radius: 15px;
    }
`