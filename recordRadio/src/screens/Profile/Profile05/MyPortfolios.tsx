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
import {NavigationAction, Container, Content, Text, VStack} from 'components';
import {Images} from 'assets/images';

interface IPortfoliosProps {
  img: ImageRequireSource;
}

const MyPortfolios = ({data}: {data: IPortfoliosProps[]}) => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  //   const size=
  return (
    <VStack gap={8} style={styles.container}>
      {data.map((item, i) => {
        return (
          <Image
            source={item.img}
            key={i}
            borderRadius={16}
            style={{width: (width - 24) / 2, aspectRatio: 1.8 / 1.5}}
          />
        );
      })}
    </VStack>
  );
};

export default MyPortfolios;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8,
  },
});
