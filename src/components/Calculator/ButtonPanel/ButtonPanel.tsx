import React from 'react';
import NumberButton from './Buttons/NumberButton/NumberButtonContainer';
import PlusButton from './Buttons/ArithmeticButton/FunctionButton/PlusButtonContainer';
import MinusButton from './Buttons/ArithmeticButton/FunctionButton/MinusButtonContainer';
import EqualButton from './Buttons/ArithmeticButton/FunctionButton/EqualButtonContainer';
import ACButton from './Buttons/ArithmeticButton/FunctionButton/ACButtonContainer';
import MultiplyButton from './Buttons/ArithmeticButton/FunctionButton/MultiplyButtonContainer';
import DivideButton from './Buttons/ArithmeticButton/FunctionButton/DivideButtonContainer';
import SigSwitchButton from './Buttons/ArithmeticButton/FunctionButton/SigSwitchButtonContainer';
import ArithmeticButton from './Buttons/ArithmeticButton/ArithmeticButton';
import styles from './ButtonPanel.styles';
import { computeButtonColor2, buttonFontColor } from 'styles/vars';

const ButtonPanel = () => {
  return (
    <div className='button-panel-wrapper'>
      <div className="button-panel-wrapper__row">
        <ACButton displayOpString='AC' style={{ backgroundColor: computeButtonColor2, color: buttonFontColor }} />
        <SigSwitchButton displayOpString='+/-' style={{ backgroundColor: computeButtonColor2, color: buttonFontColor }} />
        <ArithmeticButton displayOpString='%' clickCb={() => { }} style={{ backgroundColor: computeButtonColor2, color: buttonFontColor }} />
        <DivideButton displayOpString='/' />
      </div>
      <div className="button-panel-wrapper__row">
        <NumberButton displayNumber='7' />
        <NumberButton displayNumber='8' />
        <NumberButton displayNumber='9' />
        <MultiplyButton displayOpString='x' />
      </div>
      <div className="button-panel-wrapper__row">
        <NumberButton displayNumber='4' />
        <NumberButton displayNumber='5' />
        <NumberButton displayNumber='6' />
        <MinusButton displayOpString='-' />
      </div>
      <div className="button-panel-wrapper__row">
        <NumberButton displayNumber='1' />
        <NumberButton displayNumber='2' />
        <NumberButton displayNumber='3' />
        <PlusButton displayOpString='+' />
      </div>
      <div className="button-panel-wrapper__row">
        <NumberButton displayNumber='0' />
        <NumberButton displayNumber='.' />
        <EqualButton displayOpString='=' />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default ButtonPanel;