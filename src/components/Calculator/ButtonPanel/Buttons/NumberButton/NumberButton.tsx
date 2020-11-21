import React from 'react';
import cx from 'classnames';
import styles from './NumberButton.styles';

type Props = {
  displayNumber: string;
  clickNumBtn: (value: string) => void
}

const NumberButton = ({ displayNumber, clickNumBtn }: Props) => {
  const handleClick = () => {
    clickNumBtn(displayNumber);
  }

  return (
    <button
      type='button'
      className={cx("number-btn-wrapper",
        { 'number-btn-wrapper__zero': displayNumber === '0' })}
      onClick={handleClick}>
      {displayNumber}
      <style jsx>{styles}</style>
    </button>
  )
}

export default NumberButton;