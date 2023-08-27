import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ECommerceStackParamList } from 'types/navigation-types';

import ECommerceIntro from 'screens/e-commerce/ECommerceIntro';
import ECommerce01 from 'screens/e-commerce/ECommerce01';
import ECommerce02 from 'screens/e-commerce/ECommerce02';
import ECommerce03 from 'screens/e-commerce/ECommerce03';
import ECommerce04 from 'screens/e-commerce/ECommerce04';
import ECommerce05 from 'screens/e-commerce/ECommerce05';
import ECommerce06 from 'screens/e-commerce/ECommerce06';
import ECommerce07 from 'screens/e-commerce/ECommerce07';
import ECommerce08 from 'screens/e-commerce/ECommerce08';
import ECommerce09 from 'screens/e-commerce/ECommerce09';
import ECommerce10 from 'screens/e-commerce/ECommerce10';

const Stack = createNativeStackNavigator<ECommerceStackParamList>();

const ECommerceNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ECommerceIntro">
      <Stack.Screen name="ECommerceIntro" component={ECommerceIntro} />
      <Stack.Screen name="ECommerce01" component={ECommerce01} />
      <Stack.Screen name="ECommerce02" component={ECommerce02} />
      <Stack.Screen name="ECommerce03" component={ECommerce03} />
      <Stack.Screen name="ECommerce04" component={ECommerce04} />
      <Stack.Screen name="ECommerce05" component={ECommerce05} />
      <Stack.Screen name="ECommerce06" component={ECommerce06} />
      <Stack.Screen name="ECommerce07" component={ECommerce07} />
      <Stack.Screen name="ECommerce08" component={ECommerce08} />
      <Stack.Screen name="ECommerce09" component={ECommerce09} />
      <Stack.Screen name="ECommerce10" component={ECommerce10} />
    </Stack.Navigator>
  );
};
export default ECommerceNavigator;
