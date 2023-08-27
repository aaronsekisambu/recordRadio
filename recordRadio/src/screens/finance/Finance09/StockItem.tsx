import React from 'react';
import { StyleSheet, ViewStyle, TouchableOpacity, Image, View } from 'react-native';
import { useTheme } from '@ui-kitten/components';

import { Text } from 'components';
import { IStockHot } from './types';
import { Images } from 'assets/images';

interface StockItemProps {
  style?: ViewStyle;
  onPress?(): void;
  item: IStockHot;
}

const StockItem: React.FC<StockItemProps> = ({ style, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.container, style]}>
      <View style={styles.content}>
        <View style={[styles.box, { backgroundColor: theme['color-success-500'] }]} />
        <View>
          <Text category="h6">AAPL</Text>
          <Text category="footnote" status="platinum" marginTop={4}>
            Apple
          </Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <Image source={Images.line} style={styles.line} />
      </View>
      <View style={styles.right}>
        <Text category="h6">$1,246.80</Text>
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
    </TouchableOpacity>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 48,
    height: 48,
    aspectRatio: 1 / 1,
    borderRadius: 16,
    marginRight: 8,
  },
  line: {
    width: '100%',
    height: 26,
  },
  percent: {
    borderRadius: 16,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4,
  },
  right: {
    flex: 4,
    alignItems: 'flex-end',
  },
});
