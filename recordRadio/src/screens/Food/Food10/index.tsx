import React, { memo } from "react";
import { View, Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
  Icon,
  Avatar,
} from "@ui-kitten/components";

// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";

// ----------------------------- Components -----------------------------------
import {
  NavigationAction,
  Container,
  Content,
  Text,
  HStack,
  VStack,
  RoundedButton,
  LinearGradientText,
} from "components";
import { Images } from "assets/images";
import SwipableButton from "./SwipeabeButton";
import { LinearGradient } from "expo-linear-gradient";
const Food10 = memo(() => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <HStack itemsCenter gap={8} mb={8}>
            <NavigationAction status="placeholder" icon="mappin" />
            <Text category="h5">21 Pentrefelin, LL68 9PE</Text>
            <Icon pack="assets" name="caret-right" style={styles.caret} />
          </HStack>
        }
        // @ts-ignore
        accessoryRight={
          <Avatar source={Images.avatar.avatar_01} style={styles.avatar} />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <VStack gap={4}>
          <LinearGradientText
            text={"Cheers! Food eat\ntoday is"}
            textStyle={styles.title}
          />
          <Image
            source={Images.food.banner02}
            style={{
              width: width - 8,
              height: 295 * (height / 812),
              marginHorizontal: 4,
            }}
          />
          <VStack style={styles.banner}>
            <Text category="h3">Wisconsin Cheese Curds</Text>
            <HStack mt={4} itemsCenter justify="flex-start" gap={4}>
              <Icon pack="assets" name="globe" style={styles.globe} />
              <Text category="subhead" style={{ color: "#D0D3D6" }}>
                2715 Ash Dr. San Jose, South Dakota 83475
              </Text>
            </HStack>
            <Text marginTop={8} category="h6">
              {"🛵️ 10kms   ⭐️ 4/5   ⏰️ 15-20 minitues"}
            </Text>
          </VStack>
          {DATA_FOOD.map((item, i) => {
            return (
              <HStack
                key={i}
                gap={24}
                level="2"
                ph={16}
                pv={24}
                mh={8}
                border={16}
              >
                {/* @ts-ignore */}
                <Image source={item.image} style={styles.food} />
                <VStack style={{ flex: 1 }} gap={8}>
                  <Text category="h5">{item.title}</Text>
                  <HStack>
                    <Text category="h4" status="warning">
                      {item.price}
                    </Text>
                    <Text category="subhead" status="placeholder">
                      {item.rate}
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
      </Content>
      <LinearGradient
        colors={["#12233200", "#122332"]}
        style={[styles.absolute, { bottom: bottom }]}
        start={{ x: 1, y: 0.1 }}
        end={{ x: 1, y: 0.9 }}
      >
        <RoundedButton icon="map-trifold" />
        <SwipableButton />
        <RoundedButton icon="shopping" isBasic status="white" />
      </LinearGradient>
    </Container>
  );
});

export default Food10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 80,
  },
  caret: {
    width: 16,
    height: 16,
    tintColor: "text-platinum-color",
  },
  avatar: {
    width: 32,
    height: 32,
  },
  globe: {
    width: 16,
    height: 16,
    tintColor: "#D0D3D6",
  },
  banner: {
    backgroundColor: "color-primary-default",
    marginTop: -68,
    marginHorizontal: 4,
    borderRadius: 24,
    padding: 16,
  },
  food: {
    width: 56,
    height: 56,
  },
  absolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 34,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: "SpaceGrotesk-Bold",
    marginLeft: 16,
    marginBottom: 12,
  },
});
const DATA_FOOD = [
  {
    image: Images.food.icecream,
    title: "Ice Cream Jolibee",
    rate: "⭐️ 4/5",
    price: "$2.34",
  },
  {
    image: Images.food.tea,
    title: "Ice Cream Jolibee",
    rate: "⭐️ 4/5",
    price: "$2.34",
  },
  {
    image: Images.food.chicken,
    title: "Ice Cream Jolibee",
    rate: "⭐️ 4/5",
    price: "$2.34",
  },
  {
    image: Images.food.coffee,
    title: "Ice Cream Jolibee",
    rate: "⭐️ 4/5",
    price: "$2.34",
  },
  {
    image: Images.food.ramen,
    title: "Ice Cream Jolibee",
    rate: "⭐️ 4/5",
    price: "$2.34",
  },
  {
    image: Images.food.hotdog,
    title: "Ice Cream Jolibee",
    rate: "⭐️ 4/5",
    price: "$2.34",
  },
  {
    image: Images.food.icecream,
    title: "Ice Cream Jolibee",
    rate: "⭐️ 4/5",
    price: "$2.34",
  },
  {
    image: Images.food.potato,
    title: "Ice Cream Jolibee",
    rate: "⭐️ 4/5",
    price: "$2.34",
  },
];
