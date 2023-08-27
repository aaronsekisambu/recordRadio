import React from 'react';
import { Container, Content, LinearGradientText, Text } from 'components';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme, Avatar, Icon, TopNavigation, Button } from '@ui-kitten/components';
import { useLayout } from 'hooks';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import WalletItem from './WalletItem';
import FriendItem from './FriendItem';

import { IFriend } from './types';
import { data_friends } from './data';
import { Images } from 'assets/images';

const Finance07 = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const { goBack } = useNavigation();

  const renderWallet = React.useCallback(({ item }: { item: any }) => {
    return <WalletItem item={item} style={styles.wallet} onPress={goBack} />;
  }, []);

  const renderFriend = React.useCallback(({ item }: { item: IFriend }) => {
    return <FriendItem item={item} style={styles.friend} onPress={goBack} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        appearance="control"
        accessoryLeft={
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.7}>
              <Avatar source={Images.avatar.male} size="40" />
            </TouchableOpacity>
            <LinearGradientText
              colors={['#CFE1FD', '#FFFDE1']}
              text="Welcome back!"
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              textStyle={styles.welcome}
            />
          </View>
        }
        accessoryRight={
          <TouchableOpacity activeOpacity={0.7}>
            <Icon pack="assets" name="search" />
          </TouchableOpacity>
        }
      />
      <Content>
        <FlatList
          data={
            [
              { color: '#106AF3' },
              { color: '#CFE1FD' },
              { color: '#00CD50' },
              { color: '#E30147' },
            ] || []
          }
          renderItem={renderWallet}
          horizontal
          keyExtractor={(i, index) => `${index}`}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contentWallet}
          style={{ flexGrow: 0 }}
          snapToInterval={width - 28}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
        />
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Send Again"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <FlatList
          data={data_friends}
          renderItem={renderFriend}
          horizontal
          keyExtractor={(i, index) => `${index}`}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contentFriend}
          showsHorizontalScrollIndicator={false}
        />
        <View style={[styles.banner, { backgroundColor: theme['color-basic-1100'] }]}>
          <View style={[styles.box, { backgroundColor: '#D9D9D9' }]} />
          <View style={styles.box1}>
            <Text category="h5" status="black">
              NETFLIX Premium
            </Text>
            <Text category="c1" status="placeholder" marginTop={6}>
              exp 25-05-2024
            </Text>
          </View>
          <View style={[styles.box2, { backgroundColor: theme['color-primary-500'] }]}>
            <Text category="c1" status="white">
              $4.99
            </Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Button children="Send" onPress={goBack} style={styles.button1} status="danger" />
          <Button children="Request" onPress={goBack} style={styles.button2} />
        </View>
      </Content>
      <TabBar />
    </Container>
  );
});

export default Finance07;

const styles = StyleSheet.create({
  item: {
    marginBottom: 8,
    marginHorizontal: 8,
  },
  contentWallet: {
    paddingLeft: 4,
    marginTop: 8,
  },
  content: {
    paddingBottom: 4 + 56 + 8 + 28,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  welcome: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wallet: {
    marginRight: 4,
  },
  friend: {
    marginRight: 4,
  },
  contentFriend: {
    paddingLeft: 16,
    paddingRight: 12,
  },
  banner: {
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    marginTop: 24,
    marginHorizontal: 16,
  },
  box: {
    width: 48,
    height: 48,
    borderRadius: 28,
  },
  box1: {
    marginLeft: 8,
    flex: 1,
  },
  box2: {
    borderRadius: 16,
    paddingHorizontal: 8,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    flex: 1,
    marginRight: 8,
  },
  button2: {
    flex: 1,
  },
  buttonView: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
});
