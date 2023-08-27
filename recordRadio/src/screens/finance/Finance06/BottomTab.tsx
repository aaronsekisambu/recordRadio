import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme, Icon, Layout } from '@ui-kitten/components';
import { useLayout } from 'hooks';
import ThemeLogo from 'elements/App/ThemeLogo';

interface BottomTabProps {
  style?: ViewStyle;
}

const BottomTab: React.FC<BottomTabProps> = ({ style }) => {
  const theme = useTheme();
  const { bottom } = useLayout();

  const [index, setIndex] = React.useState<number>(0);

  const icons = ['house-simple', 'calendar-blank', 'tab', 'timer', 'user'];

  return (
    <Layout
      level="1"
      style={[styles.tabView, { height: bottom + 49, paddingBottom: bottom }, style]}>
      {icons.map((i, idx) => {
        return idx === 2 ? (
          <View style={styles.tab} key={idx}>
            <ThemeLogo />
          </View>
        ) : (
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
                    index === idx
                      ? theme['background-basic-color-11']
                      : theme['text-platinum-color'],
                },
              ]}
            />
            {index === idx && (
              <Layout
                style={[styles.dot, { backgroundColor: theme['background-basic-color-11'] }]}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </Layout>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 8,
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
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    position: 'absolute',
    top: 0,
  },
});
