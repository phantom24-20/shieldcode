import { createGlobalStyle } from "styled-components";
import IMAGES from "./assets/Image";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Winky Rough", cursive;
    background-image: url(${IMAGES.contactbg}); /* <-- path to your background image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #333;
  }

  h1 {
    font-family: "Winky Rough", cursive;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
