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

@media (max-width: 960px) {
}

@media (max-width: 800px) {
   .navigation {
      display: none;
   }
}
@media (max-width: 550px) {

}

@media (🤵 -width: 340px) {
   .navigation {

   }
}
`;



export default MediaQueries;
