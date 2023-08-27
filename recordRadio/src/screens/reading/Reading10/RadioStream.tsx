import React from "react";
import { Container, Content, NavigationAction, Text } from 'components';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import WebView from "react-native-webview";
import { HTML } from "./html";
import { useLayout } from "hooks";

const RadioStream = React.memo(() => {
    const { top, bottom } = useLayout();

    return (
        <Container useSafeArea={false}>
        <View style={{ paddingTop: top }}>
        </View>
        
        <View style={{ height: "100%" }}>
          <WebView
            source={{html: HTML}}
            automaticallyAdjustContentInsets={false}
          />
        </View>
      </Container>
    )

});

export default RadioStream;


const styles = StyleSheet.create({
    right: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 240,
      height: 320,
      borderRadius: 16,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    viewIcon: {
      width: 56,
      aspectRatio: 1 / 1,
      borderRadius: 56,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon32: {
      width: 32,
      height: 32,
    },
    actionView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 24,
      marginHorizontal: 24,
    },
    icon24: {
      width: 24,
      height: 24,
    },
    progressBar: {
      marginHorizontal: 24,
      marginTop: 12,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      marginTop: 12,
    },
    bottom: {
      marginTop: 24,
      marginHorizontal: 4,
      padding: 24,
      borderRadius: 24,
    },
    caret: {
      width: 40,
      height: 40,
      alignItems: 'center',
      alignSelf: 'center',
    },
  });
  