import React from 'react';
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../utils/Colors';

const { width, height } = Dimensions.get('window');

type CustomStatusBarProps = {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  translucent?: boolean;
  style?: StyleProp<ViewStyle>;
};

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor = colors.secondary,
  barStyle = 'dark-content',
  translucent = false,
  style,
}) => {
  const statusBarHeight =
    Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 10;

  return (
    <View
      style={[
        {
          backgroundColor,
          height: Platform.OS === 'android' ? statusBarHeight : undefined,
        },
        style,
      ]}
    >
      <StatusBar
        translucent={translucent}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />

      {Platform.OS === 'ios' && (
        <SafeAreaView edges={['top']} style={{ backgroundColor }} />
      )}
    </View>
  );
};

export default CustomStatusBar;
