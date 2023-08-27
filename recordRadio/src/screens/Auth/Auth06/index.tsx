import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Button,
  Icon,
} from '@ui-kitten/components';
import {EvaStatus} from '@ui-kitten/components/devsupport';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import {
  NavigationAction,
  Content,
  Container,
  Text,
  VStack,
  HStack,
} from 'components';
import {LinearGradientText} from 'components/LinearGradientText';

const Auth06 = memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const ButtonKYC = ({
    title,
    describe,
    onPress,
    status,
  }: {
    title: string;
    describe: string;
    onPress?(): void;
    status?: EvaStatus;
  }) => {
    return (
      <HStack level="2" itemsCenter mh={16} mb={16} padding={16} border={16}>
        <HStack itemsCenter columnGap={16}>
          <Button
            status={status}
            accessoryLeft={<Icon pack="assets" name="newspaper-clipping" />}
            size="navigate"
          />
          <VStack>
            <Text category="h5" marginBottom={4}>
              {title}
            </Text>
            <Text category="subhead" status="placeholder">
              {describe}
            </Text>
          </VStack>
        </HStack>
        <Icon pack="assets" name="caret-right" style={styles.iconButton} />
      </HStack>
    );
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <Text category="h5" status="warning">
            Skip
          </Text>
        }
      />
      <Content>
        <VStack itemsCenter mt={4}>
          <Image source={Images.auth.auth06} />
        </VStack>
        <VStack mv={32}>
          <LinearGradientText
            textStyle={{textAlign: 'center',fontSize:36,lineHeight:44,fontWeight: 'bold'}}
            text={'Verify eKYC'}
          />
          <Text center status='placeholder'>Verify your identity as fast as you can</Text>
        </VStack>
        <VStack>
          <ButtonKYC
            status="success"
            title="Scan your ID, Passport"
            describe={'Take picture of both side card'}
          />
          <ButtonKYC
            title="Take a Selfie"
            describe={'Verify Face'}
            status="info"
          />
          <ButtonKYC
            title="Match Face"
            describe={'Matching card and selfie'}
            status="control"
          />
        </VStack>
      </Content>
      <VStack mh={16} pv={8}>
        <Button children={'Continue'} onPress={goBack} />
      </VStack>
    </Container>
  );
});

export default Auth06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 16,
  },
  iconButton: {
    width: 24,
    height: 24,
    tintColor: 'text-placeholder-color',
  },
});
