import React from 'react';
import { View, Image, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, useTheme } from '@ui-kitten/components';

import { Text } from 'components';
import { ITransaction } from './types';

interface TransactionItemProps {
  style?: ViewStyle;
  item: ITransaction;
  onPress?(): void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ style, item, onPress }) => {
  const theme = useTheme();
  const { name, category, amount } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}>
      <View style={styles.box}>
        <Layout level="3" style={styles.icon}>
          <Image source={{ uri: category.image }} style={styles.image} />
        </Layout>
        <View style={styles.content}>
          <Text category="h5">{name}</Text>
          <Text category="c1" status="platinum" marginTop={4}>
            Subtitle
          </Text>
        </View>
      </View>
      <Text category="h5">{amount}</Text>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 24,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
