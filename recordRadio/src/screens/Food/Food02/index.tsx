import React, { useState } from "react";
import { Alert, Modal, Animated, StyleSheet, TouchableOpacity, View, Pressable, Share, FlatList } from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { Avatar, Button, Icon, Layout, TopNavigation } from "@ui-kitten/components";
import HomeFood01 from "./HomeFood02";
import { useLayout, useModal } from "hooks";
import { Images } from "assets/images";
import RadioStream from "screens/reading/Reading10/RadioStream";
import VideoStream from "screens/reading/Reading10/VideoStream";
import { Container, HStack, LinearGradientText, NavigationAction, Text, VStack } from "components";
import * as Linking from "expo-linking";
import { keyExtractoUtil } from "utils";

const Screen = () => {
  return <Layout style={styles.screen} />;
};

export default function Food02() {
  const { bottom, width } = useLayout();
  const [modalVisible, setModalVisible] = useState<any>(false);
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = "house";

    switch (routeName) {
      case "title1":
        icon = "headphone";
        break;
      case "title2":
        icon = "clipboard";
        break;
      case "title3":
        icon = "share";
        break;
      case "title4":
        icon = "play";
        break;
      case "title5":
        icon = "user";
        break;
    }
    if (routeName == "title5") {
      return <Avatar source={Images.avatar.avatar_01} style={styles.img} />;
    } else {
      return <Icon style={[styles.img, { tintColor: routeName === selectedTab ? "#F6D938" : "#889098" }]} name={icon} />;
    }
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: { routeName: string; selectedTab: string; navigate: (selectedTab: string) => void }) => {
    return (
      <TouchableOpacity onPress={() => navigate(routeName)} style={styles.tabbarItem} activeOpacity={0.7}>
        {_renderIcon(routeName, selectedTab)}
        {routeName !== "title5" && routeName === selectedTab && <View style={[styles.dot]} />}
      </TouchableOpacity>
    );
  };
  const ListHeaderComponent = () => (
    <VStack mb={48}>
      <Text style={styles.header}>🫥</Text>
      <HStack justify="flex-start" gap={12}>
        <LinearGradientText text={"Join our"} textStyle={styles.textStyles} />
        <Text category="h1" status="warning">
          Socialmedia.
        </Text>
      </HStack>
      <LinearGradientText text={"Channels"} textStyle={styles.textStyles} />
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

  return (
    <Layout level="1" style={{ flex: 1 }}>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <Container style={styles.container}>
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
            <Button children={"Close"} style={styles.buttons} onPress={() => setModalVisible(!modalVisible)} />
          </Container>
        </Modal>
      </View>
      <CurvedBottomBar.Navigator
        type="DOWN"
        height={55}
        width={width - 8}
        circleWidth={52}
        bgColor="#9b040b"
        initialRouteName="title1"
        borderTopLeftRight
        screenOptions={{ headerShown: false }}
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
              <Icon name={"share"} style={{ tintColor: "black" }} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen name="title1" position="LEFT" component={() => <RadioStream />} />
        {/* <CurvedBottomBar.Screen name="title2" component={() => <Screen />} position="LEFT" /> */}
        <CurvedBottomBar.Screen name="title3" component={() => <Screen />} position="CENTER" />
        <CurvedBottomBar.Screen name="title4" component={() => <VideoStream />} position="RIGHT" />
        {/* <CurvedBottomBar.Screen name="title5" component={() => <Screen />} position="RIGHT" /> */}
      </CurvedBottomBar.Navigator>
      <View
        style={{
          height: bottom,
          width: width - 8,
          backgroundColor: "#9b040b",
          alignSelf: "center",
        }}
      />
    </Layout>
  );
}

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  ///
  container: {
    flex: 1,
    padding: 20,
  },
  // button: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    bottom: 30,
    borderWidth: 2,
    borderColor: "white",
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
  },
  img: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: "#F6D938",
    borderRadius: 99,
    position: "absolute",
    bottom: 10,
  },
  //modal
  header: {
    fontSize: 64,
    lineHeight: 76,
    fontWeight: "700",
    marginBottom: 24,
  },
  textStyles: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "700",
  },
  content: {
    paddingHorizontal: 40,
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    opacity: 0.3,
    marginTop: 24,
  },
  btn: {},
  buttons: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  describe: {
    color: "gray",
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
