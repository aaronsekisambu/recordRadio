import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, useTheme, StyleService, useStyleSheet, Button } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements-----------------------------------
import {Container, Content, Text, HStack, VStack} from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';
import Pagination from 'elements/Onboarding/Pagination';
// ----------------------------- Reanimated 2 -----------------------------------
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';

const Onboarding05 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const data = [
    {
      image: Images.onboarding.onboarding11,
      title: 'Browse Through Unique Digital Art ',
      describe:
        "We're a team of the most futuristic neon pink robots in the universe.",
    },
    {
      image: Images.onboarding.onboarding11,
      title: 'Browse Through Unique Digital Art ',
      describe:
        "We're a team of the most futuristic neon pink robots in the universe.",
    },
    {
      image: Images.onboarding.onboarding11,
      title: 'Browse Through Unique Digital Art ',
      describe:
        "We're a team of the most futuristic neon pink robots in the universe.",
    },
    {
      image: Images.onboarding.onboarding11,
      title: 'Browse Through Unique Digital Art ',
      describe:
        "We're a team of the most futuristic neon pink robots in the universe.",
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);
  React.useEffect(() => {
    ref.current?.scrollTo({index: activeIndex, animated: true});
  }, [activeIndex]);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={
          <Pagination
            data={data}
            animValue={progress}
            space={12}
            activeColor={theme['background-basic-color-11']}
          />
        }
        accessoryRight={() => <ThemeLogo source={Images.small_logo} />}
      />
      <Content contentContainerStyle={styles.contentContainer}>
        <Carousel
          data={data}
          height={152 * (width / 375)}
          ref={ref}
          loop={false}
          onSnapToItem={i => setActiveIndex(i)}
          onProgressChange={(_, absolute) => (progress.value = absolute)}
          renderItem={({item}) => {
            return (
              <VStack ph={16}>
                <Text marginBottom={16} category={'h1'} center>
                  {item.title}
                </Text>
                <Text marginBottom={16} category={'body'} center>
                  {item.describe}
                </Text>
              </VStack>
            );
          }}
          width={width}
        />
        <VStack justify="flex-start">
          <HStack columnGap={8} mh={16} mb={40}>
            <Button
              children={'Get Stater'}
              size="medium"
              style={styles.button}
              disabled
            />
            <Button
              children={'Get Stater'}
              size="medium"
              style={styles.button}
              onPress={goBack}
            />
          </HStack>
          <Carousel
            width={width}
            loop={false}
            ref={ref}
            height={width}
            onProgressChange={(_, absolute) => (progress.value = absolute)}
            onSnapToItem={i => setActiveIndex(i)}
            renderItem={({item}) => {
              return (
                <VStack itemsCenter>
                  <Image
                    source={item.image}
                    style={{width: width - 32, aspectRatio: 0.88 / 1}}
                  />
                </VStack>
              );
            }}
            data={data}
          />
        </VStack>
      </Content>
    </Container>
  );
});

export default Onboarding05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  contentContainer: {
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom:40
  },
  button: {
    flex: 1,
  },
});
