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

}
@media (max-width: 550px) {

}

@media (max-width: 340px) {

}
`;

export default MediaQueries;
