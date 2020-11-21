import css from 'styled-jsx/css';
import * as vars from 'styles/vars';

export default css`
  .compute-btn-wrapper {
    width: ${vars.buttonSizeL}px;
    height: ${vars.buttonSizeL}px;
    border-radius: 50%;
    text-align: center;
    background-color: ${vars.computeButtonColor};
    color: ${vars.numberFontColor};
    font-size: ${vars.buttonFontSize}px;

    @media screen and (max-width: ${vars.screenPad}px) {
      width: ${vars.buttonSizeM}px;
      height: ${vars.buttonSizeM}px;
    }
  }
`;