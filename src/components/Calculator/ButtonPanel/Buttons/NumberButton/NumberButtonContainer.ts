import { connect } from 'react-redux';
import { clickNumBtn } from 'root/store/modules/calculator';
import NumberButton from './NumberButton';

const mapDispatchToProps = {
  clickNumBtn,
};

export default connect(null, mapDispatchToProps)(NumberButton);
