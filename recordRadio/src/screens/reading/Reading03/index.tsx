import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, LinearGradientText, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation, Avatar, Icon, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useSharedValue } from 'react-native-reanimated';
import { useLayout } from 'hooks';

import PostItem from './PostItem';
import Pagination from 'elements/Onboarding/Pagination';
import Carousel from 'react-native-reanimated-carousel';

import { IPost } from './types';
import { Images } from 'assets/images';
import { data_banner, data_post } from './data';

const Reading03 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const progress = useSharedValue(0);
  const { width, top, bottom } = useLayout();

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <Text category="h1" status="white" marginHorizontal={16}>
          Crypto Love is a curated collection of artworks from artists around the world.
        </Text>
        <View style={styles.box}>
          <View>
            <View style={styles.name}>
              <Avatar size="16" source={Images.avatar.avatar_01} />
              <Text category="h4" status="placeholder" marginLeft={8}>
                Albert Flores
              </Text>
            </View>
            <Text status="placeholder" marginTop={4}>
              Jul 9, 2023 - 13 mins read
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Layout level="success" style={styles.viewPlay}>
              <Icon pack="assets" name="play" />
            </Layout>
          </TouchableOpacity>
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://user-images.githubusercontent.com/42206067/232100797-eea98ae8-b7e4-40d4-a401-be859e045525.png',
            }}
          />
        </View>
        <View>
          <Carousel
            style={styles.carousel}
            height={width}
            width={width}
            data={data_banner}
            onProgressChange={(_, absoluteProgress) => {
              progress.value = absoluteProgress;
            }}
            pagingEnabled
            autoPlay={true}
            autoPlayInterval={5000}
            renderItem={renderBanner}
          />
          <Pagination
            style={styles.dot}
            animValue={progress}
            inactiveColor={theme['background-basic-color-4']}
            activeColor={theme['color-basic-1100']}
            data={data_banner}
            size={6}
            space={12}
          />
        </View>
        <Layout level="2" style={styles.box1}>
          <Text category="h4">Decentralized Digital Art Gallery</Text>
          <Text marginTop={4}>+0.00004869 BTC</Text>
          <Text marginTop={8}>Check Out the Digital Art That Is Leaving</Text>
          <Text marginTop={8}>
            Immersive and original artwork created for crypto, future-tech and blockchain investors.
          </Text>
          <Text category="h4" marginTop={32}>
            Crypto Love Gallery
          </Text>
          <Text marginTop={8}>
            This gallery is a showcase of digital crypto art, using electronic equipment as the
            medium for arts and non-tangible currency as the theme.
          </Text>
          <Text marginTop={8}>
            All images are available in limited edition prints for the highest quality possible.
            Printed wall art is the ideal gift for any crypto or art lover.
          </Text>
        </Layout>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Relate Post"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          textStyle={styles.titleText}
        />
      </View>
    );
  }, []);

  const renderBanner = React.useCallback(({ item }: { item: string }) => {
    return (
      <View style={styles.bannerView}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  }, []);

  const renderPost = React.useCallback(({ item, index }: { item: IPost; index: number }) => {
    return (
      <PostItem
        item={item}
        onPress={goBack}
        style={[styles.item, { marginRight: index % 2 === 0 ? 0 : 4, marginLeft: 4 }]}
      />
    );
  }, []);

  return (
    <Container useSafeArea={false} level="primary">
      <View style={{ paddingTop: top }}>
        <TopNavigation
          appearance="control"
          accessoryLeft={<NavigationAction />}
          accessoryRight={
            <View style={styles.right}>
              <NavigationAction icon="bookmark-simple" />
              <NavigationAction icon="share" />
            </View>
          }
        />
      </View>
      <FlatList
        data={data_post}
        numColumns={2}
        renderItem={renderPost}
        keyExtractor={(i, index) => `${index}`}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={[styles.contentContainerStyle, { paddingBottom: bottom }]}
      />
    </Container>
  );
});

export default Reading03;

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginLeft: 16,
    marginRight: 20,
  },
  viewPlay: {
    width: 40,
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    marginTop: 48,
    paddingHorizontal: 4,
    height: 132,
    borderRadius: 24,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    overflow: 'hidden',
  },
  bannerView: {
    width: '100%',
    aspectRatio: 1 / 1,
    padding: 4,
  },
  carousel: {
    marginTop: 4,
  },
  dot: {
    position: 'absolute',
    bottom: 16,
  },
  box1: {
    borderRadius: 24,
    marginTop: 4,
    marginHorizontal: 4,
    padding: 24,
  },
  titleText: {
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginTop: 24,
    marginLeft: 16,
    marginBottom: 16,
  },
  item: {},
  contentContainerStyle: {
    paddingTop: 8,
  },
});
