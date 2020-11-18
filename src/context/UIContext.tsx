import React, { createContext, useState, useContext, FC } from 'react';

type UIContextType = {
  selectValue: string;
};

type UIContextDef = {
  uiContext: UIContextType;
  setUiContextSelectValue: (value: string) => void;
};

const UIContext = createContext<UIContextDef>({
  uiContext: { selectValue: '' },
  setUiContextSelectValue: () => { },
});

export const useUIContext = () => useContext(UIContext);

const UIContextProvider: FC = ({ children }) => {
  const [selectValue, setSelectValue] = useState<string>('');

  const uiContextValue = {
    uiContext: { selectValue },
    setUiContextSelectValue: setSelectValue,
  };


  return (
    <UIContext.Provider value={uiContextValue}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;