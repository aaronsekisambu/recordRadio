import React from 'react';
import { View } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { useStyleSheet, StyleService, Avatar, Icon } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { HStack, Text, VStack } from 'components';
// ----------------------------- @Types -----------------------------------
interface TransactionItemProps {
  avatar: string;
  name: string;
  amount: number;
  time: string;
  owner?: boolean;
}

const TransactionItem = ({ data }: { data: TransactionItemProps }) => {
  const styles = useStyleSheet(themedStyles);
  const { amount, avatar, name, time, owner } = data;
  return (
    <View style={styles.container}>
      <HStack itemsCenter gap={12}>
        <VStack>
          <Avatar source={avatar} size="small" />
          {owner && owner === true && (
            <VStack style={styles.crownLayout}>
              <Icon pack="assets" name="crown" style={styles.crown} />
            </VStack>
          )}
        </VStack>
        <VStack gap={8}>
          <Text category="body">{name}</Text>
          <Text category="c1" opacity={0.5}>
            {time}
          </Text>
        </VStack>
      </HStack>
      <Text category="h5">
        {amount.toLocaleString('en-US', {
          currency: 'USD',
          style: 'currency',
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </Text>
    </View>
  );
};

export default TransactionItem;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  crown: {
    width: 12,
    height: 12,
  },
  crownLayout: {
    backgroundColor: 'color-primary-default',
    borderRadius: 99,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
