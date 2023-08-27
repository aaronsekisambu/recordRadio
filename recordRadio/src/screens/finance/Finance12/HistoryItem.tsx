import React from 'react';
import { Text } from 'components';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { useTheme, Layout } from '@ui-kitten/components';

import { IHistory } from './types';

interface TaskItemProps {
  style?: ViewStyle;
  item: IHistory;
  onPress?(): void;
}

const HistoryItem: React.FC<TaskItemProps> = ({ style, item, onPress }) => {
  const theme = useTheme();
  const { name, date, label, point } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.box}>
          <Layout level="3" style={styles.box1}>
            <Text category="c2">{label}</Text>
          </Layout>
          <Text category="h5">{name}</Text>
        </View>
        <Text category="c1" status="platinum" marginTop={4}>
          {date}
        </Text>
      </View>
      <Layout level="success" style={styles.box2}>
        <Text category="h6" status="white">
          +{point}
        </Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1: {
    flexDirection: 'row',
    borderRadius: 4,
    paddingHorizontal: 8,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  box2: {
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
