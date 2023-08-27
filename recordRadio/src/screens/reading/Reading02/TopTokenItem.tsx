import React from 'react';
import { LinearGradientText, Text } from 'components';
import { Avatar, Layout } from '@ui-kitten/components';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { EType, ITopToken } from './types';

interface TopTokenItemProps {
  style?: ViewStyle;
  item: ITopToken;
}

const TopTokenItem: React.FC<TopTokenItemProps> = ({ item, style }) => {
  const { image, amount, type, volatility_value } = item;

  return (
    <View style={[styles.container, style]}>
      <Avatar size="16" source={{ uri: image }} />
      <LinearGradientText
        colors={['#CCE0FF', '#FFFDE4']}
        text={`$${amount}`}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        textStyle={styles.titleText}
      />
      <Layout level={type === EType.INCREASE ? 'success' : 'danger'} style={styles.box}>
        <Text category="c2" status="white">
          {type === EType.INCREASE ? '+' : '-'}
          {volatility_value}%
        </Text>
      </Layout>
    </View>
  );
};

export default TopTokenItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'SpaceGrotesk-Regular',
    marginHorizontal: 4,
  },
  box: {
    borderRadius: 12,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
});
