import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, Button } from '@ui-kitten/components';
// ----------------------------- @Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import {Container, Content, Text, VStack} from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';

const Onboarding04 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const data = [
    {image: Images.onboarding.onboarding07, aspectRatio: 1, line: 1},
    {image: Images.onboarding.onboarding06, aspectRatio: 300 / 200, line: 1},
    {image: Images.onboarding.onboarding05, aspectRatio: 300 / 200, line: 2},
    {image: Images.onboarding.onboarding08, aspectRatio: 1, line: 2},
    {image: Images.onboarding.onboarding09, aspectRatio: 1, line: 3},
    {image: Images.onboarding.onboarding10, aspectRatio: 300 / 200, line: 3},
  ];
  const layoutWidthImage = 200 * (width / 375);

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo size={48} />}
        accessoryRight={
          <Text uppercase category="h5" status="primary" onPress={goBack}>
            Skip now
          </Text>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <VStack mh={24}>
          <Text category="h1">Souper Sunday for soup recipes</Text>
          <Text category="body" status="placeholder" marginBottom={42}>
            Establish your own food awards and share your favourites with your
          </Text>
          <Button children={'Get Starter'} size="small" />
        </VStack>
        <Content contentContainerStyle={styles.secondContent} horizontal>
          <VStack style={[styles.contentImg, {}]}>
            {data
              .filter((_, i) => _.line === 1)
              .map((item, index) => {
                return (
                  <VStack
                    key={index}
                    level="2"
                    style={[
                      styles.item,
                      {
                        width: layoutWidthImage,
                        height: layoutWidthImage * item.aspectRatio,
                      },
                    ]}>
                    <Image source={item.image} />
                  </VStack>
                );
              })}
          </VStack>
          <VStack style={[styles.contentImg]}>
            {data
              .filter((_, i) => _.line === 2)
              .map((item, index) => {
                return (
                  <VStack
                    key={index}
                    level="2"
                    style={[
                      styles.item,
                      {
                        width: layoutWidthImage,
                        height: layoutWidthImage * item.aspectRatio,
                      },
                    ]}>
                    <Image source={item.image} />
                  </VStack>
                );
              })}
          </VStack>
          <VStack style={[styles.contentImg]}>
            {data
              .filter((_, i) => _.line === 3)
              .map((item, index) => {
                return (
                  <VStack
                    key={index}
                    level="2"
                    style={[
                      styles.item,
                      {
                        width: layoutWidthImage,
                        height: layoutWidthImage * item.aspectRatio,
                      },
                    ]}>
                    <Image source={item.image} />
                  </VStack>
                );
              })}
          </VStack>
        </Content>
      </Content>
    </Container>
  );
});

export default Onboarding04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {
    paddingTop: 32,
  },
  secondContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    gap: 8,
    paddingTop: 32,
    paddingBottom: 80,
  },
  contentImg: {
    gap: 8,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});
