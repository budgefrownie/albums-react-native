import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
const { buttonStyles, textStyle } = styles;
return (
  <TouchableOpacity onPress={onPress} style={buttonStyles}>
  <Text style={textStyle}>{children}</Text>
  </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
  },

  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fdc01a',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  }

};
export default Button;
