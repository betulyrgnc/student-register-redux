import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyles}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};
//ActivityIndicator size için large ve small alır.
const styles = {
  spinnerStyles: {
    flex: 1,
    justifyContent: 'center', //dikeyde ortalama
    alignItems: 'center'//yatayda ortalama
  }
};

export { Spinner };
