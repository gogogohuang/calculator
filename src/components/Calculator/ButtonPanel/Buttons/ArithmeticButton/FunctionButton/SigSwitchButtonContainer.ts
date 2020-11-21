import { connect } from 'react-redux';
import { clickSigBtn } from 'root/store/modules/calculator';
import ArithmeticButton from '../ArithmeticButton';

const mapDispatchToProps = {
  clickCb: clickSigBtn,
};

export default connect(null, mapDispatchToProps)(ArithmeticButton);
