import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {useTheme, StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Reanimated -----------------------------------
import Carousel from 'react-native-reanimated-carousel';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
// ----------------------------- Components & Elements-----------------------------------
import {Container, Text, VStack, RoundedButton, HStack} from 'components';
import Pagination from 'elements/Onboarding/Pagination';
import ThemeLogo from 'elements/App/ThemeLogo';

const Onboarding03 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const data = [
    {
      title: 'Create a gift guide for food lovers',
      describe:
        'Establish your own food awards and share your favourites with your ',
      image: Images.onboarding.onboarding04,
    },
    {
      title: 'Create a gift guide for food lovers',
      describe:
        'Establish your own food awards and share your favourites with your ',
      image: Images.onboarding.onboarding04,
    },
    {
      title: 'Create a gift guide for food lovers',
      describe:
        'Establish your own food awards and share your favourites with your ',
      image: Images.onboarding.onboarding04,
    },
    {
      title: 'Create a gift guide for food lovers',
      describe:
        'Establish your own food awards and share your favourites with your ',
      image: Images.onboarding.onboarding04,
    },
  ];
  const progress = useSharedValue(0);
  const refScrollView = React.useRef<Animated.ScrollView>(null);
  React.useEffect(() => {
    refScrollView.current?.scrollTo({x: progress.value * width, y: 0});
  }, [progress, width]);
  return (
    <Container style={styles.container}>
      <Carousel
        data={data}
        renderItem={({item, index}) => {
          return <Image source={item.image} style={{width: width}} />;
        }}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        onSnapToItem={index => (progress.value = index)}
        style={styles.carousel}
        width={width}
      />
      <ThemeLogo source={Images.small_logo} style={styles.logo} />
      <VStack
        level="1"
        mh={8}
        padding={16}
        pb={bottom + 12}
        border={16}
        style={{overflow: 'hidden'}}>
        <HStack style={{height: '30%', width: width * data.length}}>
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
                width: width,
                opacity: opacity,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
              };
            });
            return (
              <Animated.View key={index} style={animatedStyle}>
                <VStack mr={80}>
                  <Text category="header" status="warning">
                    0{index + 1}.
                  </Text>
                  <Text category="h1" marginVertical={8}>
                    {item.title}
                  </Text>
                  <Text category="body" status="placeholder">
                    {item.describe}
                  </Text>
                </VStack>
              </Animated.View>
            );
          })}
        </HStack>
        <HStack ph={24}>
          <Pagination
            animValue={progress}
            size={6}
            activeWidth={30}
            data={data}
            activeColor={theme['background-basic-color-11']}
          />
          <RoundedButton icon="arrow-right" status="basic" onPress={goBack} />
        </HStack>
      </VStack>
    </Container>
  );
});

export default Onboarding03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  carousel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    alignSelf: 'center',
    tintColor: 'text-white-color',
  },
  content: {
    alignSelf: 'flex-end',
  },
});
