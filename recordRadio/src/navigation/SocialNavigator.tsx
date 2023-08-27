import * as React from 'react';
import { SocialStackParamList } from 'types/navigation-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SocialIntro from 'screens/Social/SocialIntro';
import Social01 from 'screens/Social/Social01';
import Social02 from 'screens/Social/Social02';
import Social03 from 'screens/Social/Social03';
import Social04 from 'screens/Social/Social04';
import Social05 from 'screens/Social/Social05';
import Social06 from 'screens/Social/Social06';
import Social07 from 'screens/Social/Social07';
import Social08 from 'screens/Social/Social08';
import Social09 from 'screens/Social/Social09';
import Social10 from 'screens/Social/Social10';
import Social11 from 'screens/Social/Social11';
import Social12 from 'screens/Social/Social12';
import Social13 from 'screens/Social/Social13';
import Social14 from 'screens/Social/Social14';

const Stack = createNativeStackNavigator<SocialStackParamList>();

const SocialNavigator = React.memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SocialIntro">
      <Stack.Screen name="SocialIntro" component={SocialIntro} />
      <Stack.Screen name="Social01" component={Social01} />
      <Stack.Screen name="Social02" component={Social02} />
      <Stack.Screen name="Social03" component={Social03} />
      <Stack.Screen name="Social04" component={Social04} />
      <Stack.Screen name="Social05" component={Social05} />
      <Stack.Screen name="Social06" component={Social06} />
      <Stack.Screen name="Social07" component={Social07} />
      <Stack.Screen name="Social08" component={Social08} />
      <Stack.Screen name="Social09" component={Social09} />
      <Stack.Screen name="Social10" component={Social10} />
      <Stack.Screen name="Social11" component={Social11} />
      <Stack.Screen name="Social12" component={Social12} />
      <Stack.Screen name="Social13" component={Social13} />
      <Stack.Screen name="Social14" component={Social14} />
    </Stack.Navigator>
  );
});

export default SocialNavigator;
