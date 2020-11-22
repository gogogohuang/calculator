import React, { useRef } from 'react';
import Display from './Display/DisplayContainer';
import ButtonPanel from './ButtonPanel/ButtonPanel';
import useDrag from 'hooks/useDrag'
import useClickOutSide from 'hooks/useClickOutside';
import cx from 'classnames';
import styles from './Calculator.styles';

type Props = {
  isMobile: boolean;
  clickCb: () => void;
  calculatorIsOpen: boolean;
}

const Calculate = ({ clickCb, calculatorIsOpen, isMobile }: Props) => {
  if (!calculatorIsOpen) {
    return null;
  }

  const draggableDivRef = useRef(null);
  useClickOutSide([draggableDivRef], () => clickCb());
  useDrag(draggableDivRef);

  return (
    <div ref={draggableDivRef}
      className={cx(isMobile ? "calculator-wrapper-mobile" : "calculator-wrapper")} >
      <Display />
      <ButtonPanel />
      <style jsx>{styles}</style>
    </div>
  );
}

export default Calculate;