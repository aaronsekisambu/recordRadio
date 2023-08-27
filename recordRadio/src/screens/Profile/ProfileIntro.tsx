import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import { NavigationAction, Container } from 'components';
import IntroList from 'elements/App/IntroList';
import ThemeLogo from 'elements/App/ThemeLogo';
// ----------------------------- Types -----------------------------------
import { ProfileStackParamList } from 'types/navigation-types';
import { IntroButtonProps } from 'types/element-types';

const ProfileIntro = memo(() => {
  const { navigate } = useNavigation<NavigationProp<ProfileStackParamList>>();
  const styles = useStyleSheet(themedStyles);

  const data: IntroButtonProps[] = [
    {
      title: 'Profile 01',
      onPress: () => {
        navigate('Profile01');
      },
    },
    {
      title: 'Profile 02',
      onPress: () => {
        navigate('Profile02');
      },
    },
    {
      title: 'Profile 03',
      onPress: () => {
        navigate('Profile03');
      },
    },
    {
      title: 'Profile 04',
      onPress: () => {
        navigate('Profile04');
      },
    },
    {
      title: 'Profile 05',
      onPress: () => {
        navigate('Profile05');
      },
    },
    {
      title: 'Profile 06',
      onPress: () => {
        navigate('Profile06');
      },
    },
    {
      title: 'Profile 07',
      onPress: () => {
        navigate('Profile07');
      },
    },
    {
      title: 'Profile 08',
      onPress: () => {
        navigate('Profile08');
      },
    },
    {
      title: 'Profile 09',
      onPress: () => {
        navigate('Profile09');
      },
    },
    {
      title: 'Profile 10',
      onPress: () => {
        navigate('Profile10');
      },
    },
    {
      title: 'Profile 11',
      onPress: () => {
        navigate('Profile11');
      },
    },
    {
      title: 'Profile 12',
      onPress: () => {
        navigate('Profile12');
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
      <IntroList data={data} title="Profile" />
    </Container>
  );
});

export default ProfileIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
