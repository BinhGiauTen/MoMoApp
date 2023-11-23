import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tags from './src/views/Tags';
import ChiTietChuyenTien from './src/views/ChiTietChuyenTien'

export default function App() {
  return (
    <NavigationContainer  >
      <ChiTietChuyenTien/>
    </NavigationContainer>
  );
}

