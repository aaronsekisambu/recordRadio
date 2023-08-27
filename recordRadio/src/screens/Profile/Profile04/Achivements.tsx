import React, {memo} from 'react';
import {View, Image, ImageRequireSource} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import {Content, Text, HStack, VStack} from 'components';

const Achivements = memo(({data}: {data: ImageRequireSource[]}) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack style={styles.container}>
      <HStack itemsCenter justify="flex-start" mb={20}>
        <Text category="h2">🏆</Text>
        <Text category="h4">Achievement Badge</Text>
      </HStack>
      <Content horizontal contentContainerStyle={styles.content}>
        {data.map((item, i) => {
          return <Image source={item} key={i} />;
        })}
      </Content>
    </VStack>
  );
});

export default Achivements;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 16,
    paddingLeft: 16,
  },
});
