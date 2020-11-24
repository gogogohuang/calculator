import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { calculatorResultValue, calculatorNextValue } from 'root/store/selectors/calculator';
import Display from './Display';

const makeMapStateToProps = () => {
  return state => {
    return createStructuredSelector({
      resultValue: calculatorResultValue,
      nextValue: calculatorNextValue,
    })(state);
  };
};

export default connect(makeMapStateToProps)(Display);
