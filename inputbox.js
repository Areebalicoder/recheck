import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function inputbox() {
  const [value, onChangeText] = React.useState('inputbox');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
};