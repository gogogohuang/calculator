import React, { CSSProperties } from 'react';
import { basicBtnStyles as styles } from '../../ButtonPanel.styles';


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
      className="btn-wrapper">
      {displayOpString}
      <style jsx>{styles}</style>
    </button>
  );
};

export default ArithmeticButton;