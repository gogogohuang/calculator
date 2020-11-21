import { connect } from 'react-redux';
import { clickEqualBtn } from 'root/store/modules/calculator';
import ArithmeticButton from '../ArithmeticButton';

const mapDispatchToProps = {
  clickCb: clickEqualBtn,
};

export default connect(null, mapDispatchToProps)(ArithmeticButton);
