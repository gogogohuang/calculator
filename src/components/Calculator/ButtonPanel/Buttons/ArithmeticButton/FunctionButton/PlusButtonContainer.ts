import { connect } from 'react-redux';
import { clickPluBtn } from 'root/store/modules/calculator';
import ArithmeticButton from '../ArithmeticButton';

const mapDispatchToProps = {
  clickCb: clickPluBtn,
};

export default connect(null, mapDispatchToProps)(ArithmeticButton);
