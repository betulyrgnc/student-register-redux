
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { STUDENT_CHANGED,
  CREATE_REQUEST_SUCCES,
  CREATE_REQUEST,
STUDENT_LIST_DATA_SUCCESS,
UPDATE_REQUEST_SUCCES,
UPDATE_REQUEST } from './types';


export const studentChange = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: STUDENT_CHANGED,
      payload: { props, value }
    });
  };
};

export const studentCreate = ({ isim, soyisim, ogrencinumara, sube }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: CREATE_REQUEST });
    firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
    .push({ isim, soyisim, ogrencinumara, sube })
    .then(() => {
      dispatch({ type: CREATE_REQUEST_SUCCES });
      Actions.pop(); // pop methodu bir sayfa geri gitmek için kullanılır.
    });
  };
};

export const studentUpdate = ({ isim, soyisim, ogrencinumara, sube, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: UPDATE_REQUEST });
    firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
    .set({ isim, soyisim, ogrencinumara, sube })
    .then(() => {
      dispatch({ type: UPDATE_REQUEST_SUCCES });
      Actions.pop(); // pop methodu bir sayfa geri gitmek için kullanılır.
    });
  };
};

export const studentListData = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
    .on('value', snapshot => { //datalar snapshot ın içerisine gelir
      dispatch({
        type: STUDENT_LIST_DATA_SUCCESS,
        payload: snapshot.val() });
    });
  };
};
