import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body,html {
        width: 100%;
        height: 100%;
    }

    body,select,input,textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`

export const WrapperContainer = styled.div`
  width: min(130rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem;
`
