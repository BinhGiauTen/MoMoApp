import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tags from './src/views/Tags';
import KetQuaGiaoDich from './src/views/KetQuaGiaoDich'

export default function App() {
  return (
    <NavigationContainer  >

      <KetQuaGiaoDich/>

    </NavigationContainer>
  );
}

