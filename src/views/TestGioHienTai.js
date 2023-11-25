import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());

  const updateCurrentTime = () => {
    setCurrentHour(new Date().getHours());
    setCurrentMinute(new Date().getMinutes());
  };

  return (
    <View>
      <Text>{`${currentHour}:${currentMinute}`}</Text>
      <Button title="Lấy giờ phút" onPress={updateCurrentTime} />
    </View>
  );
};

export default App;
