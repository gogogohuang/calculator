import { connect } from 'react-redux';
import { clickAcBtn } from 'root/store/modules/calculator';
import ArithmeticButton from '../ArithmeticButton';

const mapDispatchToProps = {
  clickCb: clickAcBtn,
};

export default connect(null, mapDispatchToProps)(ArithmeticButton);
