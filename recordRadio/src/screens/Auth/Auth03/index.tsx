import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, CheckBox, Button, Icon } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import { Container, Content, Text, VStack, HStack, LinearGradientText} from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';


const Auth03 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const heightImg = 330 * (height / 812);

  const [term,setTerm]=React.useState(false)
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.auth.auth02}
          style={{width: width, height: heightImg}}
        />
        <VStack mh={16} mb={40}>
           <ThemeLogo />
           <LinearGradientText
            text={
              <Text category='header'>Hi! Buddy</Text>
            }
          />
           <Text category='body' status='placeholder'>Outsource your welcome project and get it quickly done and delivered remotely online.</Text>
        </VStack>
        <HStack justify='flex-start' itemsCenter mh={16} mb={24}>
           <CheckBox checked={term} onChange={setTerm} children='You agree with our'/>
           <Text category='h5'>Term & Policy</Text>
        </HStack>
        <VStack mh={16} rowGap={24}>
          <Button children={'Continue with Apple'} status='control' accessoryLeft={<Icon pack='assets' name='arrow-right'/>} onPress={goBack}/>
          <Button children={'Continue with Email'} accessoryRight={<Icon pack='assets' name='arrow-right'/>}onPress={goBack}/>
        </VStack>
      </Content>
      <HStack justify='center' itemsCenter mh={16} mb={24}>
        <Text category='body'>Have an account? </Text>
        <Text category='h5' status='warning'>Sign In!</Text>
      </HStack>
    </Container>
  );
});

export default Auth03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  background: {
    flex: 1,
  },
  content: {},
});
