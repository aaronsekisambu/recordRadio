import React, {memo} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {Avatar, ViewPager, Layout, StyleService, TopNavigation, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- @Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Reanimated 2 -----------------------------------
import Animated, {interpolate, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
// ----------------------------- Components & Elements -----------------------------------
import {NavigationAction, Container, LoadingScreen} from 'components';
import Information from './Information';
import TabBar from './TabBar';
import MyPortfolios from './MyPortfolios';
import {waitUtil} from 'utils';

const Profile05 = memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [loading, setLoading] = React.useState(true);
  const [heightNav, setHeightNav] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const transY = useSharedValue(0);
  const onScrollHandle = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    transY.value = e.nativeEvent.contentOffset.y;
  };
  const styled = useAnimatedStyle(() => {
    const _height = interpolate(
      transY.value,
      [-height, 0, height, height * 1.5],
      [0, 0, -80, -80],
    );
    return {
      height: 187,
      width: width - 16,
      marginTop: _height - heightNav,
      marginHorizontal: 8,
    };
  }, [heightNav, height]);

  const styledImg = useAnimatedStyle(() => {
    const opacity = interpolate(
      transY.value,
      [0, 0, height / 3, height * 2],
      [1, 1, 0, 0],
    );
    return {
      opacity: opacity,
    };
  }, [height]);
  React.useEffect(() => {
    waitUtil(1000)
      .then(() => setLoading(false))
      .catch(() => {});
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      {loading && <LoadingScreen />}
      <TopNavigation
        style={[styles.topNavigation, {paddingTop: top + 4}]}
        appearance="control"
        accessoryLeft={<NavigationAction />}
        onLayout={e => setHeightNav(e.nativeEvent.layout.height)}
      />
      <Animated.View style={[styled, styles.header]}>
        <Animated.Image
          source={Images.profile.image03}
          style={{width: width - 16}}
          borderRadius={24}
        />
        <Animated.View style={[styledImg, styles.avatar]}>
          <Avatar source={Images.avatar.avatar_01} size="giant" />
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        onScroll={onScrollHandle}>
        <Information data={DATA.information} />
        <TabBar
          tabs={DATA_TABS}
          style={styles.tabBar}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        />
        <ViewPager
          selectedIndex={activeIndex}
          onSelect={setActiveIndex}
          swipeEnabled={false}>
          <MyPortfolios data={DATA.portfolios} />
          <Layout></Layout>
          <Layout></Layout>
          <Layout></Layout>
        </ViewPager>
      </Animated.ScrollView>
    </Container>
  );
});

export default Profile05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    zIndex: 100,
  },
  header: {
    marginBottom: 8,
  },
  avatar: {
    marginTop: -42,
    borderWidth: 4,
    borderColor: 'background-basic-color-1',
    borderRadius: 99,
    alignSelf: 'center',
  },
  content: {},
  contentContainer: {
    marginTop: 52,
    paddingBottom: 80,
  },
  tabBar: {
    paddingLeft: 8,
    marginBottom: 16,
  },
});
const DATA = {
  information: {
    name: 'Albert Flores',
    job: 'UI/UX Designer',
    follower: '230K',
    client: '109',
    project: '490',
    verify: true,
  },
  portfolios: [
    {img: Images.profile.image04},
    {img: Images.profile.image05},
    {img: Images.profile.image06},
    {img: Images.profile.image07},
    {img: Images.profile.image08},
    {img: Images.profile.image09},
    {img: Images.profile.image04},
    {img: Images.profile.image05},
    {img: Images.profile.image06},
    {img: Images.profile.image07},
    {img: Images.profile.image08},
    {img: Images.profile.image09},
    {img: Images.profile.image04},
    {img: Images.profile.image05},
    {img: Images.profile.image06},
    {img: Images.profile.image07},
    {img: Images.profile.image08},
    {img: Images.profile.image09},
    {img: Images.profile.image04},
    {img: Images.profile.image05},
    {img: Images.profile.image06},
    {img: Images.profile.image07},
    {img: Images.profile.image08},
    {img: Images.profile.image09},
  ],
};
const DATA_TABS = [
  {title: 'My Portfolios', notification: 0},
  {title: 'Proposals', notification: 4},
  {title: 'Current Project', notification: 0},
  {title: 'Photos', notification: 0},
];
