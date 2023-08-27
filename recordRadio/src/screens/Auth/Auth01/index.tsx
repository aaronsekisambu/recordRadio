import React, { memo } from "react";
import { View, Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
  Layout,
  Input,
  Button,
  Icon,
} from "@ui-kitten/components";

// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";

// ----------------------------- Components -----------------------------------
import { Container, Text, VStack, LinearGradientText } from "components";
import { Images } from "assets/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ThemeLogo from "elements/App/ThemeLogo";
const Auth01 = memo(() => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <VStack level="2">
        <TopNavigation
          appearance="control"
          style={[styles.topNavigation, { paddingTop: top + 8 }]}
          accessoryLeft={<ThemeLogo source={Images.small_logo} />}
        />
      </VStack>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.content}
        bounces={false}
        extraScrollHeight={10}
      >
        <VStack level="2" pt={12} pb={24} itemsCenter style={styles.layout}>
          <Image source={Images.auth.auth01} />
        </VStack>
        <VStack mh={16} mt={32}>
          <LinearGradientText
            text={
              <Text category="h1" marginBottom={4}>
                Add mobile number
              </Text>
            }
          />
          <Text status="placeholder" category="body">
            Your mobile numer
          </Text>
          <Input placeholder="+84" style={styles.input} />
        </VStack>
      </KeyboardAwareScrollView>
      <VStack mh={16}>
        <Button
          children={"Next"}
          accessoryRight={<Icon pack="assets" name="arrow-right" />}
        />
        <Text category="h5" center marginVertical={24} onPress={goBack}>
          Not now
        </Text>
      </VStack>
    </Container>
  );
});

export default Auth01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {},
  layout: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    height: "80%",
    justifyContent: "flex-end",
  },
  input: {
    flex: 1,
    marginTop: 20,
  },
});
