import React, {memo} from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, TopNavigation, useStyleSheet, useTheme} from '@ui-kitten/components';
// ----------------------------- @Types -----------------------------------
import {OnboardingStackParamList} from 'types/navigation-types';
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


const OnboardingIntro = memo(() => {
  const {goBack, navigate} =
    useNavigation<NavigationProp<OnboardingStackParamList>>();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const data: IntroButtonProps[] = [
    {
      title: 'Onboarding 01',
      onPress: () => {
        navigate('Onboarding01');
      },
    },
    {
      title: 'Onboarding 02',
      onPress: () => {
        navigate('Onboarding02');
      },
    },
    {
      title: 'Onboarding 03',
      onPress: () => {
        navigate('Onboarding03');
      },
    },
    {
      title: 'Onboarding 04',
      onPress: () => {
        navigate('Onboarding04');
      },
    },
    {
      title: 'Onboarding 05',
      onPress: () => {
        navigate('Onboarding05');
      },
    },
    {
      title: 'Onboarding 06',
      onPress: () => {
        navigate('Onboarding06');
      },
    },
    {
      title: 'Onboarding 07',
      onPress: () => {
        navigate('Onboarding07');
      },
    },
    {
      title: 'Onboarding 08',
      onPress: () => {
        navigate('Onboarding08');
      },
    },
    {
      title: 'Onboarding 09',
      onPress: () => {
        navigate('Onboarding09');
      },
    },
    {
      title: 'Onboarding 10',
      onPress: () => {
        navigate('Onboarding10');
      },
    },
    {
      title: 'Onboarding 11',
      onPress: () => {
        navigate('Onboarding11');
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
      <IntroList data={data} title="Onboarding" />
    </Container>
  );
});

export default OnboardingIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
