import React, { memo } from 'react';
import { Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, Button } from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, VStack } from 'components';
import { Images } from 'assets/images';

const Food07 = memo(() => {
  const { goBack } = useNavigation();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <VStack>
          <VStack gap={8}>
            <Text category="h1" center marginBottom={8}>
              Success
            </Text>
            <Text category="h5" center style={{ color: '#A0A7AD' }} marginHorizontal={40}>
              Establish your own food awards and share your favourites with you
            </Text>
            {/* @ts-ignore */}
            <Image source={Images.food.success} style={styles.image} />
          </VStack>
        </VStack>
        <Text status="warning" category="h5" center>
          Check your order
        </Text>
      </Content>
      <Button children="Continue Order" style={styles.button} onPress={goBack} />
    </Container>
  );
});

export default Food07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  image: {
    alignSelf: 'center',
  },
  button: {
    marginTop: 8,
    marginHorizontal: 16,
  },
});
