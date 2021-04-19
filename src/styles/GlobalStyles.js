import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
      /* Colors */
   --green: #00ebc7;
   --red: #ff5470;
   --yellow: #fde24f;
   --black: #1b2d45;
   --blue: #1f3a93;
   --darkBlue: #00214d;
   --grey: #bfbfbf;
   --lightGrey: #f2f4f6;
   --white: #fff;

      /* Styles */
   --line: solid 1px var(--grey);

     /* Z- Index */
   --headerLevel: 10;
   --highestLevel: 100;

   /* Elevation */
   --level-1: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
   --level-2: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
   --level-3: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
   --level-4: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);

    /* Positioning */
   --containerPadding: 2.5%;
   --headerHeight: 3rem;
   --margin: 2.75rem 0 1rem;
   --borderRadius: 10px;

      // Media Queries
   // Not supported in css yet
   //    xsmall: 340;
   //    small: 500;
   //    med: 800;
   //    large: 960;
   //    wide: 1200;
}

/* Global */
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
   box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
}

blockquote {
   margin: 0;
   padding: 2rem;
   background: var(--white);
   box-shadow: var(--level-3);
}

label {
   display: block;
   font-size: var(--smallText);
}

input, textarea {
   padding: 4px 5px;
   border: var(--line);
   border-radius: 4px;
}

textarea {
   width: 100%;
}

::placeholder {
   color: var(--grey)
}

select {
   border: var(--line);
}

hr {
   border-top: var(--line);
}

ul {
   list-style: none;
}

button {
   appearance: none;
   padding: 1rem 1.5rem;
   border: none;
   border-radius: 5px;
   box-shadow: var(--level-1);
   background-color: var(--blue);
   color: var(--white);
   transition: .2s ease-in-out box-shadow;
}

.button-transparent {
   background-color: transparent;
   color: var(--blue);
   border: 2px solid var(--blue);
}

button:hover {
   box-shadow: var(--level-3);
}

button[disabled] {
   opacity: 0.4;
}
`;

export default GlobalStyles;
