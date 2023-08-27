import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FinanceStackParamList } from 'types/navigation-types';

import FinanceIntro from 'screens/finance/FinanceIntro';
import Finance01 from 'screens/finance/Finance01';
import Finance02 from 'screens/finance/Finance02';
import Finance03 from 'screens/finance/Finance03';
import Finance04 from 'screens/finance/Finance04';
import Finance05 from 'screens/finance/Finance05';
import Finance06 from 'screens/finance/Finance06';
import Finance07 from 'screens/finance/Finance07';
import Finance08 from 'screens/finance/Finance08';
import Finance09 from 'screens/finance/Finance09';
import Finance10 from 'screens/finance/Finance10';
import Finance11 from 'screens/finance/Finance11';
import Finance12 from 'screens/finance/Finance12';
import Finance13 from 'screens/finance/Finance13';
import Finance14 from 'screens/finance/Finance14';
import Finance15 from 'screens/finance/Finance15';
import Finance16 from 'screens/finance/Finance16';
import Finance17 from 'screens/finance/Finance17';
import Finance18 from 'screens/finance/Finance18';

const Stack = createNativeStackNavigator<FinanceStackParamList>();

const FinanceNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="FinanceIntro">
      <Stack.Screen name="FinanceIntro" component={FinanceIntro} />
      <Stack.Screen name="Finance01" component={Finance01} />
      <Stack.Screen name="Finance02" component={Finance02} />
      <Stack.Screen name="Finance03" component={Finance03} />
      <Stack.Screen name="Finance04" component={Finance04} />
      <Stack.Screen name="Finance05" component={Finance05} />
      <Stack.Screen name="Finance06" component={Finance06} />
      <Stack.Screen name="Finance07" component={Finance07} />
      <Stack.Screen name="Finance08" component={Finance08} />
      <Stack.Screen name="Finance09" component={Finance09} />
      <Stack.Screen name="Finance10" component={Finance10} />
      <Stack.Screen name="Finance11" component={Finance11} />
      <Stack.Screen name="Finance12" component={Finance12} />
      <Stack.Screen name="Finance13" component={Finance13} />
      <Stack.Screen name="Finance14" component={Finance14} />
      <Stack.Screen name="Finance15" component={Finance15} />
      <Stack.Screen name="Finance16" component={Finance16} />
      <Stack.Screen name="Finance17" component={Finance17} />
      <Stack.Screen name="Finance18" component={Finance18} />
    </Stack.Navigator>
  );
};
export default FinanceNavigator;
