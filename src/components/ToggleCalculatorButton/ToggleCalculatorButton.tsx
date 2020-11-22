import React from 'react';
import styles from './ToggleCalculatorButton.styles';

type Props = {
  clickCb: (param?: any) => void;
}

const ToggleCalculatorButton = ({ clickCb }: Props) => {
  const handleClick = e => {
    e.stopPropagation();
    clickCb();
  }

  return (
    <button type="button" onClickCapture={handleClick}>
      Open Calculator
      <style jsx>{styles}</style>
    </button>
  );
}

export default ToggleCalculatorButton;