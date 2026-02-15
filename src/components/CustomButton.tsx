import React from 'react';
import { Button } from 'react-native-paper';
import colors from '../utils/Colors';

export default function CustomButton({ title, onPress, style }: any) {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[
        {
          backgroundColor: colors.primary,
          borderRadius: 30,
        },
        style,
      ]}
      labelStyle={{
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.textLight,
      }}
    >
      {title}
    </Button>
  );
}
