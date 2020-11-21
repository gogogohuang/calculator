import { connect } from 'react-redux';
import { clickMinusBtn } from 'root/store/modules/calculator';
import ArithmeticButton from '../ArithmeticButton';

const mapDispatchToProps = {
  clickCb: clickMinusBtn,
};

export default connect(null, mapDispatchToProps)(ArithmeticButton);
