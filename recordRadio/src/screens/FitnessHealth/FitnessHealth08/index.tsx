import * as React from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Icon,
} from "@ui-kitten/components";
// ----------------------------- Assets -----------------------------------
import { Images } from "assets/images";
// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Components -----------------------------------
import {
  Container,
  Content,
  HStack,
  NavigationAction,
  VStack,
  Text,
  LinearGradientText,
} from "components";
// ----------------------------- Reanimated 2 -----------------------------------
import CardLession from "../FitnessHealth06/CardLession";

const FitnessHealth01 = () => {
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const Card = ({ icon, title }: { icon: string; title: string }) => {
    return (
      <VStack gap={24} style={styles.card} level="2">
        <Icon pack="assets" name={icon} style={styles.icon} />
        <Text category="subhead">{title}</Text>
      </VStack>
    );
  };
  const Programs = ({
    item,
  }: {
    item: { icon: string; title: string; des: string };
  }) => {
    return (
      <HStack
        gap={24}
        level="2"
        padding={16}
        border={16}
        justify="flex-start"
        itemsCenter
      >
        <Icon pack="assets" name={item.icon} style={styles.iconProgram} />
        <VStack>
          <Text category="h5">{item.title}</Text>
          <Text category="subhead" style={{ color: "#717B84" }}>
            {item.des}
          </Text>
        </VStack>
      </HStack>
    );
  };

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryRight={<NavigationAction icon="search" />}
        accessoryLeft={<NavigationAction icon="circles-four" />}
      />
      <Content contentContainerStyle={styles.content}>
        <HStack gap={4}>
          <Card title="Workouts" icon="barbell" />
          <Card title="Nutrition" icon="applelogo" />
          <Card title="Community" icon="user-three" />
        </HStack>
        <LinearGradientText text="Hot programs" textStyle={styles.title} />
        <VStack gap={4}>
          {DATA.map((item, index) => {
            return <Programs item={item} key={index} />;
          })}
        </VStack>
        <LinearGradientText text="My trainning" textStyle={styles.title} />
        <VStack gap={4}>
          {LESSION.map((item, index) => {
            return (
              <CardLession
                item={item}
                key={index}
                style={{
                  width: width - 8,
                  height: 220 * (height / 812),
                  marginHorizontal: 0,
                }}
              />
            );
          })}
        </VStack>
      </Content>
    </Container>
  );
};
export default FitnessHealth01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 12,
    marginHorizontal: 4,
    paddingBottom: 60,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "text-white-color",
  },
  card: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: "SpaceGrotesk-Bold",
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 12,
  },
  iconProgram: {
    tintColor: "#B1CEDE",
    width: 28,
    height: 28,
  },
});
const DATA = [
  {
    title: "Bodyweight Burn",
    des: "Sweat it out with a full body workout",
    icon: "eight",
  },
  {
    title: "Bodyweight Burn",
    des: "Sweat it out with a full body workout",
    icon: "paper-plane",
  },
  {
    title: "Bodyweight Burn",
    des: "Sweat it out with a full body workout",
    icon: "person",
  },
];
const LESSION = [
  { title: "Build muscle", des: "4 Week", img: Images.health.task_01 },
  { title: "Build muscle", des: "4 Week", img: Images.health.task_02 },
  { title: "Build muscle", des: "4 Week", img: Images.health.task_03 },
];
