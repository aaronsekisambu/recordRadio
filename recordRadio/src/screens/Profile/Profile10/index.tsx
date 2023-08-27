import React, {memo} from 'react';
import {Image, Platform, TouchableOpacity} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  useStyleSheet,
  Icon,
  StyleService,
  TopNavigation,
} from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Components -----------------------------------
import {
  Text,
  VStack,
  HStack,
  Container,
  Content,
  NavigationAction,
} from 'components';
import Information from './Information';

const Profile10 = memo(() => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        appearance="control"
        accessoryLeft={
          <NavigationAction
            status="placeholder"
            borderRadius={12}
            icon="caret-left"
          />
        }
        accessoryRight={
          <NavigationAction
            status="placeholder"
            borderRadius={12}
            icon="heart"
          />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.profile.cover}
          style={{
            marginBottom: -80,
            width: width,
            height:
              Platform.OS === 'android'
                ? 600 * (height / 812)
                : 540 * (height / 812),
          }}
        />
        <VStack border={16} mt={-40}>
          <Information
            user={{
              name: 'Albert Flores',
              job: 'UI/UX Designer',
              avatar: Images.avatar.avatar_01,
              verify: true,
              following: '230k',
              follower: '123k',
              address: '3891 Ranchview, California 62639',
              desc: 'Utilmate – UI KIT Mobile App is an unique & creative with high quality & modern design. This package included 1000+ iOS screens.',
            }}
          />
        </VStack>
        <VStack border={16} level="2" style={styles.exp}>
          <HStack itemsCenter mt={8}>
            <Text category="h4">Experience</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.buttonCaret}>
              <Icon pack="assets" name="caret-right" style={styles.caret} />
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Content>
    </Container>
  );
});

export default Profile10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  cover: {
    width: 387,
    height: 517,
  },
  content: {
    paddingBottom: 120,
  },
  button: {
    padding: 4,
    borderRadius: 12,
  },
  caret: {
    width: 36,
    height: 36,
    tintColor: 'text-black-color',
  },
  buttonCaret: {
    padding: 12,
    backgroundColor: 'color-warning-default',
    borderRadius: 12,
  },
  exp: {
    height: 250,
    padding: 16,
    margin: 4,
  },
});
