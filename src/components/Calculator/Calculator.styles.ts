import css from 'styled-jsx/css';
import * as vars from 'styles/vars';

export default css`
  .calculator-wrapper {
    width: ${vars.calculatorWidthL}px;
    min-height: 200px;
    padding: 10px;
    border: 1px solid #000;
    background: linear-gradient(${vars.panelBackgroundColorTop}, ${vars.panelBackgroundColorBottom});
    user-select: none;

    @media screen and (max-width: ${vars.screenPad}px) {
      width: ${vars.calculatorWidthM}px;
    }
  }

  .calculator-wrapper-mobile {
    position: fixed;
    top: 50%;
    width: 100vw;
    height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;
    background: linear-gradient(${vars.panelBackgroundColorTop}, ${vars.panelBackgroundColorBottom});
  }
`;
