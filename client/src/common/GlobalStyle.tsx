import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
import './font.scss'
import './getvw.scss'

const GlobalStyle = createGlobalStyle`
${reset};

html {
    font-size: 10px;
}
button {
    border:none;
    background:none;
}

input {
    border:none;
    outline:none;
}

a {
    text-decoration:none;
}
`;

export default GlobalStyle;