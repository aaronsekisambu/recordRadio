import React, {memo} from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, TopNavigation, useStyleSheet, useTheme} from '@ui-kitten/components';
// ----------------------------- @Types -----------------------------------
import {FoodStackParamList} from 'types/navigation-types';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {NavigationProp, useNavigation} from '@react-navigation/native';
// ----------------------------- Types -----------------------------------
import {IntroButtonProps} from 'types/element-types';
// ----------------------------- Components & Elements -----------------------------------
import {NavigationAction, Container} from 'components';
import IntroList from 'elements/App/IntroList';
import ThemeLogo from 'elements/App/ThemeLogo';

const FoodIntro = memo(() => {
  const {goBack, navigate} =
    useNavigation<NavigationProp<FoodStackParamList>>();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const data: IntroButtonProps[] = [
    {
      title: 'Food 01',
      onPress: () => {
        navigate('Food01');
      },
    },
    {
      title: 'Food 02',
      onPress: () => {
        navigate('Food02');
      },
    },
    {
      title: 'Food 03',
      onPress: () => {
        navigate('Food03');
      },
    },
    {
      title: 'Food 04',
      onPress: () => {
        navigate('Food04');
      },
    },
    {
      title: 'Food 05',
      onPress: () => {
        navigate('Food05');
      },
    },
    {
      title: 'Food 06',
      onPress: () => {
        navigate('Food06');
      },
    },
    {
      title: 'Food 07',
      onPress: () => {
        navigate('Food07');
      },
    },
    {
      title: 'Food 08',
      onPress: () => {
        navigate('Food08');
      },
    },
    {
      title: 'Food 09',
      onPress: () => {
        navigate('Food09');
      },
    },
    {
      title: 'Food 10',
      onPress: () => {
        navigate('Food10');
      },
    },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<NavigationAction icon="close" />}
      />
      <IntroList data={data} title="Food" />
    </Container>
  );
});

export default FoodIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
