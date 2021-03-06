import css from 'styled-jsx/css';
import * as vars from 'styles/vars';

export default css`
  .button-panel-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
    }
  }
`;

export const basicBtnStyles = css`
  .btn-wrapper {
    width: ${vars.buttonSizeL}px;
    height: ${vars.buttonSizeL}px;
    border-radius: 50%;
    text-align: center;
    background-color: ${vars.numberButtonColor};
    color: ${vars.numberFontColor};
    font-size: ${vars.buttonFontSize}px;

    &__zero {
      width: ${vars.buttonSizeL * 2 + 10}px;
      border-radius: ${vars.buttonSizeL / 2}px;
      text-align: left;
      padding-left: ${vars.buttonSizeL / 4}px;
    }

    @media screen and (max-width: ${vars.screenPad}px) {
      width: ${vars.buttonSizeM}px;
      height: ${vars.buttonSizeM}px;

      &__zero {
        width: ${vars.buttonSizeM * 2 + 10}px;
        border-radius: ${vars.buttonSizeM / 2}px;
        padding-left: ${vars.buttonSizeM / 4}px;
      }
    }
  }
`;
