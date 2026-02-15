import React from 'react';
import { TextInput } from 'react-native-paper';
import colors from '../utils/Colors';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  keyboardType?: any;
}

export default function CustomInput({
  label,
  value,
  onChangeText,
  error,
  keyboardType = 'default',
}: Props) {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      keyboardType={keyboardType}
      error={!!error}
      outlineColor={error ? 'red' : colors.primary} // ✅ Normal border
      activeOutlineColor={error ? 'red' : colors.primary} // ✅ Focus border
      style={{ marginBottom: 15 }}
    />
  );
}
