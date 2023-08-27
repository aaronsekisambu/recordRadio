import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {TopNavigation, useTheme, Layout, StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Linear Gradient -----------------------------------
import {LinearGradient} from 'expo-linear-gradient';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Reanimated 2 -----------------------------------
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
// ----------------------------- Components/Elements -----------------------------------
import {Container, Content, Text, VStack, HStack} from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';
import Pagination from 'elements/Onboarding/Pagination';
import SwipeableToStart from 'elements/Onboarding/SwipeableToStart';

const Onboarding02 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const refCarousel = React.useRef<ICarouselInstance>(null);
  const data = [
    {
      title: 'Digital game artist 3D',
      image: Images.onboarding.onboarding03,
      describe: 'Is Zendesk currently experiencing a Service Incident?',
    },
    {
      title: 'Digital game artist 3D',
      image: Images.onboarding.onboarding03,
      describe: 'Is Zendesk currently experiencing a Service Incident?',
    },
    {
      title: 'Digital game artist 3D',
      image: Images.onboarding.onboarding03,
      describe: 'Is Zendesk currently experiencing a Service Incident?',
    },
    {
      title: 'Digital game artist 3D',
      image: Images.onboarding.onboarding03,
      describe: 'Is Zendesk currently experiencing a Service Incident?',
    },
    {
      title: 'Digital game artist 3D',
      image: Images.onboarding.onboarding03,
      describe: 'Is Zendesk currently experiencing a Service Incident?',
    },
  ];
  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <Layout style={[styles.background, {top: top + 4}]} level="2" />
      <TopNavigation
        style={styles.topNavigation}
        appearance="control"
        accessoryRight={
          <Text onPress={goBack} category="h5">
            Skip
          </Text>
        }
        accessoryLeft={() => <ThemeLogo source={Images.small_logo} />}
      />
      <Content contentContainerStyle={{flexGrow: 1}}>
        <Carousel
          ref={refCarousel}
          width={width - 16}
          height={476 * (height / 812)}
          style={{marginHorizontal: 8}}
          data={data}
          autoPlay
          autoPlayInterval={1200}
          onProgressChange={(_, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          onSnapToItem={e => (progress.value = e)}
          pagingEnabled
          renderItem={({item}) => {
            return (
              <VStack style={{overflow: 'hidden'}}>
                <LinearGradient
                  colors={['#2A3947', '#2A394790', '#2A394700']}
                  style={[styles.linearGradient, {top: 0}]}
                />
                <Image
                  source={item.image}
                  style={{
                    width: width,
                    height: 476 * (height / 812),
                    alignSelf: 'center',
                    marginHorizontal: 8,
                  }}
                />
                <LinearGradient
                  colors={['#2A394700', '#2A394760', '#2A3947']}
                  style={[styles.linearGradient, {bottom: 0, height: 100}]}
                />
              </VStack>
            );
          }}
        />
        <VStack style={styles.paginationContent}>
          <Pagination
            animValue={progress}
            data={data}
            activeWidth={90 * (width / 375)}
            space={8}
            activeColor={theme['background-basic-color-11']}
          />
        </VStack>
        <HStack style={{height: '30%'}}>
          {data.map((item, index) => {
            const animatedStyle = useAnimatedStyle(() => {
              const transX = interpolate(
                progress.value,
                [index - 1, index, index + 1],
                [width, 0, -width],
              );
              const opacity = interpolate(
                progress.value,
                [index - 1, index, index + 1],
                [-1, 1, -1],
              );
              return {
                transform: [{translateX: transX}],
                opacity: opacity,
                position: 'absolute',
                left: 0,
                right: 0,
                width: width,
              };
            });
            return (
              <Animated.View key={index} style={animatedStyle}>
                <VStack mh={40}>
                  <Text category="header" center marginVertical={8}>
                    {item.title}
                  </Text>
                  <Text category="body" center status="placeholder">
                    {item.describe}
                  </Text>
                </VStack>
              </Animated.View>
            );
          })}
        </HStack>
      </Content>
      <HStack justify="center" mb={bottom + 12}>
        <SwipeableToStart />
      </HStack>
    </Container>
  );
});

export default Onboarding02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  linearGradient: {
    width: '110%',
    height: 80,
    zIndex: 100,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  background: {
    position: 'absolute',
    left: 8,
    right: 8,
    height: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    zIndex: -10,
    borderRadius: 24,
  },
  paginationContent: {
    marginTop: -60,
    marginBottom: 16,
  },
});
