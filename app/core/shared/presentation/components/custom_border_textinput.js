
import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import AppTheme from '../../../utils/theme/colors';

const CustomTextInput = ({onChangeText, placeholder, editable}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = [
    styles.input,
    isFocused ? { borderColor: AppTheme.primaryColor } : null,
  ];

  return (
    <TextInput
      style={inputStyles}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={onChangeText}
      placeholder= {placeholder}
      editable = {editable?? true}
      

    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginVertical: 10,
  },
});

export default CustomTextInput;
