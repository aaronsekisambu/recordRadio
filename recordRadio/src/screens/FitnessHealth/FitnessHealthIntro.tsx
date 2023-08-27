import React, { memo } from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  StyleService,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
// ----------------------------- @Types -----------------------------------
import { FitnessHealthStackParamList } from "types/navigation-types";
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from "@react-navigation/native";
// ----------------------------- Types -----------------------------------
import { IntroButtonProps } from "types/element-types";
// ----------------------------- Components & Elements -----------------------------------
import { Container } from "components";
import IntroList from "elements/App/IntroList";
import ThemeLogo from "elements/App/ThemeLogo";

const FitnessHealthIntro = memo(() => {
  const { navigate } = useNavigation<NavigationProp<FitnessHealthStackParamList>>();
  const styles = useStyleSheet(themedStyles);

  const data: IntroButtonProps[] = [
    {
      title: "FitnessHealth 01",
      onPress: () => {
        navigate("FitnessHealth01");
      },
    },
    {
      title: "FitnessHealth 02",
      onPress: () => {
        navigate("FitnessHealth02");
      },
    },
    {
      title: "FitnessHealth 03",
      onPress: () => {
        navigate("FitnessHealth03");
      },
    },
    {
      title: "FitnessHealth 04",
      onPress: () => {
        navigate("FitnessHealth04");
      },
    },
    {
      title: "FitnessHealth 05",
      onPress: () => {
        navigate("FitnessHealth05");
      },
    },
    {
      title: "FitnessHealth 06",
      onPress: () => {
        navigate("FitnessHealth06");
      },
    },
    {
      title: "FitnessHealth 07",
      onPress: () => {
        navigate("FitnessHealth07");
      },
    },
    {
      title: "FitnessHealth 08",
      onPress: () => {
        navigate("FitnessHealth08");
      },
    },
    {
      title: "FitnessHealth 09",
      onPress: () => {
        navigate("FitnessHealth09");
      },
    },
    {
      title: "FitnessHealth 10",
      onPress: () => {
        navigate("FitnessHealth10");
      },
    },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
      />
      <IntroList data={data} title="FitnessHealth" />
    </Container>
  );
});

export default FitnessHealthIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
