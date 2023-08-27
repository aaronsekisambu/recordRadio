import React, {memo} from 'react';
import {ImageBackground} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
  Input,
  Icon,
  CheckBox,
  Button,
} from '@ui-kitten/components';

// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import {
  Container,
  Text,
  VStack,
  HStack,
  RoundedButton,
  LinearGradientText,
} from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';

// ----------------------------- KeyboardAwareScrollView -----------------------------------
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Auth02 = memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const [saveLogin, setSaveLogin] = React.useState(false);
  return (
    <Container style={styles.container}>
      <ImageBackground
        source={Images.auth.background_01}
        style={styles.background}>
        <TopNavigation
          accessoryLeft={<ThemeLogo size={80} onPress={goBack} />}
          accessoryRight={
            <Text category="h5" status="warning" marginRight={16}>
              Sign Up Now!
            </Text>
          }
        />
        <KeyboardAwareScrollView contentContainerStyle={styles.content}>
          <LinearGradientText
            text={
              <Text category="giant" marginBottom={4}>
                {`Welcome\nBack Friends!`}
              </Text>
            }
          />
          <Text status="placeholder" category="body">
            Login now!
          </Text>
          <Input
            placeholder={'Username'}
            accessoryLeft={<Icon pack="assets" name="user" />}
            style={styles.userInput}
          />
          <Input
            placeholder={'Password'}
            accessoryLeft={<Icon pack="assets" name="key" />}
            style={styles.passwordInput}
          />
          <VStack>
            <HStack mb={16}>
              <CheckBox
                children={'Save login'}
                onChange={setSaveLogin}
                checked={saveLogin}
              />
              <Text category="body">Forgot Password?</Text>
            </HStack>
            <HStack>
              <Button
                style={styles.buttonLogin}
                children={'Login'}
                onPress={goBack}
                accessoryRight={<Icon pack="assets" name="arrow-right" />}
              />
              <RoundedButton
                icon="fingerprint"
                status="transparent"
                onPress={goBack}
              />
            </HStack>
          </VStack>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </Container>
  );
});

export default Auth02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  background: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  userInput: {
    flex: 1,
    marginBottom: 16,
    marginTop: 24,
  },
  passwordInput: {
    flex: 1,
    marginBottom: 24,
  },
  buttonLogin: {
    flex: 1,
    marginRight: 8,
  },
});
