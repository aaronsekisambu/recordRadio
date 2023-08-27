import React from 'react';
import { Container, LinearGradientText, NavigationAction, Text } from 'components';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import BookItem from './BookItem';

import { IBook } from './types';
import { data_book } from './data';

const Reading08 = React.memo(() => {
  const { goBack } = useNavigation();

  const refScroll = React.useRef<FlatList>(null);

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  React.useEffect(() => {
    refScroll.current?.scrollToIndex({
      index: selectedIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [selectedIndex]);

  const data_tabs = ['Hot Today (4)', 'Trending (8)', 'Popular (1)'];

  const renderTab = React.useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSelectedIndex(index)}
          style={styles.tab}>
          {selectedIndex === index ? (
            <LinearGradientText
              colors={['#CFE1FD', '#FFFDE1']}
              text={item}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              textStyle={styles.titleTab}
            />
          ) : (
            <Text category="h4" status={selectedIndex === index ? 'black' : 'note'}>
              {item}
            </Text>
          )}
        </TouchableOpacity>
      );
    },
    [selectedIndex],
  );

  const renderItem = React.useCallback(({ item, index }: { item: IBook; index: number }) => {
    return (
      <BookItem
        item={item}
        onPress={goBack}
        style={{ marginRight: index % 2 === 0 ? 16 : 0, marginBottom: 16 }}
      />
    );
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction icon="bookmark-simple" marginRight={16} />
            <NavigationAction icon="share" />
          </View>
        }
      />
      <LinearGradientText
        colors={['#CFE1FD', '#FFFDE1']}
        text={`You have 13 book\nwant to read`}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        textStyle={styles.titleText}
      />
      <View>
        <FlatList
          ref={refScroll}
          data={data_tabs || []}
          renderItem={renderTab}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(i, index) => `${index}`}
          style={styles.style}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
        />
      </View>
      <FlatList
        data={data_book}
        renderItem={renderItem}
        scrollEventThrottle={16}
        numColumns={2}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Container>
  );
});

export default Reading08;

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
    marginTop: 8,
  },
  titleTab: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  style: {
    marginTop: 40,
  },
  tab: {
    marginRight: 22,
    paddingVertical: 16,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});
