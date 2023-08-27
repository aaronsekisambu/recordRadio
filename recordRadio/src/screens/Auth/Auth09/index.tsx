import React, {memo} from 'react';
import {Image, TouchableOpacity} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, Input, Button, Icon } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout, useToggle} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import { Container, Content, Text, LinearGradientText, VStack } from 'components';

const Auth09 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [secureTextEntry,toggle]=useToggle(false)
  return (
    <Container style={styles.container} level="2">
      <TopNavigation appearance="control" />
      <Image source={Images.auth.auth09} />
      <Content
        level="1"
        contentContainerStyle={styles.contentContainer}
        style={styles.content}>
        <VStack>
          <LinearGradientText
            text={<Text category="h3">Change Password</Text>}
          />
          <Text category="body" marginTop={8} status="placeholder">
            Reset code was sent to your email. Please enter the code and create
            new password.
          </Text>
        </VStack>
        <Input
           accessoryRight={
            <TouchableOpacity onPress={toggle}>
              <Icon pack='assets' name={secureTextEntry?'eye':'eye-slash'} style={styles.icon}/>
            </TouchableOpacity>}
          secureTextEntry={secureTextEntry}
          placeholder={'Utilmate'}
          label={() => (
            <Text marginBottom={8} category="h5">
              New password
            </Text>
          )}
        />
        <Input
          accessoryRight={
          <TouchableOpacity onPress={toggle}>
            <Icon pack='assets' name={secureTextEntry?'eye':'eye-slash'} style={styles.icon}/>
          </TouchableOpacity>}
          placeholder={'Utilmate'}
          label={() => (
            <Text marginBottom={8} category="h5">
              Re - New password
            </Text>
          )}
        />
        <Button children="Reset Password" onPress={goBack}/>
      </Content>
      <VStack level="1">
        <Text center  category="body" uppercase status="warning"  marginBottom={bottom + 4}>Create An Account</Text>
      </VStack>
    </Container>
  );
});

export default Auth09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 16,
    gap: 24,
  },
  content: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  icon:{
    width:20,
    height:20,
    tintColor:"text-white-color"
  }
});
