import React, { memo } from "react";
import { View, Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";

// ----------------------------- @Types -----------------------------------
import { IntroButtonProps } from "types/element-types";

// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from "@react-navigation/native";

// ----------------------------- Components -----------------------------------
import { NavigationAction, Container } from "components";
import { AuthStackParamList } from "types/navigation-types";
import IntroList from "elements/App/IntroList";
import ThemeLogo from "elements/App/ThemeLogo";

const AuthIntro = memo(() => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<AuthStackParamList>>();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const data: IntroButtonProps[] = [
    {
      title: "Add mobile number",
      onPress: () => {
        navigate("Auth01");
      },
    },
    {
      title: "Login",
      onPress: () => {
        navigate("Auth02");
      },
    },
    {
      title: "Sign Up Social",
      onPress: () => {
        navigate("Auth03");
      },
    },
    {
      title: "Forgot Password",
      onPress: () => {
        navigate("Auth04");
      },
    },
    {
      title: "Verify",
      onPress: () => {
        navigate("Auth05");
      },
    },
    {
      title: "KYC",
      onPress: () => {
        navigate("Auth06");
      },
    },
    {
      title: "Account Information",
      onPress: () => {
        navigate("Auth07");
      },
    },
    {
      title: "Register",
      onPress: () => {
        navigate("Auth08");
      },
    },
    {
      title: "Reset Password",
      onPress: () => {
        navigate("Auth09");
      },
    },
    {
      title: "Sign Up",
      onPress: () => {
        navigate("Auth10");
      },
    },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<NavigationAction icon="close" />}
      />
      <IntroList data={data} title="Authenticate" />
    </Container>
  );
});

export default AuthIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {},
});
