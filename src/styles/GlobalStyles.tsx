import { createGlobalStyle, DefaultTheme } from "styled-components";

interface GlobalStyleProps {
  theme: DefaultTheme;
}

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`

/* * {
  outline: 1px solid salmon;
  outline-offset: 2px;
} */

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${(props) => props.theme.fontFamily?.primary}, sans-serif;
    color: #A7A7A7;
    font-weight: 400;
    line-height: 1.2;
    overflow-x: hidden;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
}

a {
  display: inline-flex;
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  width: 100%;
}

a,
button,
input,
textarea,
svg *
::after,
::before {
  transition-duration: ${(props) => props.theme.transition?.duration};
}

section {
  margin-bottom: ${(props) => props.theme.section?.marginBottom};
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;
