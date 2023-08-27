import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, ViewStyle, View } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import Animated from 'react-native-reanimated';
import { useLayout } from 'hooks';
import { Text } from 'components';
import {LinearGradient} from 'expo-linear-gradient';

interface ITabBarProps {
  tabs: string[];
  level?: string;
  style?: ViewStyle;
  activeIndex: number;
  onChange(index: number): void;
}

const TabbarGradient = ({ style, activeIndex, onChange, tabs }: ITabBarProps) => {
  const theme = useTheme();
  const { width } = useLayout();
  const changeIndex = React.useCallback(
    (i: number) => {
      return onChange(i);
    },
    [activeIndex],
  );
  const refScrollView = React.useRef<ScrollView>(null);
  React.useEffect(() => {
    refScrollView.current?.scrollTo({
      x: activeIndex * 120 + 8 - (width - 250) / 2,
      animated: true,
    });
  }, [activeIndex]);
  return (
    <View>
      <ScrollView
        contentContainerStyle={[styles.container, style]}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={refScrollView}>
        {tabs.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => changeIndex(index)}>
              <LinearGradient
                colors={isActive ? ['#CFE1FD', '#FFFDE1'] : ['#122332', '#122332']}
                style={[styles.btn]}>
                <Text capitalize category="h5" status={isActive ? 'black' : 'platinum'}>
                  {item}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TabbarGradient;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 16,
    marginLeft: 16,
  },
  btn: {
    marginRight: 8,
    flexDirection: 'row',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 4,
  },
});
