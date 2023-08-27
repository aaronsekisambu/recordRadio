import React, {memo} from 'react';
// ----------------------------- UI kitten -----------------------------------
import {
  Button,
  Icon,
  StyleService,
  TopNavigation,
  useStyleSheet,
} from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Components -----------------------------------
import {NavigationAction, Container, Content, VStack, HStack} from 'components';
import Information from './Information';
import FriendList from './FriendList';
import PhotoList from './PhotoList';

const Profile09 = memo(() => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Profile'}
        alignment="center"
        accessoryLeft={<NavigationAction icon="caret-left" />}
        accessoryRight={<NavigationAction icon="podcasts" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Information
          user={{
            name: 'Albert Flores',
            job: 'UI/UX Designer',
            avatar: Images.avatar.avatar_01,
            verify: true,
            following: '230k',
            follower: '123k',
            address:"3891 Ranchview, California 62639",
            desc:"Utilmate – UI KIT Mobile App is an unique & creative with high quality & modern design. This package included 1000+ iOS screens."
          }}
        />
        <HStack gap={8} margin={16}>
          <Button
            style={styles.buttonContainer}
            children="Follow Me"
            status="success"
            size="giant"
            accessoryLeft={<Icon pack="assets" name="add-user" />}
          />
          <Button
            style={styles.buttonContainer}
            size="giant"
            children="Message"
            accessoryLeft={<Icon pack="assets" name="chat" />}
          />
        </HStack>
        <VStack gap={8}>
          <FriendList data={Friends} />
          <PhotoList data={Photos} />
        </VStack>
      </Content>
    </Container>
  );
});

export default Profile09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 12,
    paddingBottom: 40,
  },
  buttonContainer: {
    flex: 1,
  },
});
const Friends = [
  Images.avatar.avatar_06,
  Images.avatar.avatar_02,
  Images.avatar.avatar_03,
  Images.avatar.avatar_04,
  Images.avatar.avatar_05,
  Images.avatar.avatar_07,
];
const Photos = [
  Images.profile.image11,
  Images.profile.image12,
  Images.profile.image10,
  Images.profile.image04,
  Images.profile.image03,
  Images.profile.image11,
  Images.profile.image12,
  Images.profile.image10,
  Images.profile.image04,
  Images.profile.image03,
];
