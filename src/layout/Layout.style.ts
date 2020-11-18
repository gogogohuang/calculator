import css from 'styled-jsx/css';
import { backgroundColor } from 'styles/vars';

export default css`
  .container {
    background-color: ${backgroundColor};
    min-height: 100vh;
    width: 100vw;
    
    main {
      padding-top: 10px;
      margin: 0 auto;
      width: 90%;
      min-height: 100%;
    }
  }
`;
