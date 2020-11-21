import React, { RefObject } from 'react';
import styles from './ToggleCalculatorButton.styles';

type Props = {
  ref: RefObject<any>;
  clickCb: (param?: any) => void;
}

const ToggleCalculatorButton = ({ ref, clickCb }: Props) => {
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    clickCb();
  }

  return (
    <button ref={ref} type="button" onClick={handleClick}>
      Open Calculator
      <style jsx>{styles}</style>
    </button>
  );
}

export default ToggleCalculatorButton;