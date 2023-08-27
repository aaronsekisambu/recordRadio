import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ReadingStackParamList } from 'types/navigation-types';

import ReadingIntro from 'screens/reading/ReadingIntro';
import Reading01 from 'screens/reading/Reading01';
import Reading02 from 'screens/reading/Reading02';
import Reading03 from 'screens/reading/Reading03';
import Reading04 from 'screens/reading/Reading04';
import Reading05 from 'screens/reading/Reading05';
import Reading06 from 'screens/reading/Reading06';
import Reading07 from 'screens/reading/Reading07';
import Reading08 from 'screens/reading/Reading08';
import Reading09 from 'screens/reading/Reading09';
import Reading10 from 'screens/reading/Reading10';

const Stack = createNativeStackNavigator<ReadingStackParamList>();

const ReadingNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ReadingIntro">
      <Stack.Screen name="ReadingIntro" component={ReadingIntro} />
      <Stack.Screen name="Reading01" component={Reading01} />
      <Stack.Screen name="Reading02" component={Reading02} />
      <Stack.Screen name="Reading03" component={Reading03} />
      <Stack.Screen name="Reading04" component={Reading04} />
      <Stack.Screen name="Reading05" component={Reading05} />
      <Stack.Screen name="Reading06" component={Reading06} />
      <Stack.Screen name="Reading07" component={Reading07} />
      <Stack.Screen name="Reading08" component={Reading08} />
      <Stack.Screen name="Reading09" component={Reading09} />
      <Stack.Screen name="Reading10" component={Reading10} />
    </Stack.Navigator>
  );
};
export default ReadingNavigator;
