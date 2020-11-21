enum ActionTypes {
  TOGGLE_CALCULATOR = 'UI_TOGGLE_CALCULATOR',
}

type UIProps = {
  calculatorIsOpen: boolean;
};

const initialState: UIProps = {
  calculatorIsOpen: false,
};

export default function reducer(state = initialState, action: Redux.Action<ActionTypes>) {
  switch (action.type) {
    case ActionTypes.TOGGLE_CALCULATOR: {
      return {
        ...state,
        calculatorIsOpen: !state.calculatorIsOpen,
      }
    }

    default:
      return state;
  }
}

export const toggleCalculator = () => {
  return {
    type: ActionTypes.TOGGLE_CALCULATOR,
  };
}

