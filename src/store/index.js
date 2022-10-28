import { combineReducers } from 'redux';
import main from './modules/main';
import user from './modules/user';
import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({
  main,
  user,
});
