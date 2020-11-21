import { connect } from 'react-redux';
import { clickMultiplyBtn } from 'root/store/modules/calculator';
import ArithmeticButton from '../ArithmeticButton';

const mapDispatchToProps = {
  clickCb: clickMultiplyBtn,
};

export default connect(null, mapDispatchToProps)(ArithmeticButton);
