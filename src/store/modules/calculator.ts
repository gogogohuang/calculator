export const PLUS = 'CALCULATOR_PLUS';

const initialState = { value: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PLUS: {
      console.log('value', action.value);
      return {
        value: action.value,
      };
    }
    default:
      return state;
  }
}

export const setValue = (value: number) => {
  return {
    type: PLUS,
    value
  };
}
