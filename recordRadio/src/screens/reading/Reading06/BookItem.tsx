import React from 'react';
import { Text } from 'components';
import { View, Image, StyleSheet, ViewStyle } from 'react-native';

import { IBook } from './types';

interface BookItemProps {
  style?: ViewStyle;
  item: IBook;
}

const BookItem: React.FC<BookItemProps> = ({ item, style }) => {
  const { image, title } = item;

  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text marginTop={8} category="h6">
        {title}
      </Text>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    width: 132,
  },
  image: {
    width: '100%',
    height: 175,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
