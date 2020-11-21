import { connect } from 'react-redux';
import { clickDivideBtn } from 'root/store/modules/calculator';
import ArithmeticButton from '../ArithmeticButton';

const mapDispatchToProps = {
  clickCb: clickDivideBtn,
};

export default connect(null, mapDispatchToProps)(ArithmeticButton);
