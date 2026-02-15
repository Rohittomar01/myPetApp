import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import CustomStatusBar from './src/components/CustomStatusBar';

export default function App() {
  return (
    <PaperProvider>
      <CustomStatusBar style={{ height: 55 }} />

      <AppNavigator />
      <Toast />
    </PaperProvider>
  );
}
