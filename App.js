import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home';
import KetQuaGiaoDich from './src/views/KetQuaGiaoDich'
import ChonUuDai from './src/views/ChonUuDai'
import ChuyenTien from './src/views/ChuyenTien'
import ChiTietChuyenTien from './src/views/ChiTietChuyenTien'
import ThanhToanAnToan from './src/views/ThanhToanAnToan'
import TestGioHienTai from './src/views/TestGioHienTai'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ChuyenTien' >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="KetQuaGiaoDich" component={KetQuaGiaoDich} options={{headerShown: false}}/>
        <Stack.Screen name="ChonUuDai" component={ChonUuDai} options={{headerShown: false}}/>
        <Stack.Screen name="ChuyenTien" component={ChuyenTien} options={{headerShown: false}}/>
        <Stack.Screen name="ChiTietChuyenTien" component={ChiTietChuyenTien} options={{headerShown: false}}/>
        <Stack.Screen name="ThanhToanAnToan" component={ThanhToanAnToan} options={{headerShown: false}}/>
        {/* <Stack.Screen name="TestGioHienTai" component={TestGioHienTai} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

