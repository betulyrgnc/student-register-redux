import { combineReducers } from 'redux';
import kimlikDogrulamareducers from './KimlikDogrulamareducers';
import StudentListReducers from './StudentListReducer';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikDogrulamareducers,
  studentsListResponse: StudentListReducers
});
