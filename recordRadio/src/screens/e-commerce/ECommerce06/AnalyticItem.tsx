import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle, Image } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { Text } from 'components';

import { IAnalytic } from './types';

interface AnalyticItemProps {
  style?: ViewStyle;
  item: IAnalytic;
  onPress?(): void;
}

const AnalyticItem: React.FC<AnalyticItemProps> = ({ item, onPress, style }) => {
  const theme = useTheme();
  const { image, title, number } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text marginTop={8}>{title}</Text>
      <Text category="h4" marginTop={24}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};

export default AnalyticItem;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    borderRadius: 24,
  },
  image: {
    width: 32,
    height: 32,
  },
});
