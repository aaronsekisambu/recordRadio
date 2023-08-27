import React from 'react';
import { StyleSheet, ViewStyle, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@ui-kitten/components';

import { Text } from 'components';
import { IStockHot } from './types';
import { Images } from 'assets/images';

interface StockHotItemProps {
  style?: ViewStyle;
  onPress?(): void;
  item: IStockHot;
}

const StockHotItem: React.FC<StockHotItemProps> = ({ style, onPress, item }) => {
  const theme = useTheme();
  const { name } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}>
      <Text category="subhead">{name}</Text>
      <Text category="h6" marginTop={24}>
        $33,680.16
      </Text>
      <Text category="footnote" style={{ color: theme['color-success-500'] }}>
        +14%
      </Text>
      <Image source={Images.line} style={styles.line} />
    </TouchableOpacity>
  );
};

export default StockHotItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    flex: 1,
  },
  line: {
    marginTop: 16,
    width: '100%',
    height: 26,
  },
});
