import css from 'styled-jsx/css';
import * as vars from 'styles/vars';

export default css`
  .display-wrapper {
    overflow: hidden;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: ${vars.displayPanelFontColor};
    font-size: ${vars.displayPanelFontSize}px;
    text-align: right;
  }
`;
