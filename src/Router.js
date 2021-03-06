import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';
import StudentCreate from './components/StudentCreate';
import StudentUpdate from './components/StudentUpdate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginTop: 65 }}>
      <Scene key="kimlik">
        <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.studentCreate()}
          rightTitle="Yeni"
          key="studentlist"
          component={StudentsList}
          title="Ögrenci Liste"
        />
        <Scene
          key="studentCreate"
          component={StudentCreate}
          title="Ögrenci Kaydet"
        />
        <Scene
          key="studentUpdate"
          component={StudentUpdate}
          title="Ögrenci Güncelle"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
