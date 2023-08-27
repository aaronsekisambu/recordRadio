import React, {memo} from 'react';
import {Image, Platform} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, useTheme, StyleService, useStyleSheet, Button } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import {Container, Content, Text, VStack} from 'components';
import Pagination from 'elements/Onboarding/Pagination';
// ----------------------------- Reanimated 2 -----------------------------------
import Carousel from 'react-native-reanimated-carousel';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const Onboarding10 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const data = [
    {
      title: '0.1% Federal Republic of Germany 2026',
      image: Images.onboarding.onboarding15,
    },
    {
      title: '0.1% Federal Republic of Germany 2026',
      image: Images.onboarding.onboarding15,
    },
    {
      title: '0.1% Federal Republic of Germany 2026',
      image: Images.onboarding.onboarding15,
    },
  ];
  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={() => (
             <Pagination animValue={progress} data={data} space={12} inactiveColor={theme['background-basic-color-8']} activeColor={theme['color-primary-default']}/>
        )}
        accessoryRight={<Text category="h4" status="primary"> Skip</Text>}
      />
      <Content>
        <Carousel
          data={data}
          width={308 * (width / 375)}
          height={650 * (height / 812)}
          onProgressChange={(_, e) => { progress.value = e }}
          style={{width: '100%'}}
          renderItem={({item, index}) => {
            const styled = useAnimatedStyle(() => {
              return {
                marginHorizontal: 8,
                marginBottom: 32,
                opacity: interpolate(
                  progress.value,
                  [index - 1, index, index + 1],
                  [0, 1, 0],
                ),
              };
            });
            return (
              <VStack ml={8} justify="space-between">
                <Animated.View style={styled}>
                  <Text category="header">{item.title}</Text>
                </Animated.View>
                <VStack level="2" border={16} style={[ styles.layout,{width: 295 * (width / 375), height: 424 * (height / 812)},]}>
                  <Image source={item.image} />
                </VStack>
              </VStack>
            );
          }}
        />
      </Content>
      <Button children={'Get Starter'} style={styles.button} onPress={goBack} />
    </Container>
  );
});

export default Onboarding10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  layout: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    marginHorizontal: 8,
    marginBottom:Platform.OS==='android' ? 12 : 4,
  },
});
