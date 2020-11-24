import React from 'react';
import styles from './Display.styles';

type Props = {
  resultValue: string;
  nextValue: string;
};

const Result = ({ resultValue, nextValue }: Props) => {
  return (
    <div className="display-wrapper">
      {nextValue || resultValue || '0'}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Result;
