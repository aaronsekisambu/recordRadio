import React from 'react';
import { View, Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { useStyleSheet, StyleService, Avatar } from '@ui-kitten/components';

// ----------------------------- Components -----------------------------------
import { HStack, Text, VStack } from 'components';
import { useLayout } from 'hooks';
import LinearProgress from './LinearProgress';
// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
interface MemberItemProps {
  avatar: string;
  name: string;
  amount: number;
  percent: number;
}

const MemberItem = ({ data }: { data: MemberItemProps }) => {
  const { avatar, name, amount, percent } = data;
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack style={styles.container} padding={16} level="2" mr={8} border={16}>
      <HStack itemsCenter>
        {/* @ts-ignore */}
        <Avatar source={avatar} style={styles.avatar} />
        <VStack ph={6} pv={4} style={styles.percent}>
          <Text category="c1">{(percent * 100).toFixed(0)}%</Text>
        </VStack>
      </HStack>
      <Text category="h6" maxWidth={96 * (width / 375)} marginBottom={8}>
        {name}
      </Text>
      <LinearProgress progress={percent * 100} />
      <Text category="c1">
        {amount.toLocaleString('en-US', {
          currency: 'USD',
          style: 'currency',
          minimumFractionDigits: 2,
        })}
      </Text>
    </VStack>
  );
};

export default MemberItem;

const themedStyles = StyleService.create({
  container: {
    minWidth: 128,
    gap: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    marginRight: 32,
  },
  percent: {
    backgroundColor: 'color-primary-default',
    borderRadius: 8,
  },
});
