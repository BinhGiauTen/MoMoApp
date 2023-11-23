import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tags from './src/views/Tags';
import ThanhToanAnToan from './src/views/ThanhToanAnToan'

export default function App() {
  return (
    <NavigationContainer  >
      <ThanhToanAnToan/>
    </NavigationContainer>
  );
}

