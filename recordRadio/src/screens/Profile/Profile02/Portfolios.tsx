import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet } from '@ui-kitten/components';

// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Components -----------------------------------
import { Text, VStack, HStack} from 'components';
import Carousel from 'react-native-reanimated-carousel';
import {Images} from 'assets/images';

const Portfolios = memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const width_img = 200 * (width / 375);
  const height_img = 150 * (height / 812);
  const data = [
    Images.profile.image01,
    Images.profile.image02,
    Images.profile.image03,
    Images.profile.image04,
    Images.profile.image05,
    Images.profile.image06,
    Images.profile.image07,
    Images.profile.image08,
    Images.profile.image09,
    Images.profile.image10,
    Images.profile.image11,
    Images.profile.image12,
    Images.profile.image13,
  ];
  return (
    <VStack style={styles.container}>
      <HStack justify="flex-start" mh={16} mb={24} itemsCenter>
        <Text category="h3">💼 </Text>
        <Text category="h4">Portfolios</Text>
      </HStack>
      <Carousel
        width={width * 0.6}
        height={200 * (width / 375)}
        data={data}
        style={{width: '100%'}}
        renderItem={({item}) => {
          return (
            <VStack ml={16}>
              <Image
                source={item}
                borderRadius={16}
                style={{
                  width: width_img,
                  height: height_img,
                }}
              />
            </VStack>
          );
        }}
      />
    </VStack>
  );
});

export default Portfolios;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
