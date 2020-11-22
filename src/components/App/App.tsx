import React from 'react';
import Calculator from 'components/Calculator/CalculatorContainer';
import ToggleCalculatorButton from 'components/ToggleCalculatorButton/ToggleCalculatorButtonContainer';
import useMobileDevice from 'hooks/useMobileDevice';

const App = () => {
  const { isMobile } = useMobileDevice();

  return (
    <>
      <ToggleCalculatorButton />
      <Calculator isMobile={isMobile} />
    </>
  );
}

export default App;
