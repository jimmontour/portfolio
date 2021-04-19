import { createGlobalStyle } from 'styled-components';
import Roboto from '../assets/fonts/Roboto.ttf';
import LibreBaskerville from '../assets/fonts/LibreBaskerville.ttf';

const Typography = createGlobalStyle`
:root {
     /* Font Sizes */
   --baseFontSize: 100%;
   --baseNavSize: 0.64rem;
   --smallFontSize: 0.8rem;
   --smallestFontSize: 0.512rem;

   --h1: 3.052rem;
   --h2: 2.441rem;
   --h3: 1.953rem;
   --h4: 1.563rem;
   --h5: 1.25rem;
   --smallText: 0.8rem;

   /* Fonts */
   --headingFont: LibreBaskerville, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   --bodyFont: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
  @font-face {
    font-family: Roboto;
    src: url(${Roboto});
  }

    @font-face {
    font-family: LibreBaskerville;
    src: url(${LibreBaskerville});
  }

html {
   font-size: 16px;
}

body {
   font-family: var(--bodyFont);
   font-weight: 400;
   line-height: 1.75;
}

h1,
h2,
h3,
h4,
h5 {
   font-family: var(--headingFont);
}

h1,
h2 {
   color: var(--blue);
   font-weight: 800;
}



code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

/* Type-scale */
p {
   margin-bottom: 1rem;
   max-width: 40rem;
}

p a,
blockquote a {
   color: var(--textColor);
   text-decoration: none;
   border-bottom: solid 2px var(--green);
}

h1,
h2,
h3,
h4,
h5 {
  margin: 3rem 0 1.38rem;
  font-family: var(--headingFont);
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: var(--h1);
}

h2 {font-size: var(--h2);}

h3 {font-size: var(--h3);}

h4 {font-size: var(--h4);}

h5 {font-size: var(--h5);}

small, .text_small {font-size: var(--small);}
/* End Type-scale */
`;

export default Typography;
