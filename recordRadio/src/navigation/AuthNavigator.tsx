import * as React from 'react';
import {AuthStackParamList} from 'types/navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthIntro from 'screens/Auth/AuthIntro';
import Auth01 from 'screens/Auth/Auth01';
import Auth02 from 'screens/Auth/Auth02';
import Auth03 from 'screens/Auth/Auth03';
import Auth04 from 'screens/Auth/Auth04';
import Auth05 from 'screens/Auth/Auth05';
import Auth06 from 'screens/Auth/Auth06';
import Auth07 from 'screens/Auth/Auth07';
import Auth08 from 'screens/Auth/Auth08';
import Auth09 from 'screens/Auth/Auth09';
import Auth10 from 'screens/Auth/Auth10';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthIntro">
      <Stack.Screen name="AuthIntro" component={AuthIntro} />
      <Stack.Screen name="Auth01" component={Auth01} />
      <Stack.Screen name="Auth02" component={Auth02} />
      <Stack.Screen name="Auth03" component={Auth03} />
      <Stack.Screen name="Auth04" component={Auth04} />
      <Stack.Screen name="Auth05" component={Auth05} />
      <Stack.Screen name="Auth06" component={Auth06} />
      <Stack.Screen name="Auth07" component={Auth07} />
      <Stack.Screen name="Auth08" component={Auth08} />
      <Stack.Screen name="Auth09" component={Auth09} />
      <Stack.Screen name="Auth10" component={Auth10} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
