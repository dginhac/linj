import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';
import { SettingsProvider } from './src/context/SettingsContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SettingsProvider>
      <AppNavigator />
    </SettingsProvider>
  );
}
