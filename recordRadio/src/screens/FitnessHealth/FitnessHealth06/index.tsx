import * as React from "react";
import { Image, Platform } from "react-native";
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
// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";
// ----------------------------- Components -----------------------------------
import {
  Container,
  Content,
  HStack,
  LinearGradientText,
  NavigationAction,
  Text,
  VStack,
} from "components";
import BottomBar from "./BottomBar";
import CardLession from "./CardLession";

const FitnessHealth01 = () => {
  const styles = useStyleSheet(themedStyles);
  const { width } = useLayout();
  const Task = ({ title, amount }: { title: string; amount: string }) => {
    return (
      <VStack gap={8} border={16} padding={24} style={styles.task} itemsCenter>
        <Text category="h2">{amount}</Text>
        <Text category="subhead">{title}</Text>
      </VStack>
    );
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="dots-six-vertical" />}
        accessoryRight={<NavigationAction icon="bell" />}
      />
      <Content>
        <HStack gap={12} mh={16} mb={32}>
          <Task title="Training Complete" amount={"13"} />
          <Task title="Current Weight" amount={"69 kg"} />
        </HStack>
        <LinearGradientText text="Top trainer" textStyle={styles.title} />
        <Content horizontal contentContainerStyle={styles.contentUser}>
          {TRAINNER.map((user, index) => {
            return <Image source={user} key={index} />;
          })}
        </Content>
        <VStack gap={16} mt={32}>
          <LinearGradientText text="My Trainning" textStyle={styles.title} />
          <CardLession
            item={LESSION}
            style={{ width: width - 32, height: 214 }}
          />
        </VStack>
      </Content>
      <VStack style={styles.bottomBar}>
        <BottomBar />
      </VStack>
    </Container>
  );
};
export default FitnessHealth01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 12,
  },
  task: {
    borderWidth: 1,
    borderColor: "#2A3947",
    flex: 1,
  },
  title: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "bold",
    fontFamily: "SpaceGrotesk-Bold",
    marginLeft: 16,
  },
  contentUser: {
    gap: 8,
    paddingLeft: 16,
    marginTop: 16,
  },
  bottomBar: {
    position: "absolute",
    bottom: 24,
    alignItems: "center",
    alignSelf:"center"
  },
});

const TRAINNER = [
  Images.health.user_01,
  Images.health.user_02,
  Images.health.user_03,
  Images.health.user_04,
  Images.health.user_05,
];
const LESSION = {
  title: "Build muscle",
  des: "4 Week",
  img: Images.health.task_01,
};
