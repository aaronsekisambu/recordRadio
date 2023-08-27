import React from 'react';
import { Text } from 'components';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { useTheme, Icon, Layout } from '@ui-kitten/components';

import { IPost } from './types';

interface PostItemProps {
  style?: ViewStyle;
  item: IPost;
  onPress?(): void;
}

const PostItem: React.FC<PostItemProps> = ({ item, style, onPress }) => {
  const theme = useTheme();
  const { image, title, date } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={onPress}>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
      <Text category="h5" marginTop={12}>
        {title}
      </Text>
      <View style={styles.row}>
        <Text category="c1" status="platinum">
          {date}
        </Text>
        <Layout level="success" style={styles.iconView}>
          <Icon
            pack="assets"
            name="head-phone"
            style={[styles.icon, { tintColor: theme['color-basic-1100'] }]}
          />
        </Layout>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    flex: 1,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconView: {
    width: 24,
    height: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
});
