import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {useStyleSheet, Input, Button, Icon, StyleService} from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hooks -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components && Elements -----------------------------------
import {Container, Content, Text, HStack, IDivider, VStack, LinearGradientText} from 'components';
import Carousel from 'react-native-reanimated-carousel';

const Auth08 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const data = [
    Images.avatar.apple,
    Images.avatar.gg,
    Images.avatar.facebook,
    Images.avatar.tw,
  ];
  const tips = [
    {
      title: 'Return on Equity',
      des: 'Why would I want to trade an Event Contract over asset class?',
    },
    {
      title: 'Return on Equity',
      des: 'Why would I want to trade an Event Contract over asset class?',
    },
    {
      title: 'Return on Equity',
      des: 'Why would I want to trade an Event Contract over asset class?',
    },
  ];
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <LinearGradientText text={<Text category="giant">Register</Text>} />
        <VStack>
          <Input
            style={styles.inputContainer}
            placeholder="Phonenumber"
            label={() => (
              <Text category="h4" marginBottom={16}>
                Enter your phonenumber
              </Text>
            )}
          />
          <Button children={'Continue'} onPress={goBack} />
        </VStack>
        <HStack itemsCenter justify="space-between">
          <IDivider marginRight={24} />
          <Text status="placeholder" category="body">
            or
          </Text>
          <IDivider marginLeft={24} />
        </HStack>
        <HStack>
          {data.map((item, i) => {
            return <Image source={item} key={i} />;
          })}
        </HStack>
      </Content>
      <Carousel
        width={width * 0.8}
        data={tips}
        style={{width: '100%'}}
        height={98 * (height / 812)}
        renderItem={({item}) => {
          return (
            <HStack level="2" itemsCenter padding={16} border={12} ml={16}>
              <Icon pack="assets" name="cardholder" />
              <VStack ml={16}>
                <Text marginBottom={4} category="h5">
                  {item.title}
                </Text>
                <Text category="subhead" status="placeholder">
                  {item.des}
                </Text>
              </VStack>
            </HStack>
          );
        }}
      />
      <Text center uppercase status="warning" marginTop={32} marginBottom={24}>
        Sign In!
      </Text>
    </Container>
  );
});

export default Auth08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    rowGap: 40,
  },
  inputContainer: {
    marginBottom: 32,
  },
});
