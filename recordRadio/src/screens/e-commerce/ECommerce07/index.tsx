import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  NativeScrollEvent,
  TouchableOpacity,
  NativeSyntheticEvent,
} from 'react-native';
import { Container, Content, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation, Layout, Icon, Tooltip, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useBoolean, useLayout } from 'hooks';

import Dots from './Dots';
import ProductItem from './ProductItem';
import { LinearGradient } from 'expo-linear-gradient';

import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {
  data_colors,
  data_features,
  data_images,
  data_sizes,
  data_tabs,
  data_products,
} from './data';
import { IProduct } from './types';

const ECommerce07 = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const { goBack } = useNavigation();
  const widthTooltip = (width - 40) / 2;

  const translationX = useSharedValue(0);
  const scrollRef = useAnimatedRef<FlatList>();
  const refScroll = React.useRef<FlatList>(null);

  const [index, setIndex] = React.useState<number>(0);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [showColor, { on: onColor, off: offColor }] = useBoolean(false);
  const [showSize, { on: onSize, off: offSize }] = useBoolean(false);

  const [color, setColor] = React.useState<string>('White');
  const [size, setSize] = React.useState<string>('M');

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  React.useEffect(() => {
    scrollRef.current?.scrollToIndex({
      index: index,
      animated: true,
    });
  }, [index]);

  React.useEffect(() => {
    refScroll.current?.scrollToIndex({
      index: selectedIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [selectedIndex]);

  const onScrollEnd = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      let e = event.nativeEvent.targetContentOffset?.x;
      if (!!e) {
        setIndex(e / width);
      } else {
        setIndex(0);
      }
    },
    [scrollRef],
  );

  const renderItem = React.useCallback(({ item }: { item: string }) => {
    return (
      <View style={[styles.imageView, { width }]}>
        <Image source={{ uri: item }} resizeMode="contain" style={styles.image} />
      </View>
    );
  }, []);

  const renderProduct = React.useCallback(({ item }: { item: IProduct }) => {
    return <ProductItem item={item} onPress={goBack} style={styles.itemProduct} />;
  }, []);

  const renderColor = React.useCallback(() => {
    return (
      <TouchableOpacity
        onPress={onColor}
        style={[styles.buttonColor, { borderColor: theme['border-basic-color-3'] }]}>
        <View style={styles.flexOne}>
          <Text marginRight={12} numberOfLines={1}>
            {color}
          </Text>
        </View>
        <Icon
          pack="assets"
          name="caret-down"
          style={[styles.icon16, { tintColor: theme['text-grey-color'] }]}
        />
      </TouchableOpacity>
    );
  }, [color, theme]);

  const renderSize = React.useCallback(() => {
    return (
      <TouchableOpacity
        onPress={onSize}
        style={[styles.buttonSize, { borderColor: theme['border-basic-color-3'] }]}>
        <View style={styles.flexOne}>
          <Text marginRight={12} numberOfLines={1}>
            Size {size}
          </Text>
        </View>
        <Icon
          pack="assets"
          name="caret-down"
          style={[styles.icon16, { tintColor: theme['text-grey-color'] }]}
        />
      </TouchableOpacity>
    );
  }, [size, theme]);

  const renderTab = React.useCallback(
    ({ item, index: _index }: { item: string; index: number }) => {
      return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSelectedIndex(_index)}>
          <LinearGradient
            colors={
              selectedIndex === _index
                ? ['#CFE1FD', '#FFFDE1']
                : [theme['background-basic-color-1'], theme['background-basic-color-1']]
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.tab}>
            <Text category="h5" status={selectedIndex === _index ? 'black' : 'placeholder'}>
              {item}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    },
    [selectedIndex],
  );

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction icon="chat-tear-drop" marginRight={8} />
            <NavigationAction icon="share-network" />
          </View>
        }
      />
      <Content contentContainerStyle={styles.contentContainerStyle}>
        <Animated.FlatList
          data={data_images}
          scrollEventThrottle={16}
          renderItem={renderItem}
          ref={scrollRef as any}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width}
          bounces={false}
          pagingEnabled={false}
          decelerationRate="fast"
          onScroll={scrollHandler}
          style={{ width: width }}
          contentContainerStyle={{ width: width * data_images.length - 1 }}
          onScrollEndDrag={(event) => onScrollEnd(event)}
        />
        <View style={styles.row}>
          <Layout level="3" style={styles.box}>
            <Text category="subhead" status="placeholder">
              ❤️️ 400
            </Text>
          </Layout>
          <Dots translationX={translationX} data={data_images} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.play, { backgroundColor: theme['color-success-500'] }]}
            onPress={() => {
              if (index < data_images.length - 1) {
                setIndex(index + 1);
              }
            }}>
            <Icon pack="assets" name="play" />
          </TouchableOpacity>
        </View>
        <Layout level="2" style={styles.box1}>
          <View style={styles.row1}>
            <Text category="h3" marginRight={8}>
              $79
            </Text>
            <Text status="platinum">$268</Text>
          </View>
          <Text category="h4" marginTop={8}>
            Cypressme · Tennis shoes in leather
          </Text>
          <View style={styles.select}>
            <Tooltip
              anchor={renderColor}
              visible={showColor}
              placement="bottom"
              onBackdropPress={offColor}
              contentContainerStyle={styles.contentContainerStyle}
              style={[styles.tooltip, { width: widthTooltip }]}>
              <View>
                {data_colors &&
                  data_colors.map((i, idx) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        key={idx}
                        onPress={() => {
                          setColor(i);
                          offColor();
                        }}>
                        <Text
                          marginBottom={idx < data_colors.length ? 16 : 0}
                          category={i === color ? 'h5' : 'body'}
                          status={i === color ? 'basic' : 'placeholder'}
                          numberOfLines={1}>
                          {i}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
              </View>
            </Tooltip>
            <Tooltip
              anchor={renderSize}
              visible={showSize}
              placement="bottom"
              onBackdropPress={offSize}
              contentContainerStyle={styles.contentContainerStyle}
              style={[styles.tooltip1, { width: widthTooltip }]}>
              <View>
                {data_sizes &&
                  data_sizes.map((i, idx) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        key={idx}
                        onPress={() => {
                          setSize(i);
                          offSize();
                        }}>
                        <Text
                          marginBottom={idx < data_sizes.length ? 16 : 0}
                          category={i === size ? 'h5' : 'body'}
                          status={i === size ? 'basic' : 'placeholder'}
                          numberOfLines={1}>
                          Size {i}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
              </View>
            </Tooltip>
          </View>
          <View style={styles.row2}>
            <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
              <LinearGradient
                colors={['#CFE1FD', '#FFFDE1']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonBag}>
                <Layout level="2" style={styles.box2}>
                  <Text>Add To Bag</Text>
                </Layout>
              </LinearGradient>
            </TouchableOpacity>
            <Button
              children="Buy Now"
              accessoryRight={<Icon pack="assets" name="arrow-right" />}
              style={styles.buttonBuy}
              onPress={goBack}
            />
          </View>
        </Layout>
        <Layout level="2" style={styles.box3}>
          {data_features.map((i, idx) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={goBack}
                key={idx}
                style={[
                  styles.item,
                  {
                    borderBottomColor:
                      idx < data_features.length - 1
                        ? theme['border-basic-color-3']
                        : 'transparent',
                  },
                ]}>
                <Text>{i}</Text>
                <Icon
                  pack="assets"
                  name="plus"
                  style={[styles.icon24, { tintColor: theme['color-basic-600'] }]}
                />
              </TouchableOpacity>
            );
          })}
        </Layout>
        <FlatList
          ref={refScroll}
          data={data_tabs || []}
          renderItem={renderTab}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(i, _index) => `${_index}`}
          style={styles.style}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
        />
        <FlatList
          data={data_products || []}
          renderItem={renderProduct}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(i, _index) => `${_index}`}
          style={{ flexGrow: 0 }}
          snapToInterval={(width - 16) / 2 + 8}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
          contentContainerStyle={styles.contentProduct}
        />
      </Content>
    </Container>
  );
});

export default ECommerce07;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    height: 220,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  box: {
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 28,
  },
  row: {
    marginTop: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  play: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row1: {
    flexDirection: 'row',
  },
  box1: {
    marginTop: 32,
    padding: 16,
    borderRadius: 16,
  },
  buttonColor: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    flex: 1,
    marginRight: 8,
  },
  buttonSize: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    flex: 1,
  },
  flexOne: {
    flex: 1,
  },
  tooltip: {
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'flex-start',
  },
  tooltip1: {
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'flex-start',
  },
  icon16: {
    width: 16,
    height: 16,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonBag: {
    height: 54,
    padding: 1,
    borderRadius: 16,
  },
  box2: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 24,
  },
  row2: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonBuy: {
    marginLeft: 8,
    flex: 1,
  },
  box3: {
    marginTop: 4,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
  },
  itemProduct: {
    marginRight: 8,
  },
  icon24: {
    width: 24,
    height: 24,
  },
  tab: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 38,
    height: 38,
    marginRight: 8,
  },
  content: {
    paddingLeft: 8,
    marginBottom: 16,
  },
  style: {
    flexGrow: 0,
    marginTop: 24,
  },
  contentProduct: {
    paddingLeft: 8,
  },
});
