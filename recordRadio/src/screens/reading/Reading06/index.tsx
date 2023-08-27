import React from 'react';
import { Container, Content, LinearGradientText, NavigationAction, Text } from 'components';
import { View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useTheme, TopNavigation, Avatar, Icon, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import BookItem from './BookItem';
import ProgressBar from './ProgressBar';

import { IBook } from './types';
import { data_book } from './data';
import { Images } from 'assets/images';

const Reading06 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const renderItem = React.useCallback(({ item }: { item: IBook }) => {
    return <BookItem item={item} style={styles.item} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={
          <TouchableOpacity>
            <Avatar size="40" source={Images.avatar.avatar_01} />
          </TouchableOpacity>
        }
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction status="placeholder" icon="book" marginRight={16} />
            <NavigationAction status="placeholder" icon="magnifying-glass" />
          </View>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Reading Habit"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          textStyle={styles.titleText}
        />
        <Layout level="secondary" style={styles.box}>
          <View style={styles.top}>
            <Text category="h3" status="black">
              GOAL
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.row, { backgroundColor: theme['color-basic-1100'] }]}>
              <Text status="platinum" category="c1" marginRight={4}>
                Monthly
              </Text>
              <Icon
                pack="assets"
                name="caret-down"
                style={[styles.icon16, { tintColor: theme['text-platinum-color'] }]}
              />
            </TouchableOpacity>
          </View>
          <ProgressBar progress={200 / 300} style={styles.progressBar} />
          <View style={styles.bottom}>
            <Text category="subhead" status="black">
              Keep read continue
            </Text>
            <View style={styles.text}>
              <Text category="h6" status="black">
                200/
              </Text>
              <Text category="h6" status="platinum" marginRight={4}>
                300
              </Text>
              <Text category="h6" status="black">
                Mins
              </Text>
            </View>
          </View>
        </Layout>
        <View style={styles.row1}>
          <LinearGradientText
            colors={['#CFE1FD', '#FFFDE1']}
            text="Book for you"
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            textStyle={styles.bookText}
          />
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Text category="h5">See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data_book}
          renderItem={renderItem}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
          style={styles.bookList}
          contentContainerStyle={styles.contentBook}
        />
        <Layout level="2" style={styles.box1}>
          <View style={styles.box2}>
            <Image
              source={{
                uri: 'https://user-images.githubusercontent.com/42206067/232230969-334b32fc-5fc9-42d9-abad-256287300298.png',
              }}
              style={styles.image}
            />
            <View style={styles.flex}>
              <Text category="h4">Rich dad - ep01</Text>
              <Text status="platinum" marginTop={8}>
                12:40
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Layout level="success" style={styles.viewPlay}>
              <Icon pack="assets" name="play" />
            </Layout>
          </TouchableOpacity>
        </Layout>
      </Content>
      <TabBar />
    </Container>
  );
});

export default Reading06;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
    marginTop: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 32,
    borderRadius: 12,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  box: {
    padding: 16,
    borderRadius: 24,
    marginTop: 16,
    marginHorizontal: 16,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBar: {
    marginTop: 16,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookText: {
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  item: {
    marginRight: 16,
  },
  bookList: {
    flexGrow: 0,
  },
  contentBook: {
    paddingLeft: 16,
  },
  image: {
    height: 56,
    width: 40,
  },
  viewPlay: {
    width: 40,
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    padding: 16,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 16,
  },
  box2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  flex: {
    flex: 1,
    marginLeft: 16,
  },
  content: {
    paddingBottom: 4 + 56 + 8,
  },
});
