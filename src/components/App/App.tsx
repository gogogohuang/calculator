import React from 'react';
import Calculator from 'components/Calculator/CalculatorContainer';
import ToggleCalculatorButton from 'components/ToggleCalculatorButton/ToggleCalculatorButtonContainer';

const App = () => {
  return (
    <>
      <ToggleCalculatorButton />
      <Calculator />
    </>
  );
}

export default App;
