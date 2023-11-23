import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tags from './src/views/Tags';
import ChonUuDai from './src/views/ChonUuDai'

export default function App() {
  return (
    <NavigationContainer  >
      {/* <ChonUuDai/> */}
      <Tags/>
    </NavigationContainer>
  );
}

