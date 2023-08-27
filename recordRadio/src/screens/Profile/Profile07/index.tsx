import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {useStyleSheet, Avatar, Icon, ViewPager, StyleService, TopNavigation} from '@ui-kitten/components';

// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Components -----------------------------------
import {Content, Text, HStack, VStack, Container, NavigationAction} from 'components';
import TabBar from './TabBar';
import VideoPage from './VideoPage';
import BottomBar from './BottomBar';

const Profile07 = memo(() => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const Information = () => {
    return (
      <>
        <VStack>
          <Image
            source={Images.profile.image10}
            style={{width: 367 * (width / 375), height: 187 * (height / 812)}}
          />
          <VStack mt={-36} style={styles.avatar}>
            <Avatar source={Images.avatar.avatar_01} size="large" />
            <VStack style={styles.buttonCamera}>
              <Icon pack="assets" name="camera" style={styles.iconCamera} />
            </VStack>
          </VStack>
        </VStack>
        <VStack mt={16}>
          <HStack justify="flex-start" gap={4} itemsCenter mh={16} mb={8}>
            <Text category="h3">Albert Flores</Text>
            <Icon pack="assets" name="radio-active" />
          </HStack>
          <Text category="body" status="placeholder" marginHorizontal={16}>
            UI/UX Designer
          </Text>
        </VStack>
      </>
    );
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="caret-left" />}
        accessoryRight={props => (
          <HStack>
            <NavigationAction {...props} icon="heart" />
            <NavigationAction {...props} icon="search" />
          </HStack>
        )}
      />
      <Content contentContainerStyle={styles.content}>
        <Information />
        <TabBar
          tabs={DATA_TABS}
          style={styles.tabBar}
          activeIndex={selectedIndex}
          onChange={setSelectedIndex}
        />
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          swipeEnabled={false}>
          <VideoPage />
          <VStack></VStack>
          <VStack></VStack>
        </ViewPager>
      </Content>
      <BottomBar />
    </Container>
  );
});

export default Profile07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  headerCover: {},
  avatar: {
    borderWidth: 2,
    borderRadius: 99,
    borderColor: 'background-basic-color-1',
    alignSelf: 'flex-start',
    marginHorizontal: 16,
  },
  buttonCamera: {
    backgroundColor: 'color-primary-default',
    position: 'absolute',
    padding: 4,
    borderWidth: 2,
    borderRadius: 88,
    bottom: -2,
    right: -2,
    borderColor: 'background-basic-color-11',
  },
  iconCamera: {
    width: 16,
    height: 16,
  },
  content: {
    paddingBottom: 120,
  },
  tabBar: {
    marginBottom: 16,
  },
  bottomBar: {},
});
const DATA_TABS = [{title: 'Video'}, {title: 'Post'}, {title: 'Friend'}];
