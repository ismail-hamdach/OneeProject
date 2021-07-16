import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/navigation/AppStack';

export default function App() {
  return (
    
      <View style={{flex: 1, justifyContent: 'center', }} >
        <StatusBar hidden={true} />
        <AppStack />
      </View>
    
  );
}
