import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, useTheme, StyleService, useStyleSheet, Button,Icon } from '@ui-kitten/components';
// ----------------------------- @Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import { Container, Text, VStack, HStack } from 'components';
import Pagination from 'elements/Onboarding/Pagination';
import ThemeLogo from 'elements/App/ThemeLogo';
// ----------------------------- Reanimated 2 -----------------------------------
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';


const Onboarding08 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const data = [
    {
      image: Images.onboarding.onboarding07,
      title: 'Ciate Palemore Lipstick Bold Red Color',
    },
    {image: Images.onboarding.onboarding08, title: 'Payment Method Added'},
    {
      image: Images.onboarding.onboarding07,
      title: 'Ciate Palemore Lipstick Bold Red Color',
    },
    {image: Images.onboarding.onboarding08, title: 'Payment Method Added'},
  ];
  const heightLayout = 480 * (height / 812);
  const heightImg = 259 * (height / 812);
  const widthtImg = 312 * (width / 375);
  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = (event.contentOffset.y / heightLayout) * 1.5;
  });

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<ThemeLogo />}
        accessoryRight={
          <Text onPress={goBack} status="primary" category="h4" marginRight={4}>
            SKIP
          </Text>
        }
      />
      <HStack mh={8} justify="flex-start">
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          snapToInterval={332}
          decelerationRate="fast">
          {data.map((item, i) => {
            return (
              <VStack key={i} mb={20} level="2" border={16} padding={16}>
                <Text category="header">{item.title}</Text>
                <Image
                  source={item.image}
                  style={{height: heightImg, width: widthtImg}}
                  borderRadius={16}
                  resizeMode="contain"
                />
              </VStack>
            );
          })}
        </Animated.ScrollView>
        <Pagination
          data={data}
          activeWidth={90}
          activeColor={theme['background-basic-color-11']}
          animValue={translationY}
          horizontal={false}
          space={6}
        />
      </HStack>
      <Button
        children="Go Now"
        accessoryRight={<Icon pack="assets" name="caret-right" />}
        style={styles.button}
        onPress={goBack}
      />
    </Container>
  );
});

export default Onboarding08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 80,
    marginRight: 8,
  },
  button: {
    position: 'absolute',
    right: 16,
    bottom: 32,
  },
});
