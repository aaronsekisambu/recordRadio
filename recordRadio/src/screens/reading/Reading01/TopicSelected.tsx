import React from 'react';
import { Text } from 'components';
import { Layout } from '@ui-kitten/components';
import { StyleSheet, ViewStyle } from 'react-native';

import { ITopic } from '.';

interface TopicSelectedProps {
  style?: ViewStyle;
  item: ITopic;
}

const TopicSelected: React.FC<TopicSelectedProps> = ({ item, style }) => {
  const { name, emoji } = item;

  return (
    <Layout level="2" style={[styles.container, style]}>
      <Text category="subhead">
        {emoji} <Text status="placeholder">{name}</Text>
      </Text>
    </Layout>
  );
};

export default TopicSelected;

const styles = StyleSheet.create({
  container: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 12,
  },
});
