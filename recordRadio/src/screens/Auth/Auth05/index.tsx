import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, useTheme, StyleService, useStyleSheet, Button } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, VStack, HStack, LinearGradientText } from 'components';
import InputCodeOtp from 'elements/Auth/InputCodeOtp';
// ----------------------------- Utils -----------------------------------
import {useCountDownUtil} from 'utils';


const Auth05 = memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const [time, reset] = useCountDownUtil(30);
  const [code, setCode] = React.useState('');
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<NavigationAction />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack itemsCenter mt={4}>
          <Image source={Images.auth.auth04} />
        </VStack>
        <LinearGradientText
          textStyle={{alignSelf:"center"}}
          text={
            <Text marginBottom={8} category="h1" center marginTop={52}>
            Verify Phonenumber
          </Text>
          }/>
        <HStack itemsCenter justify="center" mt={8} mb={24}>
          <Text category="body" status="placeholder">
            Enter code we sent to{' '}
          </Text>
          <Text category="h5">+84 1234567890</Text>
        </HStack>
        <InputCodeOtp
          style={styles.enterCode}
          {...{code, setCode}}
          codeLength={5}
          autoFocus
        />
        <Button
          children={time > 0 ? `${time} resend code` : `Resend`}
          disabled={time > 0}
          onPress={goBack}
        />
        <Text category="h5" marginVertical={24} center>
          Change the phonenumber
        </Text>
      </Content>
    </Container>
  );
});

export default Auth05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  enterCode: {
    marginBottom: 24,
  },
});
