import { combineReducers } from 'redux';
import kimlikDogrulamareducers from './KimlikDogrulamareducers';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikDogrulamareducers
});
