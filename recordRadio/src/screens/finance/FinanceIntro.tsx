import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { NavigationAction, Container } from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import IntroList from 'elements/App/IntroList';
import ThemeLogo from 'elements/App/ThemeLogo';

import { IntroButtonProps } from 'types/element-types';
import { FinanceStackParamList } from 'types/navigation-types';

const FinanceIntro = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<FinanceStackParamList>>();

  const data: IntroButtonProps[] = [
    {
      title: '01. Bill-Dashboard',
      onPress: () => {
        navigate('Finance01');
      },
    },
    {
      title: '02. Bill-Payment',
      onPress: () => {
        navigate('Finance02');
      },
    },
    {
      title: '03. Invest',
      onPress: () => {
        navigate('Finance03');
      },
    },
    {
      title: '04. Stock',
      onPress: () => {
        navigate('Finance04');
      },
    },
    {
      title: '05. Portfolios',
      onPress: () => {
        navigate('Finance05');
      },
    },
    {
      title: '06. Invest',
      onPress: () => {
        navigate('Finance06');
      },
    },
    {
      title: '07. Wallet',
      onPress: () => {
        navigate('Finance07');
      },
    },
    {
      title: '08. Wallet 2',
      onPress: () => {
        navigate('Finance08');
      },
    },
    {
      title: '09. Stock',
      onPress: () => {
        navigate('Finance09');
      },
    },
    {
      title: '10. Wallet 3',
      onPress: () => {
        navigate('Finance10');
      },
    },
    {
      title: '11. Task Earn',
      onPress: () => {
        navigate('Finance11');
      },
    },
    {
      title: '12. Profits',
      onPress: () => {
        navigate('Finance12');
      },
    },
    {
      title: '13. Payout',
      onPress: () => {
        navigate('Finance13');
      },
    },
    {
      title: '14. Main Saving',
      onPress: () => {
        navigate('Finance14');
      },
    },
    {
      title: '15. Goal Details',
      onPress: () => {
        navigate('Finance15');
      },
    },
    {
      title: '16. Chart',
      onPress: () => {
        navigate('Finance16');
      },
    },
    {
      title: '17. Delete Goal',
      onPress: () => {
        navigate('Finance17');
      },
    },
    {
      title: '18. Friends Transactions',
      onPress: () => {
        navigate('Finance18');
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
      <IntroList data={data} title="Finance" />
    </Container>
  );
});

export default FinanceIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
