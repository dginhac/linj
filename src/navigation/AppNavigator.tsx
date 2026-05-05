import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Artwork, Language } from '../data/artworks';

import HomeScreen from '../screens/HomeScreen';
import ArtworkSelectionScreen from '../screens/ArtworkSelectionScreen';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import ExperienceScreen from '../screens/ExperienceScreen';

export type RootStackParamList = {
  Home: undefined;
  ArtworkSelection: undefined;
  LanguageSelection: { artwork: Artwork };
  Experience: { artwork: Artwork; language: Language };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          contentStyle: { backgroundColor: '#0A0A0F' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ArtworkSelection" component={ArtworkSelectionScreen} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
        <Stack.Screen name="Experience" component={ExperienceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
