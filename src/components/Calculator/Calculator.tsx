import React, { useRef, useState } from 'react';
import Display from './Display/DisplayContainer';
import ButtonPanel from './ButtonPanel/ButtonPanel';
import useDrag from 'hooks/useDrag'
import useClickOutSide from 'hooks/useClickOutside';
import styles from './Calculator.styles';

type Props = {
  clickCb: () => void;
  calculatorIsOpen: boolean;
  status: any;
}

const Calculate = ({ clickCb, calculatorIsOpen, status }: Props) => {
  if (!calculatorIsOpen) {
    return null;
  }

  const draggableDivRef = useRef(null);
  useClickOutSide([draggableDivRef], () => clickCb());
  useDrag(draggableDivRef);

  console.log(status);

  return (
    <div ref={draggableDivRef} className="calculator-wrapper" >
      <Display />
      <ButtonPanel />
      <style jsx>{styles}</style>
    </div>
  );
}

export default Calculate;