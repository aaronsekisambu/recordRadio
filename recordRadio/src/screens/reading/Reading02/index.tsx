import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Container, LinearGradientText, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import PostItem from './PostItem';
import PodcastItem from './PodcastItem';
import TopTokenItem from './TopTokenItem';
import PostHorizontal from './PostHorizontal';
import ThemeLogo from 'elements/App/ThemeLogo';

import { IPodcast, IPost, ITopToken } from './types';
import { data_podcast, data_post, data_post_horizontal, data_top_token } from './data';

const Reading02 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { width } = useLayout();
  const tabs = ['Hot Today', 'Trending', 'Popular'];
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const borderBottomColor = theme['border-basic-color-2'];

  const renderTopToken = React.useCallback(({ item }: { item: ITopToken }) => {
    return <TopTokenItem item={item} style={styles.topToken} />;
  }, []);

  const renderPostHorizontal = React.useCallback(({ item }: { item: IPost }) => {
    return <PostHorizontal item={item} onPress={goBack} style={styles.postHorizontal} />;
  }, []);

  const renderPodcast = React.useCallback(({ item }: { item: IPodcast }) => {
    return <PodcastItem item={item} onPress={goBack} style={styles.item} />;
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <FlatList
          style={[styles.topTokenList, { borderBottomColor }]}
          data={data_top_token || []}
          renderItem={renderTopToken}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          keyExtractor={(i, _index) => `${_index}`}
          horizontal
          contentContainerStyle={styles.topTokenContent}
        />
        <View>
          {data_post.map((item, index) => {
            return <PostItem item={item} key={index} style={styles.postItem} onPress={goBack} />;
          })}
        </View>
        <View style={styles.tab}>
          {tabs.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => setSelectedIndex(index)}>
                {selectedIndex === index ? (
                  <LinearGradientText
                    colors={['#CFE1FD', '#FFFDE1']}
                    text={item}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    textStyle={styles.titleText}
                  />
                ) : (
                  <Text category="h4" marginHorizontal={12} opacity={0.3}>
                    {item}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <FlatList
          data={data_post_horizontal || []}
          renderItem={renderPostHorizontal}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(i, _index) => `${_index}`}
          snapToInterval={width - 20}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
          style={styles.postHorizontalList}
          contentContainerStyle={styles.postHorizontalContent}
        />
        <View style={styles.row}>
          <LinearGradientText
            colors={['#CFE1FD', '#FFFDE1']}
            text="Podcast"
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            textStyle={styles.postCastText}
          />
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Text category="h5" status="primary">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [selectedIndex]);

  return (
    <Container>
      <TopNavigation
        style={[styles.header, { borderBottomColor }]}
        title={() => <ThemeLogo />}
        accessoryLeft={<NavigationAction icon="equals" />}
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction icon="bookmark-simple" />
            <NavigationAction icon="magnifying-glass" />
          </View>
        }
      />
      <FlatList
        data={data_podcast}
        renderItem={renderPodcast}
        keyExtractor={(i, _index) => `${_index}`}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        ListHeaderComponent={listHeaderComponent}
      />
    </Container>
  );
});

export default Reading02;

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topToken: {
    marginRight: 8,
  },
  topTokenList: {
    flexGrow: 0,
    borderBottomWidth: 1,
  },
  topTokenContent: {
    paddingLeft: 8,
    paddingVertical: 16,
  },
  postItem: {
    marginTop: 8,
    marginHorizontal: 4,
  },
  tab: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginTop: 16,
  },
  titleText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginHorizontal: 12,
  },
  postCastText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  postHorizontalList: {
    flexGrow: 0,
    marginTop: 8,
  },
  postHorizontal: {
    marginRight: 4,
  },
  postHorizontalContent: {
    paddingLeft: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  item: {
    marginBottom: 4,
  },
});
