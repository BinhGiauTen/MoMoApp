import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tags from './src/views/Tags';
import ChuyenTien from './src/views/ChuyenTien';

export default function App() {
  return (
    <NavigationContainer  >
      <ChuyenTien />
    </NavigationContainer>
  );
}

