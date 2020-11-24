import { combineReducers } from 'redux';

import calculator from './calculator';
import ui from './ui';

export default combineReducers({
  calculator,
  ui,
});
