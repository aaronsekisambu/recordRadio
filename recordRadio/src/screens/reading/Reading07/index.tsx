import React from 'react';
import { Container, LinearGradientText, NavigationAction, Text } from 'components';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme, TopNavigation, Layout, Icon, ViewPager } from '@ui-kitten/components';
import { useFollowAnimatedPosition, useLayout } from 'hooks';

import Crypto from './Crypto';
import Finance from './Finance';
import Business from './Business';
import BottomTab from './BottomTab';

import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';

const Reading07 = React.memo(() => {
  const theme = useTheme();
  const { width, height, bottom, top } = useLayout();

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const translateX = useSharedValue(8);
  const translateY = useSharedValue(top + 56);
  const context = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
      if (translateX.value > 270 / 2) {
        translateX.value = width - 270;
      } else {
        translateX.value = 8;
      }

      if (translateY.value > height - (bottom + 124)) {
        translateY.value = height - (bottom + 124);
      }
      if (translateY.value < top) {
        translateY.value = top + 56;
      }
    });

  const { rStyle: rBlueCircleStyle } = useFollowAnimatedPosition({
    x: translateX,
    y: translateY,
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <Container>
        <TopNavigation
          accessoryLeft={<NavigationAction status="placeholder" />}
          accessoryRight={<NavigationAction status="placeholder" icon="magnifying-glass" />}
        />
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Bookmark"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          textStyle={styles.titleText}
        />
        <View style={styles.tabView}>
          {['Crypto', 'Finance', 'Business'].map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tab,
                  {
                    marginRight: index < 2 ? 4 : 0,
                    backgroundColor:
                      selectedIndex === index
                        ? theme['color-primary-500']
                        : theme['background-basic-color-2'],
                  },
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedIndex(index)}>
                <Text category="h6" status={selectedIndex === index ? 'white' : 'basic'}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ViewPager
          onSelect={setSelectedIndex}
          selectedIndex={selectedIndex}
          shouldLoadComponent={(index) => index === selectedIndex}
          style={styles.content}>
          <Crypto />
          <Finance />
          <Business />
        </ViewPager>
        <BottomTab />
      </Container>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[styles.box1, { backgroundColor: theme['color-primary-500'] }, rBlueCircleStyle]}>
          <View style={styles.box2}>
            <Image
              source={{
                uri: 'https://user-images.githubusercontent.com/42206067/232230969-334b32fc-5fc9-42d9-abad-256287300298.png',
              }}
              style={styles.image}
            />
            <View style={styles.flex}>
              <Text category="h4" status="white">
                Rich dad - ep01
              </Text>
              <Text status="platinum" marginTop={8}>
                12:40
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Layout level="success" style={styles.viewPlay}>
              <Icon pack="assets" name="play" />
            </Layout>
          </TouchableOpacity>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
});

export default Reading07;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
    marginTop: 8,
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    borderRadius: 16,
  },
  content: {
    flex: 1,
  },
  item: {
    marginBottom: 8,
  },
  contentContainerStyle: {
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingBottom: 49,
  },
  box1: {
    width: 262,
    padding: 8,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  box2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  flex: {
    flex: 1,
    marginLeft: 16,
  },
  viewPlay: {
    width: 40,
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 52,
    width: 40,
  },
});
