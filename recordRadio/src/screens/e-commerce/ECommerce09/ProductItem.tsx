import React from 'react';
import { Text } from 'components';
import { Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
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
  const { name, image } = item;

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
      <Text category="c1" status="warning" marginTop={12}>
        +15% this month
      </Text>
      <Text category="subhead" status="placeholder" marginTop={8}>
        🛵️ 35 Order
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
});
