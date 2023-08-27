import * as React from 'react';
import { FoodStackParamList } from 'types/navigation-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodIntro from 'screens/Food/FoodIntro';
import Food01 from 'screens/Food/Food01';
import Food02 from 'screens/Food/Food02';
import Food03 from 'screens/Food/Food03';
import Food04 from 'screens/Food/Food04';
import Food05 from 'screens/Food/Food05';
import Food06 from 'screens/Food/Food06';
import Food07 from 'screens/Food/Food07';
import Food08 from 'screens/Food/Food08';
import Food09 from 'screens/Food/Food09';
import Food10 from 'screens/Food/Food10';

const Stack = createNativeStackNavigator<FoodStackParamList>();

const FoodNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Food02">
      {/* <Stack.Screen name="FoodIntro" component={FoodIntro} /> */}
      {/* <Stack.Screen name="Food01" component={Food01} /> */}
      <Stack.Screen name="Food02" component={Food02} />
      <Stack.Screen name="Food03" component={Food03} />
      <Stack.Screen name="Food04" component={Food04} />
      <Stack.Screen name="Food05" component={Food05} />
      <Stack.Screen name="Food06" component={Food06} />
      <Stack.Screen name="Food07" component={Food07} />
      <Stack.Screen name="Food08" component={Food08} />
      <Stack.Screen name="Food09" component={Food09} />
      <Stack.Screen name="Food10" component={Food10} />
    </Stack.Navigator>
  );
};
export default FoodNavigator;
