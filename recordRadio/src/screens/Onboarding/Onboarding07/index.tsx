import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {useTheme, Button, Icon,  TopNavigation, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import {Container, Content, Text, VStack, HStack} from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';
import Pagination from 'elements/Onboarding/Pagination';
// ----------------------------- Reanimted 2 -----------------------------------
import Carousel from 'react-native-reanimated-carousel';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


const Onboarding07 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const data = [
    {
      image: Images.onboarding.onboarding12,
      title: 'Directly answer customers’ financial ',
      describe:
        'Open an app geared toward stock trading, and you’ll probably discover a dictionary ',
    },
    {
      image: Images.onboarding.onboarding13,
      title: 'Directly answer customers’ financial ',
      describe:
        'Open an app geared toward stock trading, and you’ll probably discover a dictionary ',
    },
    {
      image: Images.onboarding.onboarding14,
      title: 'Directly answer customers’ financial ',
      describe:
        'Open an app geared toward stock trading, and you’ll probably discover a dictionary ',
    },
    {
      image: Images.onboarding.onboarding13,
      title: 'Directly answer customers’ financial ',
      describe:
        'Open an app geared toward stock trading, and you’ll probably discover a dictionary ',
    },
    {
      image: Images.onboarding.onboarding12,
      title: 'Directly answer customers’ financial ',
      describe:
        'Open an app geared toward stock trading, and you’ll probably discover a dictionary ',
    },
    {
      image: Images.onboarding.onboarding14,
      title: 'Directly answer customers’ financial ',
      describe:
        'Open an app geared toward stock trading, and you’ll probably discover a dictionary ',
    },
  ];
  const progress = useSharedValue(0);

  return (
    <Container style={styles.container}>
      <TopNavigation accessoryLeft={<ThemeLogo onPress={goBack} />} />
      <Content contentContainerStyle={styles.content}>
        <Carousel
          data={data}
          height={667 * (height / 812)}
          width={width * 0.85}
          style={{width: '100%'}}
          onProgressChange={(_, e) => {
            progress.value = e;
          }}
          renderItem={({item, index}) => {
            const styledAnimated = useAnimatedStyle(() => {
              return {
                paddingLeft: 16,
                opacity: interpolate(
                  progress.value,
                  [index - 1, index, index + 1],
                  [0, 1, 0],
                ),
              };
            });
            return (
              <VStack ml={8} justify="space-between">
                <Image
                  source={item.image}
                  borderRadius={24}
                  style={{height: 400 * (height / 812), width: width * 0.8}}
                />
                <Animated.View style={styledAnimated}>
                  <Text category="h1" marginTop={24} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text category="body" status="placeholder" marginTop={16}>
                    {item.describe}
                  </Text>
                </Animated.View>
              </VStack>
            );
          }}
        />
      </Content>
      <HStack margin={16}>
        <Pagination
          animValue={progress}
          inactiveColor={theme['background-basic-color-8']}
          activeColor={theme['color-primary-default']}
          data={data}
          size={6}
          space={12}
        />
        <Button
          children={'Get Starter'}
          onPress={goBack}
          accessoryRight={<Icon pack="assets" name="caret-right" />}
        />
      </HStack>
    </Container>
  );
});

export default Onboarding07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content:{
    flexGrow:1,
    paddingBottom:40
  }
});
