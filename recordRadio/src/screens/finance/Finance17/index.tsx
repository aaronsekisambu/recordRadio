import React, { memo } from 'react';
import { Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, Button } from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';

// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, LinearGradientText, VStack } from 'components';
import { Images } from 'assets/images';

const Finance17 = memo(() => {
  const { goBack } = useNavigation();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <VStack gap={4} itemsCenter>
          <Image source={Images.goal} style={{ width: 200, height: 200 }} />
          <LinearGradientText
            text="Remove Goal"
            start={{ x: 0, y: 1 }}
            end={{ x: 1.2, y: 0.2 }}
            textStyle={styles.textHeader}
          />
          <Text center>Do you wnat remove goal of saving $20,000 to rent a house in 2023</Text>
          <Text center category="h5" status="warning">
            You have done 60%
          </Text>
        </VStack>
        <VStack gap={22}>
          <Button status="primary-active" children={'Goal accomplished'} onPress={goBack} />
          <Button
            status="primary-active"
            children={'Goals are too hard to achieve'}
            onPress={goBack}
          />
          <Button status="primary-active" children={'Asking for what'} onPress={goBack} />
          <Button children={'Continue Goal'} aria-selected onPress={goBack} />
        </VStack>
      </Content>
    </Container>
  );
});

export default Finance17;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  textHeader: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    minHeight: '85%',
  },
  primaryActive: {
    backgroundColor: '#3E517A',
    borderColor: '#3E517A',
  },
});
