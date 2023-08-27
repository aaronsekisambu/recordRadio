import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Text } from 'components';
import { Layout, useTheme } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface TabBarProps {
  style?: ViewStyle;
  data: string[];
  selectedTab: number;
  onPress?(index: number): void;
}

const TabBar: React.FC<TabBarProps> = ({ style, selectedTab, data, onPress }) => {
  const theme = useTheme();
  const { width } = useLayout();

  const TAB_WIDTH = (width - 2 * 20) / data.length;

  const translate = useSharedValue(0);

  React.useEffect(() => {
    translate.value = withTiming(selectedTab * TAB_WIDTH, { duration: 300 });
  }, [selectedTab]);

  const animated = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translate.value }],
      width: TAB_WIDTH,
      backgroundColor: theme['color-primary-500'],
      position: 'absolute',
      height: 34,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      top: 2,
      left: 3,
    };
  });

  return (
    <Layout
      level="2"
      style={[styles.tabView, { borderColor: theme['border-basic-color-3'] }, style]}>
      {data.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onPress && onPress(index)}
          key={index}
          style={styles.tab}>
          <Text status="platinum" category="footnote">
            {item}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View style={animated}>
        <Text status="white" category="footnote">
          {data[selectedTab]}
        </Text>
      </Animated.View>
    </Layout>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 12,
    borderWidth: 1,
    height: 40,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
