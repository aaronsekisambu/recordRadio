import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { NavigationAction, Container } from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import IntroList from 'elements/App/IntroList';
import ThemeLogo from 'elements/App/ThemeLogo';

import { IntroButtonProps } from 'types/element-types';
import { ReadingStackParamList } from 'types/navigation-types';

const ReadingIntro = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<ReadingStackParamList>>();

  const data: IntroButtonProps[] = [
    {
      title: 'Interest',
      onPress: () => {
        navigate('Reading01');
      },
    },
    {
      title: 'Main-Seller',
      onPress: () => {
        navigate('Reading02');
      },
    },
    {
      title: 'Post Details',
      onPress: () => {
        navigate('Reading03');
      },
    },
    {
      title: 'Main Seller',
      onPress: () => {
        navigate('Reading04');
      },
    },
    {
      title: 'Interest 1',
      onPress: () => {
        navigate('Reading05');
      },
    },
    {
      title: 'Reading Habit',
      onPress: () => {
        navigate('Reading06');
      },
    },
    {
      title: 'Bookmark-01',
      onPress: () => {
        navigate('Reading07');
      },
    },
    {
      title: 'Bookmark-02',
      onPress: () => {
        navigate('Reading08');
      },
    },
    {
      title: 'Book Details',
      onPress: () => {
        navigate('Reading09');
      },
    },
    {
      title: 'Bookmark Listen',
      onPress: () => {
        navigate('Reading10');
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
      <IntroList data={data} title="Reading" />
    </Container>
  );
});

export default ReadingIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
