import React, { Component } from 'react';
import { TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Spinner } from '../ortak';

 class LoginForm extends Component {
   state ={ email: '', password: '', loading: false };

   clickLogin() {
     //console.log(' email ' + this.state.email);
     //console.log(' password ' + this.state.password);
     const { email, password } = this.props;
     this.props.loginUser({ email, password });
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
     if (!this.props.loading) {
       return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
     }
     return <Spinner size="small" />;
   }
   render() {
     console.log('response email ' + this.props.email);
     console.log('response password ' + this.props.password);
     const { inputStyle } = styles;
     return (
       <Card>
         <CardSection>
          <TextInput
          placeholder="e-mail"
          style={inputStyle}
          value={this.props.email}
          onChangeText={email => this.props.emailChanged(email)}
          />
         </CardSection>
         <CardSection>
           <TextInput
           secureTextEntry
           placeholder="password"
           style={inputStyle}
           value={this.props.password}
           onChangeText={password => this.props.passwordChanged(password)}
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
const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
  const { email, password, loading } = kimlikdogrulamaResponse;
  return {
    email,
    password,
    loading
  };
};



export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
