import React, { memo } from 'react';
import { View, Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
  Button,
  Avatar,
} from '@ui-kitten/components';

// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';

// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, VStack, HStack } from 'components';
import ProgressBarLinear from './ProgressBarLinear';
import { Images } from 'assets/images';

const Finance18 = memo(() => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        alignment="center"
        title={<Text marginTop={4}>Buy House</Text>}
        style={[styles.topNavigation, { paddingTop: top + 8 }]}
        accessoryLeft={<NavigationAction icon={'close'} />}
      />
      <VStack level="1" style={styles.top} />
      <Content contentContainerStyle={styles.contentContainer}>
        <VStack gap={16}>
          <HStack justify="flex-start" itemsCenter gap={8}>
            <Avatar source={Images.avatar.avatar_01} size="tiny" />
            <Text category="h6">Cameron William</Text>
          </HStack>
          <ProgressBarLinear
            progress={(example_transition.amount / example_transition.goal) * 100}
            amount={example_transition.amount}
          />
          <VStack style={styles.card}>
            <Text category="h3">{example_transition.title}</Text>
            <Text category="subhead">{example_transition.data.length} mutual saving gold</Text>
          </VStack>
          <VStack mt={16} gap={24}>
            <Text category="h4">Transaction History</Text>
            {example_transition.data.map((item, i) => {
              return (
                <HStack key={i}>
                  <VStack>
                    <Text category="body" marginBottom={8}>
                      {'Add Money'}
                    </Text>
                    <Text category="c1" opacity={0.5}>
                      {item.create_at}
                    </Text>
                  </VStack>
                  <Text category="h5">
                    {item.amount.toLocaleString('en-US', {
                      currency: 'USD',
                      style: 'currency',
                    })}
                  </Text>
                </HStack>
              );
            })}
          </VStack>
        </VStack>
      </Content>
      <VStack>
        <Button children={'Invite Friends More Goal'} onPress={goBack} style={styles.button} />
      </VStack>
    </Container>
  );
});

export default Finance18;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  topNavigation: {
    backgroundColor: 'color-primary-default',
    paddingBottom: 48,
  },
  contentContainer: {
    backgroundColor: 'background-basic-color-1',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  top: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 24,
    marginTop: -24,
  },
  card: {
    backgroundColor: '#C0A975',
    padding: 16,
    borderRadius: 16,
    gap: 4,
  },
  button: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 8,
  },
});
const example_transition = {
  title: 'This is best Friend!',
  amount: 5680,
  goal: 40000,
  data: [
    { title: 'Add money', amount: 15.4, create_at: '10/10/2023 06:27' },
    { title: 'Add money', amount: 15.4, create_at: '10/10/2023 06:27' },
    { title: 'Add money', amount: 15.4, create_at: '10/10/2023 06:27' },
    { title: 'Add money', amount: 15.4, create_at: '10/10/2023 06:27' },
    { title: 'Add money', amount: 15.4, create_at: '10/10/2023 06:27' },
  ],
};
