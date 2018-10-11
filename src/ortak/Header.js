import React from 'react';
import { View, Text } from 'react-native';

//components are here
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    height: 50,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9
  }

};
export default Header;
