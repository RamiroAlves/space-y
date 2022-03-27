import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        --space: #0b1e8a;
        --space-light: #3d68b2;
        --space-dark: #060327;
        --gray-01: #0d0e13;
        --gray-02: #2c2d3a;
        --gray-03: #60616f;
        --gray-04: #898a93;
        --gray-05: #d5d5db;
        --mars: #e85937;
        --mars-light: #ff8c70;
        --mars-dark: #cf3f1d;
        --uranus: #24ffe9;
        --sun: #f5d15f;
        --jupiter: #e00e34;
        --earth: #0fdd86;
        --saturn: #554ad7;
        --form: #0e0d40;
    }

    *{
        box-sizing: border-box;
        font-family: 'Heebo', sans-serif !important;
        margin: 0;
        padding: 0;
    }
`