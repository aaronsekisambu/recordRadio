import React, {memo} from 'react';
import {Image, TouchableOpacity} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {Icon, Input, Button, ViewPager, StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hooks -----------------------------------
import {useLayout, useToggle} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import {Container, Content, Text, TabBar, VStack, HStack, LinearGradientText} from 'components';

const Auth10 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeTab, setActiveTab] = React.useState(0);
  const [secureTextEntry, toggle] = useToggle(false);

  return (
    <Container style={styles.container}>
      <Image source={Images.auth.background_02} style={{width: width}} />
      <Content
        level="1"
        style={styles.content}
        contentContainerStyle={styles.contentContainer}>
        <TabBar
          tabs={['Sign In', 'Sign Up']}
          onChangeTab={setActiveTab}
          tabActive={activeTab}
          style={styles.tabbar}
        />
        <ViewPager selectedIndex={activeTab} onSelect={setActiveTab}>
          <VStack ph={16}>
            <LinearGradientText
              text={<Text category="h3">Welcom to Utilmate!</Text>}
            />
            <Input
              style={styles.input}
              placeholder={'Username'}
              label={() => (
                <Text marginBottom={8} category="h6">
                  Username
                </Text>
              )}
            />
            <Input
              style={styles.input}
              accessoryRight={
                <TouchableOpacity onPress={toggle}>
                  <Icon
                    pack="assets"
                    name={secureTextEntry ? 'eye' : 'eye-slash'}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              }
              placeholder={'Password'}
              label={() => (
                <Text marginBottom={8} category="h6">
                  Re - New password
                </Text>
              )}
            />
            <VStack gap={24}>
              <Button
                style={styles.signup}
                onPress={goBack}
                children="Sign Up Now"
                accessoryRight={<Icon pack="assets" name="caret-right" />}
              />
              <Text category="subhead" status="placeholder" center>
                or Sign Up with social account
              </Text>
              <HStack gap={16}>
                <Button
                  style={styles.socialButton}
                  status="secondary"
                  children={'Facebook'}
                  accessoryLeft={() => <Icon pack="assets" name="facebook" />}
                />
                <Button
                  style={styles.socialButton}
                  status="secondary"
                  children={'Twitter'}
                  accessoryLeft={() => <Icon pack="assets" name="twitter" />}
                />
              </HStack>
            </VStack>
          </VStack>
          <VStack></VStack>
        </ViewPager>
      </Content>
      <Text
        category="c1"
        marginHorizontal={24}
        marginBottom={12}
        center
        status="placeholder">
        By clicking Sign Up you are agreeing to the Terms of Use and the Privacy
        Policy
      </Text>
    </Container>
  );
});

export default Auth10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  contentContainer: {
    paddingTop: 24,
  },
  content: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
  },
  tabbar: {
    marginBottom: 32,
    marginHorizontal: 16,
  },
  input: {
    marginTop: 24,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'text-white-color',
  },
  signup: {
    marginTop: 32,
  },
  socialButton: {
    flex: 1,
  },
});
