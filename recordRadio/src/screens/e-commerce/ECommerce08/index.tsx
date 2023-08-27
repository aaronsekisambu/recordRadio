import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { useTheme, TopNavigation, Avatar, Icon, Layout, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import {
  Container,
  Content,
  CurrencyText,
  LinearGradientText,
  NavigationAction,
  Text,
} from 'components';
import { TouchableOpacity } from 'react-native';

import dayjs from 'dayjs';
import ChatInput from './ChatInput';
import SentBalloon from './SentBalloon';
import ReceivedBalloon from './ReceivedBalloon';

import { Images } from 'assets/images';
import { conversations } from './data';

const ECommerce08 = React.memo(() => {
  const theme = useTheme();
  const { top } = useLayout();
  const { goBack } = useNavigation();

  const myId = 1;
  const scrollRef = React.useRef<ScrollView>(null);
  const [chatConversation, setConversation] = React.useState(conversations);

  React.useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd();
    }, 200);
  }, []);

  const onScrollToEnd = React.useCallback(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd();
    }, 200);
  }, [scrollRef]);

  const onSendMessage = React.useCallback(
    (text: string) => {
      const newMessage = {
        _id: chatConversation.length + 1,
        text: text,
        createdAt: dayjs().format('hh:mm'),
        user: {
          _id: 1,
          name: 'User',
          avatar: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
        },
      };
      setConversation([...chatConversation, newMessage]);
      onScrollToEnd();
    },
    [chatConversation, onScrollToEnd],
  );

  return (
    <Container useSafeArea={false}>
      <View style={{ paddingTop: top }}>
        <TopNavigation
          accessoryLeft={<NavigationAction />}
          accessoryRight={<NavigationAction icon="circles-four" />}
        />
      </View>
      <Content>
        <Layout level="2" style={styles.header}>
          <Avatar size="48" source={Images.avatar.avatar_01} />
          <View style={styles.contentHeader}>
            <LinearGradientText
              colors={['#CFE1FD', '#FFFDE1']}
              text="no13designs shop"
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              textStyle={styles.title}
            />
            <Text marginTop={4} status="placeholder">
              Online 7 mins ago
            </Text>
          </View>
          <TouchableOpacity
            onPress={goBack}
            activeOpacity={0.7}
            style={[styles.boxHeader, { backgroundColor: theme['color-primary-500'] }]}>
            <Icon pack="assets" name="arrow-right" />
          </TouchableOpacity>
        </Layout>
        <Layout level="2" style={styles.container}>
          <View style={[styles.top, { borderBottomColor: theme['border-basic-color-3'] }]}>
            <Image
              source={{
                uri: 'https://user-images.githubusercontent.com/42206067/227877465-61675bf9-1817-4d06-8733-83d16dbb0de4.png',
              }}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text category="h5">Ice Cream Jolibee</Text>
              <View style={styles.row1}>
                <CurrencyText category="h4" status="warning">
                  2.34
                </CurrencyText>
                <Text category="subhead" status="placeholder">
                  ⭐ 4/5
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.row2}>
            <TouchableOpacity activeOpacity={0.7} onPress={goBack} style={styles.buttonAdd}>
              <Text>Add To Bag</Text>
            </TouchableOpacity>
            <Button children="Buy Now" style={styles.buttonBuy} onPress={goBack} />
          </View>
        </Layout>
        <View style={styles.conversation}>
          <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
            <>
              {chatConversation.map((item) => {
                return item.user._id === myId ? (
                  <SentBalloon {...item} key={item._id.toString()} />
                ) : (
                  <ReceivedBalloon {...item} key={item._id.toString()} />
                );
              })}
            </>
          </ScrollView>
        </View>
      </Content>
      <ChatInput onPress={onSendMessage} onScrollToEnd={onScrollToEnd} />
    </Container>
  );
});

export default ECommerce08;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    padding: 16,
    borderRadius: 16,
  },
  contentHeader: {
    flex: 1,
    marginLeft: 16,
  },
  boxHeader: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'SpaceGrotesk-Bold',
    fontWeight: '700',
  },
  container: {
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 1,
    marginHorizontal: 4,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  image: {
    width: 56,
    aspectRatio: 1 / 1,
    marginRight: 24,
  },
  content: {
    flex: 1,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  row2: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonAdd: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBuy: {
    marginLeft: 8,
    height: 44,
    flex: 1,
  },
  containerStyle: {
    flex: 1,
  },
  conversation: {
    flex: 1,
    paddingHorizontal: 4,
    marginTop: 16,
  },
});
