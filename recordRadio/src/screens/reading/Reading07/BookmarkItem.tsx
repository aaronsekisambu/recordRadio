import React from 'react';
import { Text } from 'components';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { useTheme, Icon, Layout } from '@ui-kitten/components';

import { IBookmark } from './types';

interface BookmarkItemProps {
  style?: ViewStyle;
  item: IBookmark;
  onPress?(): void;
}

const BookmarkItem: React.FC<BookmarkItemProps> = ({ item, style, onPress }) => {
  const theme = useTheme();
  const { title, image } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text category="h5">{title}</Text>
        <Text category="c1" status="platinum" marginTop={4}>
          Author
        </Text>
        <View style={styles.flex} />
        <View style={styles.row}>
          <Text category="c1">24 mins read</Text>
          <Layout level="success" style={styles.iconView}>
            <Icon
              pack="assets"
              name="head-phone"
              style={[styles.icon, { tintColor: theme['color-basic-1100'] }]}
            />
          </Layout>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookmarkItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
  },
  image: {
    width: 60,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconView: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
  flex: {
    flex: 1,
  },
});
