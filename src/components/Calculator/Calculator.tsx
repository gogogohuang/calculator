import React from 'react';

type Props = {
  value: number;
  setValue: (value: number) => void
}

const Calculate = ({ value, setValue }: Props) => {



  return (
    <div>
      <h2>Calculate: {value}</h2>
      <button onClick={() => setValue(123)}>Click</button>
    </div>
  );
}

export default Calculate;