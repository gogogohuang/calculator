import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setValue } from 'root/store/modules/calculator';
import {
  calculatorValue,
} from 'root/store/selectors/calculator';
import Calculator from './Calculator';

const makeMapStateToProps = () => {
  return state => {
    return createStructuredSelector({
      value: calculatorValue,
    })(state);
  };
};

const mapDispatchToProps = {
  setValue,
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Calculator);
