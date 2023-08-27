import React from 'react';
import { Text } from 'components';
import { useTheme } from '@ui-kitten/components';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';

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
      <View style={styles.content}>
        <Text category="h5">{title}</Text>
        <Text category="c1" status="platinum" marginTop={4}>
          {date}
        </Text>
      </View>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    borderRadius: 16,
  },
  content: {
    flex: 1,
    marginRight: 24,
  },
  image: {
    width: 80,
    height: 64,
  },
});
