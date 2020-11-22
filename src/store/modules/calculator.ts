import { getFractionDigits, formatFloat } from 'utils/numberHelper';

enum ActionTypes {
  ADD_BTN = 'CALCULATOR_ADD_BTN',
  MINUS_BTN = 'CALCULATOR_MINUS_BTN',
  NUMBER_BTN = 'CALCULATOR_NUMBER_BTN',
  EQUAL_BTN = 'CALCULATOR_EQUAL_BTN',
  MULTIPLY_BTN = 'CALCULATOR_MULTIPLY_BTN',
  DIVIDE_BTN = 'CALCULATOR_DIVIDE_BTN',
  SIG_BTN = 'CALCULATOR_SIG_BTN',
  AC_BTN = 'CALCULATOR_AC_BTN',
}

type CalculatorProps = {
  nextValue: string;
  preValue: string;
  resultValue: string;
  computation: ActionTypes;
};

const initialState: CalculatorProps = {
  nextValue: null,
  preValue: null,
  resultValue: null,
  computation: null,
};


export default function reducer(state = initialState, action: Redux.Action<ActionTypes>) {
  switch (action.type) {
    case ActionTypes.NUMBER_BTN: {
      const { payload } = action;
      const { nextValue } = state;

      if (payload === '0' && nextValue === '0') {
        return { ...state }
      }

      const _next = !nextValue || nextValue === '0' ? payload : nextValue + payload;

      return { ...state, nextValue: _next, preValue: _next };
    }

    case ActionTypes.ADD_BTN:
    case ActionTypes.MINUS_BTN:
    case ActionTypes.MULTIPLY_BTN:
    case ActionTypes.DIVIDE_BTN: {
      const { nextValue, resultValue, computation } = state;
      const { type } = action;

      if (!nextValue) {
        return { ...state, computation: type };
      }

      if (!resultValue) {
        return { ...state, computation: type, resultValue: nextValue, nextValue: null, };
      }

      const total = computationFunc(resultValue, nextValue, computation);

      return {
        ...state,
        computation: type,
        nextValue: null,
        resultValue: total,
      }
    }

    case ActionTypes.EQUAL_BTN: {
      const { nextValue, resultValue, preValue, computation } = state;
      const total = computationFunc(resultValue || '0', nextValue || preValue || '0', computation);

      return {
        ...state,
        computation,
        preValue,
        nextValue: null,
        resultValue: total,
      }
    }

    case ActionTypes.AC_BTN: {
      return {
        computation: null,
        preValue: null,
        nextValue: null,
        resultValue: null,
      }
    }

    case ActionTypes.SIG_BTN: {
      const { nextValue, resultValue, preValue } = state;
      const _nextValue = nextValue? (-1 * +nextValue).toString(): null;
      const _preValue = preValue? (-1 * +preValue).toString(): null;
      const _resultValue = resultValue? (-1 * +resultValue).toString(): null;

      return {
        ...state,
        nextValue: _nextValue,
        resultValue: _resultValue,
        preValue: _preValue,
      }
    }

    default:
      return state;
  }
}

export const clickNumBtn = (payload: string) => {
  return {
    type: ActionTypes.NUMBER_BTN,
    payload,
  };
}

export const clickPluBtn = () => {
  return {
    type: ActionTypes.ADD_BTN,
  };
}

export const clickMinusBtn = () => {
  return {
    type: ActionTypes.MINUS_BTN,
  };
}

export const clickEqualBtn = () => {
  return {
    type: ActionTypes.EQUAL_BTN,
  };
}

export const clickAcBtn = () => {
  return {
    type: ActionTypes.AC_BTN,
  }
}

export const clickMultiplyBtn = () => {
  return {
    type: ActionTypes.MULTIPLY_BTN,
  }
}

export const clickDivideBtn = () => {
  return {
    type: ActionTypes.DIVIDE_BTN,
  }
}

export const clickSigBtn = () => {
  return {
    type: ActionTypes.SIG_BTN,
  }
}

const computationFunc = (first: string, second: string, action: ActionTypes): string => {
  const fractionDigits = getFractionDigits(first) >= getFractionDigits(second) ?
    getFractionDigits(first) : getFractionDigits(second)

  switch (action) {
    case ActionTypes.ADD_BTN: {
      return formatFloat((+first + +second), fractionDigits).toString();
    }
    case ActionTypes.MINUS_BTN: {
      return formatFloat((+first - +second), fractionDigits).toString();
    }

    case ActionTypes.MULTIPLY_BTN: {
      return formatFloat((+first * +second), fractionDigits).toString();
    }

    case ActionTypes.DIVIDE_BTN: {
      if (second === '0') {
        return '0';
      }

      return (+first / +second).toString();
    }
  }
}
