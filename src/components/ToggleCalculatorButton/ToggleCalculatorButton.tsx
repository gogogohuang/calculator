import React from 'react';
import styles from './ToggleCalculatorButton.styles';

type Props = {
  clickCb: (param?: any) => void;
}

const ToggleCalculatorButton = ({ clickCb }: Props) => {
  return (
    <button type="button" onClick={() => clickCb()}>
      Open Calculator
      <style jsx>{styles}</style>
    </button>
  );
}

export default ToggleCalculatorButton;