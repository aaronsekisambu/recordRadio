import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, useTheme, StyleService, useStyleSheet, Button } from '@ui-kitten/components';
// ----------------------------- @Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import { Container, Content, Text, VStack, HStack } from 'components';
import Pagination from 'elements/Onboarding/Pagination';
// ----------------------------- Reanimated 2 -----------------------------------
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

const Onboarding09 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const progress = useSharedValue(0);
  const widthImg = 253 *(width /375);
  const heightImg = 376*(height/812)
  const ref = React.useRef<ICarouselInstance>(null);
  const refScrollView = React.useRef<Animated.ScrollView>(null);

  const data = [
    {
      title: 'Return on Assets',
      describe: 'Open an app geared toward stock trading, and you’ll probably',
      image: Images.onboarding.onboarding06,
    },
    {
      title: 'Return on Assets',
      describe: 'Open an app geared toward stock trading, and you’ll probably',
      image: Images.onboarding.onboarding06,
    },
    {
      title: 'Return on Assets',
      describe: 'Open an app geared toward stock trading, and you’ll probably',
      image: Images.onboarding.onboarding06,
    },
    {
      title: 'Return on Assets',
      describe: 'Open an app geared toward stock trading, and you’ll probably',
      image: Images.onboarding.onboarding06,
    },
    {
      title: 'Return on Assets',
      describe: 'Open an app geared toward stock trading, and you’ll probably',
      image: Images.onboarding.onboarding06,
    },
    {
      title: 'Return on Assets',
      describe: 'Open an app geared toward stock trading, and you’ll probably',
      image: Images.onboarding.onboarding06,
    },
  ];
  React.useEffect(() => {
    refScrollView.current?.scrollTo({
      x: progress.value,
      animated: true,
    });
  }, [progress.value, width, refScrollView]);
  const renderTextContent = React.useCallback(() => {
    return (
      <HStack style={{height: 96}} mb={32}>
        {data.map((item, i) => {
          const styled = useAnimatedStyle(() => {
            return {
              transform: [
                {
                  translateX: interpolate(
                    progress.value,
                    [i - 1, i, i + 1],
                    [-width, 0, width],
                  ),
                },
              ],
              width: width,
              opacity: interpolate(
                progress.value,
                [i - 1, i, i + 1],
                [0.2, 1, 0.2],
              ),
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
            };
          }, []);
          return (
            <Animated.View key={i} style={styled}>
              <VStack mh={24}>
                <Text category="h1" center marginBottom={12}>
                  {item.title}
                </Text>
                <Text category="body" status="placeholder" center>
                  {item.describe}
                </Text>
              </VStack>
            </Animated.View>
          );
        })}
      </HStack>
    );
  }, [refScrollView, progress.value]);
  return (
    <Container style={styles.container}>
      <TopNavigation />
      <Pagination animValue={progress} data={data} space={12} activeColor={theme['background-basic-color-11']}/>
      <Content contentContainerStyle={styles.content}>
        {renderTextContent()}
        <Carousel
          data={data}
          onProgressChange={(_, b) => (progress.value = b)}
          ref={ref}
          width={width * 0.74}
          style={{width: '100%'}}
          height={408 * (height / 812)}
          renderItem={({item, index}) => {
            const styledLayout = useAnimatedStyle(() => {
              return {
                width: widthImg,
                borderRadius: 16,
                marginLeft: 8,
                backgroundColor: interpolateColor(
                  progress.value,
                  [index - 1, index, index + 1],
                  [
                    theme['background-basic-color-2'],
                    theme['color-info-default'],
                    theme['background-basic-color-2'],
                  ],
                ),
              };
            });
            return (
              <Animated.View style={styledLayout}>
                <Image source={item.image} style={{width: widthImg, height: heightImg}}/>
              </Animated.View>
            );
          }}
        />
      </Content>
      <VStack mb={8} mh={8}>
        <Button children={'Get Starter'} onPress={goBack} />
        <Text category="h4" status="primary" center marginVertical={16} onPress={goBack}> Skip </Text>
      </VStack>
    </Container>
  );
});

export default Onboarding09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 32,
    flexGrow: 1,
  },
});
