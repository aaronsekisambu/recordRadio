import React from 'react';
import { Text } from 'components';
import { Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { useTheme, Layout } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import { IPost } from './types';

interface PostHorizontalProps {
  style?: ViewStyle;
  item: IPost;
  onPress?(): void;
}

const PostHorizontal: React.FC<PostHorizontalProps> = ({ item, style, onPress }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { image, title, date, description } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        { width: width - 24, backgroundColor: theme['background-basic-color-2'] },
        style,
      ]}
      onPress={onPress}>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
      <Layout level="primary" style={styles.box}>
        <Text category="c2" status="white">
          Crypto
        </Text>
      </Layout>
      <Text category="h4" marginTop={16}>
        {title}
      </Text>
      <Text category="c1" status="platinum" marginTop={8}>
        {date}
      </Text>
      <Text marginTop={8}>{description}</Text>
    </TouchableOpacity>
  );
};

export default PostHorizontal;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 16,
  },
  box: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 16,
  },
});
