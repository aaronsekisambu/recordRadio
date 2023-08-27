import React from 'react';
import { Container, NavigationAction } from 'components';
import { View, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import PodcastItem from './PodcastItem';

import { IPodcast } from './types';
import { data_podcast } from './data';
import { Images } from 'assets/images';

const Reading05 = React.memo(() => {
  const { width, top, bottom } = useLayout();

  const renderItem = React.useCallback(({ item, index }: { item: IPodcast; index: number }) => {
    return <PodcastItem item={item} index={index} style={styles.item} />;
  }, []);

  return (
    <Container useSafeArea={false}>
      <View style={styles.imageView}>
        <ImageBackground style={styles.image} source={Images.reading_background}>
          <View style={{ paddingTop: top }}>
            <TopNavigation
              appearance="control"
              accessoryLeft={<NavigationAction status="placeholder" />}
              accessoryRight={
                <View style={styles.right}>
                  <NavigationAction status="placeholder" icon="book" marginRight={16} />
                  <NavigationAction status="placeholder" icon="magnifying-glass" />
                </View>
              }
            />
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.content, { paddingBottom: bottom, height: 200 }]}>
        <FlatList
          data={data_podcast || []}
          renderItem={renderItem}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(i, _index) => `${_index}`}
          snapToInterval={width - 20}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
          style={styles.podcastList}
          contentContainerStyle={styles.podcastContent}
        />
      </View>
    </Container>
  );
});

export default Reading05;

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {},
  podcastList: {
    zIndex: 10,
    marginTop: -48,
  },
  podcastContent: {
    paddingLeft: 4,
  },
  item: {
    marginRight: 4,
  },
});
