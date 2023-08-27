import React, { memo } from "react";
import { Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Button,
  Icon,
} from "@ui-kitten/components";
// ----------------------------- Assets -----------------------------------
import { Images } from "assets/images";
// ----------------------------- Components -----------------------------------
import {
  NavigationAction,
  HStack,
  Container,
  Content,
  Text,
  VStack,
  LinearGradientText,
} from "components";

const Auth04 = memo(() => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<NavigationAction />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack alignSelfCenter mb={28}>
          <Image source={Images.auth.auth03} />
        </VStack>
        <VStack margin={24} rowGap={8}>
          <LinearGradientText
            text={"Forgot Password?"}
            textStyle={{ textAlign: "center",fontSize:36,lineHeight: 44,fontWeight: "bold"  }}
          />
          <Text category="body" center status="placeholder">
            We have send magic link to email. Please verify email and access to
            Utilmate
          </Text>
        </VStack>
        <VStack rowGap={24}>
          <Button
            style={styles.button}
            children={"Open your Email"}
            accessoryLeft={<Icon pack="assets" name="mail" />}
          />
          <Button
            children={"Send a new Email"}
            status="info"
            style={styles.button}
          />
          <Text category="h5" status="warning" center>
            Enter code manually
          </Text>
        </VStack>
      </Content>
      <HStack justify="center" itemsCenter mh={16} mb={24}>
        <Text category="body">Have an account? </Text>
        <Text category="h5" status="warning">
          Sign In!
        </Text>
      </HStack>
    </Container>
  );
});

export default Auth04;

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
  button: {},
});
