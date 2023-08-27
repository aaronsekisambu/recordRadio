import React from 'react';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { CurrencyText, Text } from 'components';
import { useTheme } from '@ui-kitten/components';

import { IProduct } from './types';

interface ProductItemProps {
  style?: ViewStyle;
  item: IProduct;
  onPress?(): void;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, onPress, style }) => {
  const theme = useTheme();
  const { name, rate, sales, min_amount, max_amount, image } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text category="h5">{name}</Text>
        <View style={styles.row1}>
          <CurrencyText category="h4" status="warning">
            {min_amount}
          </CurrencyText>
          <Text category="subhead" status="placeholder">
            ⭐ {rate}/5
          </Text>
        </View>
        <View style={styles.row1}>
          <Text category="subhead" status="placeholder">
            🛵 {sales} Sales
          </Text>
          <Text category="subhead" status="placeholder">
            💸 ${max_amount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    aspectRatio: 1 / 1,
    marginRight: 24,
  },
  content: {
    flex: 1,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
