import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Avatar,
  ViewPager,
} from '@ui-kitten/components';

// ----------------------------- Assets -----------------------------------
import { Images } from 'assets/images';

// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, VStack, HStack } from 'components';
// ----------------------------- Elements -----------------------------------
import TabBar from './TabBar';
import BalanceCard from './BalanceCard';
import CardSaving from './CardSaving';

const Finance14 = memo(() => {
  const styles = useStyleSheet(themedStyles);

  const [selectedTab, setSelectedTab] = React.useState<number>(0);

  return (
    <Container style={styles.container}>
      <TopNavigation
        // @ts-ignore
        accessoryLeft={<Avatar source={Images.avatar.avatar_03} style={styles.avatar} />}
        accessoryRight={<NavigationAction icon="bell" />}
      />
      <Content contentContainerStyle={styles.content}>
        <BalanceCard balance="2.460" saving="15USD" />
        <VStack style={styles.contentPage} level="2" mt={24} gap={16} pb={24}>
          <HStack margin={16} mt={24}>
            <Text category="h4">Your Goal</Text>
            <HStack>
              {['Live', 'Finish'].map((tab, index) => {
                const isActive = selectedTab === index;
                return (
                  <TouchableOpacity
                    key={tab}
                    onPress={() => {
                      setSelectedTab(index);
                    }}
                    activeOpacity={0.7}
                    style={styles.tabButton}>
                    <Text category="h4" status={isActive ? 'warning' : 'platinum'}>
                      {tab}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </HStack>
          </HStack>
          <ViewPager
            style={{ flex: 1 }}
            swipeEnabled={false}
            onSelect={setSelectedTab}
            selectedIndex={selectedTab}>
            <VStack gap={8} style={styles.page}>
              {DATA_LIVE.map((item, index) => {
                return <CardSaving data={item} key={index} />;
              })}
            </VStack>
            <VStack style={styles.page}>
              <Text>{'Finish Page'}</Text>
            </VStack>
          </ViewPager>
        </VStack>
      </Content>
      <TabBar />
    </Container>
  );
});

export default Finance14;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 32,
    height: 32,
  },
  contentPage: {
    borderRadius: 24,
  },
  tabButton: {
    paddingHorizontal: 12,
  },
  content: {
    paddingBottom: 100,
    paddingTop: 20,
  },
  page: {
    width: '100%',
    paddingHorizontal: 16,
  },
});

const DATA_LIVE = [
  {
    id: '1',
    title: 'Travel anywhere',
    symbol: '🏠',
    members: [
      { avatar: Images.avatar.avatar_02 },
      { avatar: Images.avatar.avatar_03 },
      { avatar: Images.avatar.avatar_04 },
    ],
    goal: 2000,
    amount: 1246,
    timeLeft: '64 days left',
    color: '#429DF0',
  },
  {
    id: '1',
    title: 'Travel anywhere',
    symbol: '🏠',
    members: [
      { avatar: Images.avatar.avatar_02 },
      { avatar: Images.avatar.avatar_03 },
      { avatar: Images.avatar.avatar_04 },
    ],
    goal: 2000,
    amount: 1246,
    timeLeft: '64 days left',
    color: '#00CD50',
  },
  {
    id: '1',
    title: 'Travel anywhere',
    symbol: '🏠',
    members: [
      { avatar: Images.avatar.avatar_02 },
      { avatar: Images.avatar.avatar_03 },
      { avatar: Images.avatar.avatar_04 },
    ],
    goal: 2000,
    amount: 1246,
    timeLeft: '64 days left',
    color: '#CE8ABC',
  },
  {
    id: '1',
    title: 'Travel anywhere',
    symbol: '🏠',
    members: [
      { avatar: Images.avatar.avatar_02 },
      { avatar: Images.avatar.avatar_03 },
      { avatar: Images.avatar.avatar_04 },
    ],
    goal: 2000,
    amount: 1246,
    timeLeft: '64 days left',
    color: '#C0A975',
  },
];
