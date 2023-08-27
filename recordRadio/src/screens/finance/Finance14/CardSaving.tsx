import React from 'react';
// ----------------------------- UI kitten -----------------------------------
import { useStyleSheet, StyleService, Avatar } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { HStack, Text, VStack } from 'components';
import ProgressBar from 'components/ProgressBar';
import { useLayout } from 'hooks';
import { ImageRequireSource } from 'react-native';
// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
interface ICardSavingProps {
  id: string;
  title: string;
  symbol: string;
  members: {
    avatar: string|ImageRequireSource;
  }[];
  goal: number;
  amount: number;
  timeLeft: string;
  color: string;
}

const CardSaving = ({ data }: { data: ICardSavingProps }) => {
  const { timeLeft, title, symbol, members, goal, amount, color } = data;
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <VStack style={[styles.card, { width: width - 32, backgroundColor: color }]} gap={8}>
      {/* Top Card */}
      <HStack itemsCenter mb={8}>
        <Text style={styles.symbol}>{symbol}</Text>
        <HStack gap={4}>
          {members.map((member, i) => {
            return (
              // @ts-ignore
              <Avatar source={member.avatar} style={styles.avatarMember} key={i} />
            );
          })}
        </HStack>
      </HStack>
      {/* Title */}
      <HStack itemsCenter>
        <Text category="h5">{title}</Text>
        <Text category="h4">{(amount / goal) * 100}%</Text>
      </HStack>
      {/*  Progress*/}
      <ProgressBar progress={amount / goal} containColor="#FFFFFF20" progressColor="#FFFFFF" />
      {/* Footer */}
      <HStack itemsCenter>
        <HStack itemsCenter>
          <Text category="h6">
            {amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
          <Text category="subhead" style={{ color: '#C1D7D7' }}>
            /
            {goal.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </HStack>
        <Text category="subhead">{timeLeft}</Text>
      </HStack>
    </VStack>
  );
};

export default CardSaving;

const themedStyles = StyleService.create({
  card: {
    borderRadius: 16,
    padding: 16,
  },
  avatarMember: {
    width: 32,
    height: 32,
  },
  symbol: {
    fontSize: 40,
    lineHeight: 48,
  },
});
