import React from 'react';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { CurrencyText, Text } from 'components';
import { useTheme } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import { IProduct } from './types';

interface ProductItemProps {
  style?: ViewStyle;
  item: IProduct;
  onPress?(): void;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, onPress, style }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { name, rate, sales, min_amount, max_amount, image } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        { width: (width - 16) / 2, backgroundColor: theme['background-basic-color-2'] },
        style,
      ]}
      onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text category="h5" marginTop={24}>
        {name}
      </Text>
      <View style={styles.row}>
        <CurrencyText category="h4" status="warning">
          {min_amount}
        </CurrencyText>
        <Text category="subhead" status="placeholder">
          ⭐ {rate}/5
        </Text>
      </View>
      <Text category="subhead" status="placeholder" marginTop={8}>
        🛵 {sales} Sales
      </Text>
      <Text category="subhead" marginTop={8}>
        💸 ${max_amount}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  image: {
    width: 88,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
