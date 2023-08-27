import React from 'react';
import { Text } from 'components';
import { View, Image, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { useTheme, Icon, Layout } from '@ui-kitten/components';

import { IPodcast } from './types';

interface PodcastItemProps {
  style?: ViewStyle;
  item: IPodcast;
  onPress?(): void;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ item, style, onPress }) => {
  const theme = useTheme();
  const { title, date, image } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text category="h5">{title}</Text>
        <View style={styles.flex} />
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
      </View>
    </TouchableOpacity>
  );
};

export default PodcastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  image: {
    width: 80,
    aspectRatio: 1 / 1,
    borderRadius: 8,
    marginRight: 24,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
