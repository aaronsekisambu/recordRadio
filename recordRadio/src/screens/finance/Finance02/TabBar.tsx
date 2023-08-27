import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme, Icon, Layout } from '@ui-kitten/components';
import { useLayout } from 'hooks';

interface TabBarProps {
  style?: ViewStyle;
}

const TabBar: React.FC<TabBarProps> = ({ style }) => {
  const theme = useTheme();
  const { bottom, width } = useLayout();

  return (
    <Layout
      level="3"
      style={[
        styles.tabView,
        {
          borderColor: theme['background-basic-color-10'],
          bottom: bottom + 4,
          width: width - 68 * 2,
        },
        style,
      ]}>
      <TouchableOpacity activeOpacity={0.7} style={styles.tab}>
        <Icon
          pack="assets"
          name="receipt"
          style={[styles.icon, { tintColor: theme['text-platinum-color'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.add,
          {
            borderColor: theme['color-basic-100'],
            backgroundColor: theme['color-primary-500'],
          },
        ]}>
        <Icon
          pack="assets"
          name="plus"
          style={[styles.icon, { tintColor: theme['text-warning-color'] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.tab}>
        <Icon
          pack="assets"
          name="user"
          style={[styles.icon, { tintColor: theme['text-platinum-color'] }]}
        />
      </TouchableOpacity>
    </Layout>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 90,
    height: 56,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  icon: {
    width: 20,
    height: 20,
  },
  add: {
    width: 56,
    height: 56,
    borderRadius: 56,
    borderWidth: 4,
    marginBottom: 16,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
