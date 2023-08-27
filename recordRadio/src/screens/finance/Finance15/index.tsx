import React, { memo } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
  Icon,
  Button,
} from '@ui-kitten/components';

// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';

// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, VStack, HStack } from 'components';
import ProgressBar from 'components/ProgressBar';
import { Images } from 'assets/images';
import MemberItem from './MemberItem';
import TransactionItem from './TransactionItem';

const Finance15 = memo(() => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const data = { amount: 5680, goal: 23468, timeLeft: '64 days left' };
  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        style={[styles.topNavigation, { paddingTop: top + 8 }]}
        alignment="center"
        appearance="control"
        accessoryLeft={<NavigationAction />}
        title={
          <Text category="h5" marginTop={top + 4} marginBottom={8}>
            {'Buy House'}
          </Text>
        }
        accessoryRight={
          <TouchableOpacity>
            <Icon pack="eva" name="edit-outline" style={styles.edit} />
          </TouchableOpacity>
        }
      />
      <Content contentContainerStyle={styles.contentContainer}>
        <VStack style={styles.header}>
          <HStack itemsCenter mb={8}>
            <Icon pack="assets" name="map" style={styles.map} />
            <Text category="h4">{((data.amount / data.goal) * 100).toFixed(0)}%</Text>
          </HStack>
          <ProgressBar
            progress={data.amount / data.goal}
            containColor="#FFFFFF20"
            progressColor="#FFFFFF"
          />
          <HStack mv={16} itemsCenter>
            <HStack itemsCenter>
              <Text category="h6">
                {data.amount.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                })}
              </Text>
              <Text category="h6" opacity={0.5}>
                /
                {data.goal.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                })}
              </Text>
            </HStack>
            <Text category="body">{data.timeLeft}</Text>
          </HStack>
        </VStack>
        <VStack style={styles.content} level="1">
          <HStack mt={24} itemsCenter mh={24}>
            <Text category="h4">{'Member (4)'}</Text>
            <HStack itemsCenter gap={8}>
              <Button
                size="tiny"
                children={'Invite'}
                accessoryRight={<Icon pack="assets" name="add-user" />}
              />
              <Icon pack="assets" name="caret-right" style={styles.caretIcon} />
            </HStack>
          </HStack>
          <Content horizontal contentContainerStyle={styles.contentMember}>
            {MEMBERS.map((member, index) => {
              return <MemberItem key={index} data={member} />;
            })}
          </Content>
        </VStack>
        <HStack mh={24} itemsCenter>
          <Text category="h4">Transaction History</Text>
          <Icon pack="assets" name="caret-right" style={styles.caretIcon} />
        </HStack>
        <VStack gap={24} mt={24}>
          {Transactions.map((item, index) => {
            return <TransactionItem key={index} data={item} />;
          })}
        </VStack>
      </Content>
      <VStack style={[styles.bottom, { paddingBottom: bottom + 12 }]}>
        <Button children={'Add money'} accessoryLeft={<Icon pack="assets" name="plus" />} />
      </VStack>
    </Container>
  );
});

export default Finance15;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    backgroundColor: 'color-primary-default',
  },
  contentContainer: {
    paddingBottom: 120,
  },
  edit: {
    width: 28,
    height: 28,
    tintColor: 'text-basic-color',
  },
  topNavigation: {
    backgroundColor: 'color-primary-default',
    paddingBottom: 12,
  },
  map: {
    width: 32,
    height: 32,
  },
  content: {
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  caretIcon: {
    width: 20,
    height: 20,
    tintColor: 'text-primary-color',
  },
  contentMember: {
    paddingHorizontal: 24,
    marginTop: 12,
    marginBottom: 20,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 24,
    right: 24,
  },
});
const MEMBERS = [
  { avatar: Images.avatar.avatar_02, name: 'Cameron William', amount: 5680, percent: 30 / 100 },
  { avatar: Images.avatar.avatar_03, name: 'Ronald Richards', amount: 5680, percent: 60 / 100 },
  { avatar: Images.avatar.avatar_04, name: 'Kathryn Murphy', amount: 5680, percent: 50 / 100 },
  { avatar: Images.avatar.avatar_05, name: 'Robert Fox', amount: 5680, percent: 50 / 100 },
];
const Transactions = [
  {
    avatar: Images.avatar.avatar_02,
    name: 'Add money',
    amount: 15.4,
    time: '10/10/2022 06:27',
    owner: true,
  },
  { avatar: Images.avatar.avatar_03, name: 'Add money', amount: 15.4, time: '10/10/2022 06:27' },
  { avatar: Images.avatar.avatar_05, name: 'Add money', amount: 15.4, time: '10/10/2022 06:27' },
  { avatar: Images.avatar.avatar_04, name: 'Add money', amount: 15.4, time: '10/10/2022 06:27' },
  { avatar: Images.avatar.avatar_06, name: 'Add money', amount: 15.4, time: '10/10/2022 06:27' },
  { avatar: Images.avatar.avatar_07, name: 'Add money', amount: 15.4, time: '10/10/2022 06:27' },
  { avatar: Images.avatar.avatar_08, name: 'Add money', amount: 15.4, time: '10/10/2022 06:27' },
];
