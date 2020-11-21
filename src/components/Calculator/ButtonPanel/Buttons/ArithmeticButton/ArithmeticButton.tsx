import React, { CSSProperties } from 'react';
import styles from './ArithmeticButton.styles';

type Props = {
  clickCb: () => void;
  displayOpString: string;
  style?: CSSProperties;
}

const ArithmeticButton = ({ clickCb, displayOpString, style }: Props) => {
  const handleClick = () => {
    clickCb();
  }

  return (
    <button
      style={{ ...style }}
      type="button"
      onClick={handleClick}
      className="compute-btn-wrapper">
      {displayOpString}
      <style jsx>{styles}</style>
    </button>
  );
};

export default ArithmeticButton;