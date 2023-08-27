import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Components -----------------------------------
import {Content, Text, HStack, VStack} from 'components';

const Achievement = memo(() => {
  const styles = useStyleSheet(themedStyles);

  const achievement_list = [
    Images.profile.achievement01,
    Images.profile.achievement02,
    Images.profile.achievement03,
    Images.profile.achievement04,
    Images.profile.achievement05,
  ];
  return (
    <VStack style={styles.container}>
      <HStack justify="flex-start" mh={16} mb={24} itemsCenter>
        <Text category="h3">🔥 </Text>
        <Text category="h4">Achievement</Text>
      </HStack>
      <Content horizontal contentContainerStyle={styles.content}>
        {achievement_list.map((item, i) => {
          return (
            <VStack key={i}>
              <Image source={item} />
            </VStack>
          );
        })}
      </Content>
    </VStack>
  );
});

export default Achievement;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 16,
    paddingLeft: 16,
  },
});
