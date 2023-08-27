import React from 'react';
import { Container, Content, NavigationAction, Text } from 'components';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useTheme, TopNavigation, Layout, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useBoolean, useLayout } from 'hooks';
import { WebView } from 'react-native-webview';

import ProgressBar from './ProgressBar';

import { Images } from 'assets/images';
import { HTML } from './html';

const Reading10 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { top, bottom } = useLayout();

  const [repeat, { toggle: toggleRepeat }] = useBoolean(false);
  const [shuffleAngular, { toggle: toggleShuffleAngular }] = useBoolean(false);


  return (
    <Container useSafeArea={false}>
      <View style={{ paddingTop: top }}>
        <TopNavigation
          appearance="control"
          accessoryLeft={<NavigationAction />}
          accessoryRight={
            <View style={styles.right}>
              <NavigationAction icon="bookmark-simple" />
              <NavigationAction icon="dots-three-vertical" />
            </View>
          }
        />
      </View>
       <Content contentContainerStyle={{ paddingBottom: bottom }}>
        <ImageBackground resizeMode="cover" source={Images.bookmark_listen} style={styles.image}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={goBack}
            style={[styles.viewIcon, { backgroundColor: theme['color-success-500'] }]}>
            <Icon
              pack="assets"
              name="play"
              style={[styles.icon32, { tintColor: theme['basic-color-1100'] }]}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text category="h3" center marginTop={32} marginHorizontal={24}>
          {`Are You There, God?\nIt's Me, Margaret`}
        </Text>
        <Text category="subhead" status="content" center marginTop={8}>
          Chapter 02
        </Text>
        <View style={styles.actionView}>
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Icon pack="assets" name="skip-back" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={toggleRepeat}>
            <Icon
              pack="assets"
              name="repeat"
              style={[
                styles.icon24,
                { tintColor: repeat ? theme['color-primary-500'] : theme['color-basic-800'] },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={toggleShuffleAngular}>
            <Icon
              pack="assets"
              name="shuffle-angular"
              style={[
                styles.icon24,
                {
                  tintColor: shuffleAngular ? theme['color-primary-500'] : theme['color-basic-800'],
                },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Icon pack="assets" name="skip-forward" />
          </TouchableOpacity>
        </View>
        <ProgressBar progress={722 / 2146} style={styles.progressBar} />
        <View style={styles.row}>
          <Text category="h6">12:02</Text>
          <Text category="h6">35:46</Text>
        </View>
        <Layout level="2" style={styles.bottom}>
          <TouchableOpacity activeOpacity={0.7} style={styles.caret}>
            <Icon pack="assets" name="caret-up" style={{ tintColor: theme['color-basic-600'] }} />
          </TouchableOpacity>
          {[
            'Check Out the Digital Art That Is Leaving',
            'Immersive and original artwork created for crypto, future-tech and blockchain investors. ',
            'All images are available in limited edition prints for the highest quality possible. Printed wall art is the ideal gift for any crypto or art lover.',
          ].map((i, idx) => {
            return (
              <Text key={idx} status="content" marginBottom={8}>
                {i}
              </Text>
            );
          })}
        </Layout>
      </Content> 
    </Container>
  );
});

export default Reading10;

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
