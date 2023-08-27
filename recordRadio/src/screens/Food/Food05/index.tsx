import React, { memo } from 'react';
import { Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Icon,
  Button,
  ViewPager,
} from '@ui-kitten/components';

// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, VStack, HStack } from 'components';
import { Images } from 'assets/images';
import TabbarGradient from './TabbarGradient';

const Food05 = memo(() => {
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selected, setSelected] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        style={[styles.topNavigation, { top: top + 12 }]}
        appearance="control"
        accessoryLeft={<NavigationAction status="placeholder" />}
        accessoryRight={<NavigationAction status="placeholder" icon="heart" />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack>
          <Image
            source={Images.food.cookies}
            style={{ width: width, height: 295 * (height / 812) }}
          />
          <VStack style={styles.banner} mb={16}>
            <Text category="h3">Wisconsin Cheese Curds</Text>
            <HStack mt={4} itemsCenter justify="flex-start" gap={4}>
              <Icon pack="assets" name="globe" style={styles.globe} />
              <Text category="subhead" style={{ color: '#D0D3D6' }}>
                2715 Ash Dr. San Jose, South Dakota 83475
              </Text>
            </HStack>
            <Text marginTop={8} category="h6">
              {'🛵️ 10kms   ⭐️ 4/5   ⏰️ 15-20 minitues'}
            </Text>
          </VStack>
          <HStack style={styles.notification} itemsCenter>
            <Text status="black" category="h6">
              Voucher up to $3
            </Text>
            <Button children="Claim" size="tiny" />
          </HStack>
        </VStack>
        <TabbarGradient
          tabs={TABS}
          activeIndex={selected}
          onChange={setSelected}
          style={styles.tabBar}
        />
        <ViewPager selectedIndex={selected} onSelect={setSelected} swipeEnabled={false}>
          <HStack wrap mh={16} gap={8}>
            {DATA_FOOD.map((food, i) => {
              return (
                <VStack
                  key={i}
                  style={{ width: (width - 40) / 2 }}
                  pv={24}
                  level="2"
                  border={16}
                  itemsCenter>
                  {/* @ts-ignore */}
                  <Image source={food.image} style={styles.image} />
                  <VStack gap={8}>
                    <Text category="h5">{food.title}</Text>
                    <Text category="h4" status="warning">
                      {food.price}
                    </Text>
                    <Text category="subhead" status="placeholder">
                      {food.rate + '   ' + food.delivery}
                    </Text>
                  </VStack>
                </VStack>
              );
            })}
          </HStack>
          <VStack></VStack>
          <VStack></VStack>
        </ViewPager>
      </Content>
    </Container>
  );
});

export default Food05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  content: {
    zIndex: 90,
    paddingBottom: 80,
  },
  globe: {
    width: 16,
    height: 16,
    tintColor: '#D0D3D6',
  },
  banner: {
    backgroundColor: 'color-primary-default',
    marginTop: -60,
    marginHorizontal: 4,
    borderRadius: 24,
    padding: 16,
  },
  notification: {
    backgroundColor: '#F6D938',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
  },
  tabBar: {},
  image: {
    width: 88,
    height: 88,
    marginBottom: 24,
  },
});
const TABS = ['For You', 'Popular', 'Newest'];
export const DATA_FOOD = [
  {
    image: Images.food.tea,
    title: 'Tea Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.chicken,
    title: 'Chicken Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.coffee,
    title: 'Coffee Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.ramen,
    title: 'Ramen Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.hotdog,
    title: 'Hotdog Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.icecream,
    title: 'Tea Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.potato,
    title: 'Potato Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.icecream,
    title: 'Ice Cream Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
];
