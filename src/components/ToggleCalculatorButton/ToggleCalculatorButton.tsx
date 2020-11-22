import React from 'react';
import styles from './ToggleCalculatorButton.styles';

type Props = {
  clickCb: (param?: any) => void;
}

const ToggleCalculatorButton = ({ clickCb }: Props) => {
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    clickCb();
  }

  return (
    <button type="button" onClick={handleClick}>
      Open Calculator
      <style jsx>{styles}</style>
    </button>
  );
}

export default ToggleCalculatorButton;