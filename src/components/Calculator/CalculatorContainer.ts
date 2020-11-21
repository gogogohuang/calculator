import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCalculator } from 'root/store/modules/ui';
import { uiCalculatorOpen } from 'root/store/selectors/ui';
import Calculator from './Calculator';

const makeMapStateToProps = () => {
  return state => {
    return createStructuredSelector({
      calculatorIsOpen: uiCalculatorOpen,
    })(state);
  };
};

const mapDispatchToProps = {
  clickCb: toggleCalculator,
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Calculator);
