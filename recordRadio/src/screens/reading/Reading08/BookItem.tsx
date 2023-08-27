import React from 'react';
import { Text } from 'components';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Icon, Layout } from '@ui-kitten/components';

import { IBook } from './types';

interface BookItemProps {
  style?: ViewStyle;
  item: IBook;
  onPress?(): void;
}

const BookItem: React.FC<BookItemProps> = ({ item, style, onPress }) => {
  const { image, name, time } = item;

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.container, style]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Layout level="success" style={styles.box}>
        <Text category="c2" uppercase>
          Free
        </Text>
      </Layout>
      <Text marginTop={8} category="h6">
        {name}
      </Text>
      <View style={styles.row}>
        <Text category="subhead" status="chambrey">
          {time}
        </Text>
        <Icon pack="assets" name="bookmarks" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 218,
    borderRadius: 12,
    overflow: 'hidden',
  },
  box: {
    borderRadius: 12,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: '#C0A975',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
