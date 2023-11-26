import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tags from './src/views/Tags';
import Home from './src/views/Home';
import KetQuaGiaoDich from './src/views/KetQuaGiaoDich'
import ChonUuDai from './src/views/ChonUuDai'
import ChuyenTien from './src/views/ChuyenTien'
import ChiTietChuyenTien from './src/views/ChiTietChuyenTien'
import ThanhToanAnToan from './src/views/ThanhToanAnToan'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tags' >
      <Stack.Screen name="Tags" component={Tags} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="KetQuaGiaoDich" component={KetQuaGiaoDich} options={{headerShown: false}}/>
        <Stack.Screen name="ChonUuDai" component={ChonUuDai} options={{headerShown: false}}/>
        <Stack.Screen name="ChuyenTien" component={ChuyenTien} options={{headerShown: false}}/>
        <Stack.Screen name="ChiTietChuyenTien" component={ChiTietChuyenTien} options={{headerShown: false}}/>
        <Stack.Screen name="ThanhToanAnToan" component={ThanhToanAnToan} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

