import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme, Icon } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import { LinearGradient } from 'expo-linear-gradient';

interface TabBarProps {
  style?: ViewStyle;
}

const TabBar: React.FC<TabBarProps> = ({ style }) => {
  const theme = useTheme();
  const { bottom } = useLayout();

  const [index, setIndex] = React.useState<number>(0);

  const icons = ['house-simple', 'calendar-blank', 'timer', 'user'];

  return (
    <LinearGradient
      colors={['#CFE1FD', '#FFFDE1']}
      start={{ x: 0.1, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={[styles.tabView, { height: bottom + 56, paddingBottom: bottom }, style]}>
      {icons.map((i, idx) => {
        return (
          <TouchableOpacity
            key={idx}
            activeOpacity={0.7}
            onPress={() => setIndex(idx)}
            style={styles.tab}>
            <Icon
              pack="assets"
              name={i}
              style={[
                styles.icon,
                {
                  tintColor:
                    index === idx ? theme['color-warning-500'] : theme['text-platinum-color'],
                },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
