import { createGlobalStyle } from 'styled-components';

const MediaQueries = createGlobalStyle`
@media only screen and(min-width: 500px) {
   :root {
      --baseFontSize: 112.5 %;
   }

   .grid {
      display: grid;
   }

   .flex {
      display: flex;
   }
}
`;

export default MediaQueries;
