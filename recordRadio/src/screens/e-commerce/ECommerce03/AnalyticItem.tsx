import React from 'react';
import { Text } from 'components';
import { StyleSheet, TouchableOpacity, ViewStyle, Image } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import { IAnalytic } from './types';

interface AnalyticItemProps {
  style?: ViewStyle;
  item: IAnalytic;
  onPress?(): void;
  is_active: boolean;
}

const AnalyticItem: React.FC<AnalyticItemProps> = ({ item, onPress, style, is_active }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { image, title, number } = item;

  const itemWidth = (width - (4 + 4 + 47)) / 2;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {
          width: itemWidth,
          backgroundColor: is_active
            ? theme['color-primary-500']
            : theme['background-basic-color-2'],
        },
        style,
      ]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text marginTop={8} status={is_active ? 'white' : 'basic'}>
        {title}
      </Text>
      <Text category="h4" marginTop={24} status={is_active ? 'white' : 'basic'}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};

export default AnalyticItem;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    aspectRatio: 1 / 1,
    borderRadius: 24,
  },
  image: {
    width: 32,
    height: 32,
  },
});
