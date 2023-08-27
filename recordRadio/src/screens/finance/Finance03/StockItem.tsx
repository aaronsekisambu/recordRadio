import React from 'react';
import { Text } from 'components';
import { View, ViewStyle, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import { IStock } from './types';

interface StockItemProps {
  style?: ViewStyle;
  item: IStock;
  onPress?(): void;
}

const StockItem: React.FC<StockItemProps> = ({ style, onPress, item }) => {
  const theme = useTheme();
  const { width } = useLayout();

  const {
    category: { color, image },
  } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        {
          width: width - 87,
          backgroundColor: theme['background-basic-color-2'],
        },
        style,
      ]}
      onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={[styles.categoryView, { backgroundColor: color }]}>
            <Image source={{ uri: image }} style={styles.category} />
          </View>
          <Text marginLeft={8} category="body" status="white">
            Stock
          </Text>
        </View>
        <View
          style={[
            styles.percent,
            {
              backgroundColor: theme['color-primary-500'],
            },
          ]}>
          <Text category="c1" status="white">
            +25%
          </Text>
        </View>
      </View>
      <View style={[styles.line, { backgroundColor: theme['color-basic-1100'] }]} />
      <View style={styles.bottom}>
        <View>
          <Text category="subhead" status="platinum">
            Balance
          </Text>
          <Text category="h6" marginTop={4}>
            $800,000
          </Text>
        </View>
        <View>
          <Text category="subhead" status="platinum" right>
            Profits
          </Text>
          <Text category="h6" marginTop={4} right>
            +$20,000
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderRadius: 24,
  },
  line: {
    marginTop: 24,
    opacity: 0.1,
    height: 1,
  },
  bottom: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  percent: {
    borderRadius: 16,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  category: {
    width: 24,
    height: 24,
  },
  categoryView: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
});
