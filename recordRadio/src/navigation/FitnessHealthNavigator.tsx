import * as React from 'react';
import { FitnessHealthStackParamList } from 'types/navigation-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FitnessHealth01 from 'screens/FitnessHealth/FitnessHealth01';
import FitnessHealth02 from 'screens/FitnessHealth/FitnessHealth02';
import FitnessHealth03 from 'screens/FitnessHealth/FitnessHealth03';
import FitnessHealth04 from 'screens/FitnessHealth/FitnessHealth04';
import FitnessHealth05 from 'screens/FitnessHealth/FitnessHealth05';
import FitnessHealth06 from 'screens/FitnessHealth/FitnessHealth06';
import FitnessHealth07 from 'screens/FitnessHealth/FitnessHealth07';
import FitnessHealth08 from 'screens/FitnessHealth/FitnessHealth08';
import FitnessHealth09 from 'screens/FitnessHealth/FitnessHealth09';
import FitnessHealth10 from 'screens/FitnessHealth/FitnessHealth10';
import FitnessHealthIntro from 'screens/FitnessHealth/FitnessHealthIntro';


const Stack = createNativeStackNavigator<FitnessHealthStackParamList>();

const FitnessHealthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="FitnessHealthIntro">
      <Stack.Screen name="FitnessHealthIntro" component={FitnessHealthIntro} />
      <Stack.Screen name="FitnessHealth01" component={FitnessHealth01} />
      <Stack.Screen name="FitnessHealth02" component={FitnessHealth02} />
      <Stack.Screen name="FitnessHealth03" component={FitnessHealth03} />
      <Stack.Screen name="FitnessHealth04" component={FitnessHealth04} />
      <Stack.Screen name="FitnessHealth05" component={FitnessHealth05} />
      <Stack.Screen name="FitnessHealth06" component={FitnessHealth06} />
      <Stack.Screen name="FitnessHealth07" component={FitnessHealth07} />
      <Stack.Screen name="FitnessHealth08" component={FitnessHealth08} />
      <Stack.Screen name="FitnessHealth09" component={FitnessHealth09} />
      <Stack.Screen name="FitnessHealth10" component={FitnessHealth10} />
    </Stack.Navigator>
  );
};
export default FitnessHealthNavigator;
