import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, TopNavigation, useStyleSheet } from '@ui-kitten/components';

// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text } from 'components';
import { Images } from 'assets/images';
import Information from './Information';
import Statistics from './Statistics';
import Achivements from './Achivements';

const Profile04 = memo(() => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        title="Profile"
        alignment="center"
        accessoryLeft={<NavigationAction icon="dots_three_vertical" />}
        accessoryRight={<NavigationAction icon="gear-six" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Information data={data.user} />
        <Statistics data={data.statistics} />
        <Achivements data={data.achievements} />
      </Content>
    </Container>
  );
});

export default Profile04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingHorizontal: 8,
    gap: 32,
    paddingBottom: 40,
    paddingTop: 20,
  },
});
const data = {
  user: {
    name: 'Albert Flores',
    job: 'UI/UX Designer',
    avatar: Images.avatar.avatar_01,
    verify: true,
    following: '230k',
    follower: '120k',
  },
  followed: false,
  statistics: [
    { title: 'Streak', desc: '5 Turn', image: 'shopping' },
    { title: 'Collection', desc: '13 Base', image: 'education' },
    { title: 'Drink', desc: '108 cups', image: 'food' },
    { title: 'Music', desc: '24 songs', image: 'entertainment' },
  ],
  achievements: [
    Images.profile.achievement01,
    Images.profile.achievement02,
    Images.profile.achievement03,
    Images.profile.achievement04,
    Images.profile.achievement05,
  ],
};
