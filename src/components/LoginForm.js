import React, { Component } from 'react';
import { TextInput, Alert } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Spinner } from '../ortak';

 class LoginForm extends Component {
   state ={ email: '', password: '', loading: false };
   clickLogin() {
     //console.log(' email ' + this.state.email);
     //console.log(' password ' + this.state.password);
     this.setState({ loading: true });
     const { email, password } = this.state;

     if (email === '' || password === '') {
       this.setState({ loading: false });
       Alert.alert(
         'Mesaj', // Başlık kısmı
         'Her iki alanda dolu olmalı!', //İçerik
         [
           { text: 'Tamam', onPress: () => null } //Buton için
         ]
       );
     } else {
         firebase.auth().signInWithEmailAndPassword(email, password)
         .then(this.loginSucces.bind(this))
         .catch(() => {
           firebase.auth().createUserWithEmailAndPassword(email, password)
           .then(this.loginSucces.bind(this))
           .catch(this.loginFail.bind(this));
         });
       }
     }

   loginSucces() {
     console.log('başarılı');
     this.setState({ loading: false });
   }

   loginFail() {
     console.log('Hatalı');
     this.setState({ loading: false });
     Alert.alert(
       'Mesaj', // Başlık kısmı
       'Kullanıcı adı veya şifreniz hatalı!', //İçerik
       [
         { text: 'Tamam', onPress: () => null } //Buton için
       ]
     );
   }
   renderButton() {
     if (!this.state.loading) {
       return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
     }
     return <Spinner size="small" />;
   }
   render() {
     const { inputStyle } = styles;
     return (
       <Card>
         <CardSection>
          <TextInput
          placeholder="e-mail"
          style={inputStyle}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
         </CardSection>
         <CardSection>
           <TextInput
           secureTextEntry
           placeholder="password"
           style={inputStyle}
           value={this.state.password}
           onChangeText={password => this.setState({ password })}
           />
         </CardSection>
         <CardSection>
          {this.renderButton()}
         </CardSection>
       </Card>
     )
   }
 }
const styles = {
inputStyle: {
  paddingRight: 5,
  paddingLeft: 5,
  fontSize: 18,
  flex: 1
},

}

export default LoginForm;
