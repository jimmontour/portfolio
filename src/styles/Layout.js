import { createGlobalStyle } from 'styled-components';

const LayoutStyles = createGlobalStyle`
/* Layouts */
.text-center {
   text-align: center;
}

.container {
   padding: 6rem 0;
   margin: 0 auto;
   width: 80%;
}

.layout {
   padding: 0 var(--containerPadding);
}

.grid {
   --gridCols: 2;
   display: block;
   grid-template-columns: repeat(var(--gridCols), 1fr);
}

.cols-3 {
   --gridCols: 3;
}

.flex {
   --justifyContent: space-between;
   display: block;
   justify-content: var(--justifyContent);
}

.flex-around {
   --justifyContent: space-around;
}

.align-items {
   align-items: center;
}

.heading-margin {
   margin-bottom: 4rem;
}
`;

export default LayoutStyles;
