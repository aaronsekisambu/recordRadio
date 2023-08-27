import React from 'react';
import { Text } from 'components';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, Icon, Layout, Avatar } from '@ui-kitten/components';

import { IPodcast } from './types';
import { useLayout } from 'hooks';

interface PodcastItemProps {
  style?: ViewStyle;
  item: IPodcast;
  index: number;
  onPress?(): void;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ item, index, style }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { title, date, description, time, avatar, name } = item;

  return (
    <View style={[styles.container, { width: width - 24 }, style]}>
      <View style={styles.top}>
        {index === 0 && (
          <Layout level="success" style={styles.iconView}>
            <Icon
              pack="assets"
              name="play"
              style={[styles.icon, { tintColor: theme['color-basic-1100'] }]}
            />
          </Layout>
        )}
      </View>
      <Layout level={index === 1 ? 'primary' : '2'} style={styles.box}>
        <Text category="h4" status={index === 1 ? 'white' : 'basic'}>
          {title}
        </Text>
        <Text marginTop={8} status={index === 1 ? 'white' : 'basic'}>
          {description}
        </Text>
        <View style={styles.flex} />
        <View style={styles.row}>
          <Avatar size="16" source={avatar} />
          <Text marginLeft={8} category="h4" style={{ color: theme['color-basic-900'] }}>
            {name}
          </Text>
        </View>
        <Text status="placeholder" marginTop={4}>
          {date} - {time} read
        </Text>
      </Layout>
    </View>
  );
};

export default PodcastItem;

const styles = StyleSheet.create({
  container: {},
  box: {
    padding: 24,
    borderRadius: 24,
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
    alignItems: 'center',
    marginTop: 24,
  },
  top: {
    width: 40,
    height: 40,
    marginBottom: -20,
    zIndex: 1,
    marginLeft: 24,
  },
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  flex: {
    flex: 1,
  },
});
