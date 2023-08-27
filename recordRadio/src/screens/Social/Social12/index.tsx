import React, { memo } from "react";
import { Alert, FlatList, Pressable, Share, Touchable, TouchableOpacity } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import { Button, Modal, StyleService, TopNavigation, useStyleSheet } from "@ui-kitten/components";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";
// ----------------------------- Components -----------------------------------
import { VStack, LinearGradientText, Text, Container, HStack, NavigationAction } from "components";
// ----------------------------- utils -----------------------------------
import { keyExtractoUtil } from "utils";
import { useLayout, useModal } from "hooks";
import * as Linking from "expo-linking";

const Social12 = memo((asModel: any) => {
  const { goBack } = useNavigation();
  const { width } = useLayout();
  const { modalRef, show, hide } = useModal();
  const styles = useStyleSheet(themedStyles);

  const ListHeaderComponent = () => (
    <VStack mb={48}>
      <Text style={styles.header}>🫥</Text>
      <HStack justify="flex-start" gap={12}>
        <LinearGradientText text={"Join our"} textStyle={styles.textStyle} />
        <Text category="h1" status="warning">
          Socialmedia.
        </Text>
      </HStack>
      <LinearGradientText text={"Channels"} textStyle={styles.textStyle} />
    </VStack>
  );
  const ItemSeparatorComponent = () => <VStack style={styles.divider} />;
  const onShare = async (meidiaName: string) => {
    try {
      const result = await Share.share({
        message: `${meidiaName}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log(result.activityType);
          return result.activityType;
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  console.log(asModel);
  return (
      <Container style={styles.container}>
        <TopNavigation alignment="center" accessoryLeft={<NavigationAction />} title={"Invite friend"} />
        <FlatList
          contentContainerStyle={styles.content}
          keyExtractor={keyExtractoUtil}
          data={example_data}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={({ item }) => {
            const _maxWidth = 240 * (width / 375);
            return (
              <HStack justify="flex-start" gap={8} mb={24}>
                <Text category="h3">{item.symbol}</Text>
                <VStack gap={8} style={{ flex: 1 }}>
                  <Text onPress={() => onShare(item.url)} category="h4" maxWidth={_maxWidth}>
                    {item.title}
                  </Text>
                  <Text onPress={() => Linking.openURL(item.url)} category="subhead" maxWidth={_maxWidth} style={styles.describe}>
                    {item.describe}
                  </Text>
                  <ItemSeparatorComponent />
                </VStack>
              </HStack>
            );
          }}
        />
        <Button children={"Close"} style={styles.button} onPress={hide} />
      </Container>
  );
});

export default Social12;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 64,
    lineHeight: 76,
    fontWeight: "700",
    marginBottom: 24,
  },
  textStyle: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "700",
  },
  content: {
    paddingHorizontal: 40,
  },
  divider: {
    height: 1,
    backgroundColor: "text-placeholder-color",
    opacity: 0.3,
    marginTop: 24,
  },
  btn: {},
  button: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  describe: {
    color: "color-basic-700",
  },
});
const example_data = [
  {
    title: "Instagram",
    describe: "@recordfmuganda",
    url: "https://instagram.com/recordfmuganda",
    symbol: "☂️",
  },
  {
    title: "Tik Tok",
    describe: "@recordfmuganda",
    url: "https://tiktok.com/recordfmuganda",
    symbol: "🚀 ",
  },
  {
    title: "twitter",
    describe: "#Recordfm977",
    url: "https://twitter.com/Recordfm977",
    symbol: "👯",
  },
  {
    title: "youtube",
    describe: "@97.7recordfm2",
    url: "https://youtube.com/@97.7recordfm2",
    symbol: "🤩",
  },
  {
    title: "facebook",
    describe: "@recordfm9777",
    url: "https://facebook.com/recordfm9777",
    symbol: "f",
  },
  {
    title: "Tik Tok",
    describe: "@recordfm977",
    url: "https://tiktok.com/@recordfm977",
    symbol: "🥳",
  },
];
