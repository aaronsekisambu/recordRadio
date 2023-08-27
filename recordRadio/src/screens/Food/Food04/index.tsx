import React, { memo } from 'react';
import { Image, FlatList, ImageRequireSource } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Text, HStack, VStack } from 'components';
import TabBarScrollable from '../elements/TabBarScrollable';
import keyExtractorUtil from 'utils/keyExtractorUtil';
import { Images } from 'assets/images';

interface IFoodProps {
  image: ImageRequireSource;
  name: string;
  price: string;
  rate: string;
  delivery: string;
  duration: string;
}

const Food04 = memo(() => {
  const styles = useStyleSheet(themedStyles);

  const [selected, setSelected] = React.useState(0);
  const renderItem = ({ item }: { item: IFoodProps }) => {
    const space = '   ';
    return (
      <HStack level="2" pv={24} ph={16} border={16}>
        <VStack gap={8}>
          <Text category="h5">{item.name}</Text>
          <Text category="h4" status="warning">
            {item.price}
          </Text>
          <Text category="c1" status="placeholder">
            {item.rate + space + item.delivery + space + item.duration}
          </Text>
        </VStack>
        {/* @ts-ignore */}
        <Image source={item.image} style={styles.image} />
      </HStack>
    );
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        title="Near me"
        alignment="center"
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <HStack>
            <NavigationAction icon="funnel" marginRight={4} />
            <NavigationAction icon="search" />
          </HStack>
        }
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractorUtil}
        contentContainerStyle={styles.contentStyle}
        ListHeaderComponent={() => (
          <TabBarScrollable
            tabs={TABS}
            activeIndex={selected}
            onChange={setSelected}
            style={styles.tabBar}
          />
        )}
      />
    </Container>
  );
});

export default Food04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  tabBar: {
    marginTop: 8,
    marginBottom: 16,
    paddingRight: 16,
  },
  contentStyle: {
    gap: 4,
    paddingHorizontal: 4,
    paddingBottom: 40,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
});
const TABS = ['Popular', 'Promo', 'Price low to high', 'Favorite', 'Best rating'];
const DATA: IFoodProps[] = [
  {
    name: 'White Castle Sliders',
    price: '$11.70',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    image: Images.food.food01,
    duration: '⏰️ 15 mins',
  },
  {
    name: 'French Fries',
    price: '$11.70',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    image: Images.food.food02,
    duration: '⏰️ 15 mins',
  },
  {
    name: 'Chalupa Supreme',
    price: '$11.70',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    image: Images.food.food03,
    duration: '⏰️ 15 mins',
  },
  {
    name: 'Kung Pao Chicken',
    price: '$11.70',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    image: Images.food.food04,
    duration: '⏰️ 15 mins',
  },
  {
    name: 'Crispy Chicken',
    price: '$11.70',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    image: Images.food.food05,
    duration: '⏰️ 15 mins',
  },
  {
    name: 'Chalupa Supreme',
    price: '$11.70',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    image: Images.food.food03,
    duration: '⏰️ 15 mins',
  },
  {
    name: 'Kung Pao Chicken',
    price: '$11.70',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    image: Images.food.food04,
    duration: '⏰️ 15 mins',
  },
  {
    name: 'Crispy Chicken',
    price: '$11.70',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    image: Images.food.food05,
    duration: '⏰️ 15 mins',
  },
];
