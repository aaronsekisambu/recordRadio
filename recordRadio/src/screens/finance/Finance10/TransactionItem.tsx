import React from 'react';
import { View, Image, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@ui-kitten/components';

import { Text } from 'components';
import { ITransaction } from './types';

interface TransactionItemProps {
  style?: ViewStyle;
  item: ITransaction;
  onPress?(): void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ style, item, onPress }) => {
  const theme = useTheme();
  const { name, category, amount, created_at } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { borderBottomColor: theme['color-basic-1000'] }, style]}>
      <View style={styles.box}>
        <View style={[styles.icon, { backgroundColor: theme['color-basic-1000'] }]}>
          <Image source={{ uri: category.image }} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text category="h5" status="black">
            {name}
          </Text>
          <Text category="c1" status="platinum" marginTop={4}>
            {created_at}
          </Text>
        </View>
      </View>
      <Text category="h5" status="black">
        {amount}
      </Text>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 24,
    borderBottomWidth: 1,
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
