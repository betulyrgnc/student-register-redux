import { Alert } from 'react-native';
import firebase from 'firebase';
import { EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER,
  LOGIN_USER_SUCCES,
  LOGIN_USER_FAIL } from './types';

export const emailChanged = (email) => {
  return (dispatch) => {
    dispatch({
      type: EMAIL_CHANGE,
      payload: email
    });
  };
};

export const passwordChanged = (password) => {
  return (dispatch) => {
    dispatch({
      type: PASSWORD_CHANGE,
      payload: password
    });
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
      dispatch({ type: LOGIN_USER });
    if (email === '' || password === '') {
      Alert.alert(
        'Mesaj', // Başlık kısmı
        'Her iki alanda dolu olmalı!', //İçerik
        [
          { text: 'Tamam', onPress: () => null } //Buton için
        ]
      );
    } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSucces(dispatch, user))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginSucces(dispatch, user))
          .catch(() => loginFail());
        });
      }
  };
};

const loginFail = (dispatch) => {
  Alert.alert(
    'Mesaj', // Başlık kısmı
    'Her iki alanda dolu olmalı!', //İçerik
    [
      { text: 'Tamam', onPress: () => null } //Buton için
    ]
  );
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginSucces = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCES,
    payload: user
  });
};
