import * as React from "react";
import { Image, ImageRequireSource, TouchableOpacity } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
// ----------------------------- Assets -----------------------------------
import { Images } from "assets/images";
// ----------------------------- Hook -----------------------------------
import { useLayout, useToggle } from "hooks";
// ----------------------------- Components -----------------------------------
import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";

const FitnessHealth01 = () => {
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [isPlay, toggle] = useToggle(false);

  const Task = ({
    img,
    title,
    describe,
    isDone,
  }: {
    img: ImageRequireSource;
    title: string;
    describe: string;
    isDone?: boolean;
  }) => {
    return (
      <HStack level="2" padding={16} mh={8} border={16} itemsCenter>
        <HStack justify="flex-start" gap={16} itemsCenter>
          <Image source={img} style={{ width: 56, height: 56 }} />
          <VStack gap={8}>
            <Text category="h4">{title}</Text>
            <Text category="subhead" status="placeholder">
              {describe}
            </Text>
          </VStack>
        </HStack>
        {isDone && <Image source={Images.health.acitve} />}
      </HStack>
    );
  };

  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        style={[styles.topNavigation, { paddingTop: top + 8 }]}
        accessoryLeft={<NavigationAction />}
      />
      <Content>
        <VStack itemsCenter justify="center" level="2" style={styles.video}>
          <Image source={Images.health.exercise} style={styles.image} />
          <TouchableOpacity
            activeOpacity={1}
            style={styles.button}
            onPress={toggle}
          >
            <Image source={isPlay ? Images.health.pause : Images.health.play} />
          </TouchableOpacity>
        </VStack>
        <VStack gap={8}>
          <Task
            isDone
            title="Cheerleading"
            img={Images.health.fitness_01}
            describe="3 Set - 2 Rep"
          />
          <Task
            title="Fierce Fest"
            img={Images.health.fitness_02}
            describe="4 Set - 2 Rep"
          />
          <Task
            title="Pose Palace"
            img={Images.health.fitness_03}
            describe="3 Set - 2 Rep"
          />
          <Task
            title="Don’t Stop Until You Drop"
            img={Images.health.fitness_04}
            describe="4 Set - 2 Rep"
          />
        </VStack>
      </Content>
    </Container>
  );
};
export default FitnessHealth01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: "background-basic-color-2",
  },
  content: {
    marginTop: 12,
  },
  image: {},
  button: {
    position: "absolute",
    zIndex: 100,
    left: 120,
    right: 120,
    alignItems: "center",
    alignSelf: "center",
    top: "30%",
  },
  video: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingBottom: 24,
    marginBottom: 8,
  },
});
