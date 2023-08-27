import React, {memo} from 'react';
import { ImageRequireSource, NativeScrollEvent, NativeSyntheticEvent,  } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, TopNavigation, useStyleSheet, useTheme, ViewPager} from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Reanimated 2 -----------------------------------
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
// ----------------------------- Components & Elements -----------------------------------
import {NavigationAction, Text, Container, HStack, LoadingScreen, VStack} from 'components';
import Information from './Information';
import {Images} from 'assets/images';
import TabBar from './TabBar';
import ListBook from './ListBook';
import BottomBarProfile from 'elements/Profile/BottomBarProfile';
// ----------------------------- Utils -----------------------------------
import {waitUtil} from 'utils';


const Profile06 = memo(() => {
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [loading, setLoading] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const transY = useSharedValue(0);
  const onScrollHandle = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    transY.value = e.nativeEvent.contentOffset.y;
  };

  const styledInformation = useAnimatedStyle(() => {
    const _height = interpolate(
      transY.value,
      [-height, 0, height / 3, height, height * 10],
      [160, 160, 0, 0, 0],
    );
    const opacity = interpolate(transY.value, [0, 0, height / 2], [1, 1, 0]);
    return {
      height: _height,
      opacity,
      overflow: 'hidden',
    };
  }, [height, transY.value]);
  React.useEffect(() => {
    waitUtil(1000)
      .then(() => setLoading(false))
      .catch(() => {});
  }, []);
  return (
    <Container style={styles.container}>
      {loading && <LoadingScreen />}
      <VStack level="2" style={[styles.header, {paddingTop: top + 4}]}>
        <TopNavigation
          appearance="control"
          accessoryLeft={
            <Text children="Profile" category="h4" marginLeft={12} />
          }
          accessoryRight={props => (
            <HStack>
              <NavigationAction {...props} icon="airplay" />
              <NavigationAction {...props} icon="dots_three_vertical" />
            </HStack>
          )}
        />
        <Animated.View style={styledInformation}>
          <Information data={DATA.information} />
        </Animated.View>
        <TabBar
          tabs={DATA_TABS}
          style={styles.tabBar}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        />
      </VStack>
      <Animated.ScrollView
        onScroll={onScrollHandle}
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}>
        <ViewPager selectedIndex={activeIndex} onSelect={setActiveIndex}>
          <ListBook data={DATA_BOOK} />
          <VStack></VStack>
          <VStack></VStack>
          <VStack></VStack>
        </ViewPager>
      </Animated.ScrollView>
      <BottomBarProfile
        withLogo
        iconActiveColor={theme['color-warning-default']}
        activeButtonColor={theme['color-primary-default']}
      />
    </Container>
  );
});

export default Profile06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
    overflow: 'hidden',
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
  },
  tabBar: {
    marginLeft: 8,
  },
  content: {
    paddingBottom: 60,
  },
});
const DATA = {
  information: {
    name: 'Albert Flores',
    job: 'UI/UX Designer',
    verify: true,
    avatar: Images.avatar.avatar_01,
  },
};
const DATA_TABS = [
  {title: 'Reading', notification: 0},
  {title: 'Bookmark', notification: 4},
  {title: 'Activity', notification: 0},
  {title: 'Reviews', notification: 0},
];
const DATA_BOOK: {
  title: string;
  artist: string;
  loading: number;
  duration: string;
  cover: ImageRequireSource;
}[] = [
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image04,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image11,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image12,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image13,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image01,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image04,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image11,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image12,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image13,
    loading: 5,
    duration: '48 mins',
  },
  {
    title: 'The World, your life',
    artist: 'June Cook',
    cover: Images.profile.image01,
    loading: 5,
    duration: '48 mins',
  },
];
