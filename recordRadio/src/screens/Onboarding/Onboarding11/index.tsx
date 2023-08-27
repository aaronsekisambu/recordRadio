import React, { memo } from 'react';
import { Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  Button,
  Icon,
  StyleService,
  TopNavigation,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

// ----------------------------- Assets -----------------------------------
import { Images } from 'assets/images';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';

// ----------------------------- Components & Elements -----------------------------------
import { Container, Content, Text, VStack } from 'components';
import Pagination from 'elements/Onboarding/Pagination';
import ThemeLogo from 'elements/App/ThemeLogo';
// ----------------------------- Reanimated 2-----------------------------------
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  Easing,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Onboarding11 = memo(() => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const progress = useSharedValue(0);

  return (
    <Container style={styles.container}>
      <TopNavigation accessoryLeft={() => <ThemeLogo size={56} />} />
      <Content>
        <Carousel
          data={example_data}
          width={width * 0.9}
          style={{
            width: width,
          }}
          loop={false}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.99,
            parallaxScrollingOffset: 60,
          }}
          height={(460 * height) / 812}
          onProgressChange={(e, _) => (progress.value = _)}
          withAnimation={{
            type: 'timing',
            config: { duration: 250, easing: Easing.linear },
          }}
          renderItem={({
            item,
            index,
          }: {
            item: any;
            index: number;
            animationValue: SharedValue<number>;
          }) => {
            const styledAnimated = useAnimatedStyle(() => {
              return {
                opacity: interpolate(progress.value, [index - 1, index, index + 1], [0, 1, 0]),
              };
            });
            return (
              <VStack gap={32} ph={32} pt={40}>
                <Image source={item.image} />
                <Animated.View style={styledAnimated}>
                  <Text category="h0" marginRight={32}>
                    {item.title}
                  </Text>
                </Animated.View>
              </VStack>
            );
          }}
        />
        <VStack style={styles.paginationContent}>
          <Pagination
            animValue={progress}
            data={example_data}
            activeWidth={6}
            space={12}
            activeColor={theme['background-basic-color-11']}
            inactiveColor={theme['background-basic-color-5']}
          />
        </VStack>
      </Content>
      <VStack gap={24} ph={32} pb={16}>
        <Button
          size="medium"
          status="apple"
          accessoryLeft={(props) => (
            <Icon
              pack="assets"
              name="apple"
              {...props}
              style={[styles.iconButton, { marginRight: 24 }]}
            />
          )}
          onPress={goBack}>
          Login with Apple
        </Button>
        <Button
          size="medium"
          style={styles.button}
          status="danger"
          accessoryRight={(props) => <Text opacity={0}></Text>}
          accessoryLeft={(props) => (
            <Icon pack="eva" name="google" {...props} style={styles.iconButton} />
          )}
          onPress={goBack}>
          Login with Apple
        </Button>
      </VStack>
    </Container>
  );
});

export default Onboarding11;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    width: 24,
    height: 24,
    tintColor: 'text-basic-color',
  },
  paginationContent: {
    marginTop: 32,
    alignSelf: 'flex-start',
    marginLeft: 32,
  },
});

const example_data = [
  { title: 'Accumulate for your sustainable future.', image: Images.onboarding.onboarding16 },
  { title: 'Accumulate for your sustainable future.', image: Images.onboarding.onboarding16 },
  { title: 'Accumulate for your sustainable future.', image: Images.onboarding.onboarding16 },
  { title: 'Accumulate for your sustainable future.', image: Images.onboarding.onboarding16 },
  { title: 'Accumulate for your sustainable future.', image: Images.onboarding.onboarding16 },
  { title: 'Accumulate for your sustainable future.', image: Images.onboarding.onboarding16 },
];
