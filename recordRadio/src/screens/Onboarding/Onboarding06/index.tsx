import React, {memo} from 'react';
import {ImageBackground, Platform} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { useTheme, StyleService, useStyleSheet, Button } from '@ui-kitten/components';
// ----------------------------- @Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import {Container, Content, Text, VStack, HStack} from 'components';
import Pagination from 'elements/Onboarding/Pagination';
// ----------------------------- Reanimated 2 -----------------------------------
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';

const Onboarding06 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const data = [
    {
      image: Images.onboarding.onboarding12,
      title: 'Medical Home Tests & Monitoring',
    },
    {
      image: Images.onboarding.onboarding13,
      title: 'Medical Home Tests & Monitoring',
    },
    {
      image: Images.onboarding.onboarding14,
      title: 'Medical Home Tests & Monitoring',
    },
    {
      image: Images.onboarding.onboarding13,
      title: 'Medical Home Tests & Monitoring',
    },
    {
      image: Images.onboarding.onboarding12,
      title: 'Medical Home Tests & Monitoring',
    },
    {
      image: Images.onboarding.onboarding14,
      title: 'Medical Home Tests & Monitoring',
    },
  ];
  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Carousel
          data={data}
          onProgressChange={(_, ab) => (progress.value = ab)}
          renderItem={({item}) => {
            return (
              <VStack mr={24}>
                <ImageBackground
                  source={item.image}
                  borderRadius={16}
                  style={{
                    justifyContent: 'flex-end',
                    width: width - 24,
                    height: 550 * (height / 812),
                  }}>
                  <Text
                    category="header"
                    marginLeft={16}
                    marginRight={60}
                    marginBottom={24}
                    numberOfLines={3}>
                    {item.title}
                  </Text>
                </ImageBackground>
              </VStack>
            );
          }}
          pagingEnabled
          height={550 * (height / 812)}
          width={width * 0.97}
          style={styles.carousel}
        />
        <Pagination
          animValue={progress}
          data={data}
          activeColor={theme['background-basic-color-11']}
          space={12}
        />
        <HStack columnGap={8} mh={16} mt={24}>
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
      </Content>
      <HStack itemsCenter justify="center" gap={8} mb={Platform.OS==='android'? bottom+12:4}>
        <Text category="footnote" uppercase center>
          Are you a doctor?
        </Text>
        <Text status="warning" category="footnote" uppercase onPress={goBack}>
          Get here!
        </Text>
      </HStack>
    </Container>
  );
});

export default Onboarding06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  content: {
    flexGrow: 1,
  },
  carousel: {
    marginBottom: 48,
    width: '100%'
  },
  button: {
    flex: 1,
  },
});
