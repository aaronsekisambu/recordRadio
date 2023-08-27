import React, { memo } from 'react';
import { Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { Icon, Avatar, Button, StyleService, TopNavigation, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { Text, HStack, VStack, LinearGradientText, IDivider, Container, Content, NavigationAction } from 'components';
import { Images } from 'assets/images';
import SwipableButton from './SwipableButton';

const Food09 = memo(() => {
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <HStack itemsCenter gap={8} mb={8}>
            <NavigationAction status="placeholder" icon="mappin" />
            <Text category="h5">21 Pentrefelin, LL68 9PE</Text>
            <Icon pack="assets" name="caret-right" style={styles.caret} />
          </HStack>
        }
        // @ts-ignore
        accessoryRight={<Avatar source={Images.avatar.avatar_01} style={styles.avatar} />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack gap={4}>
          <HStack level="2" border={16} padding={16} itemsCenter>
            <LinearGradientText text={`What to\neat now?`} textStyle={styles.textLinear} />
            <VStack>
              <Image source={Images.food.cloud} />
              <Text category="h4" status="warning">
                37°C
              </Text>
            </VStack>
          </HStack>
          <Content horizontal contentContainerStyle={styles.contentFood}>
            {DATA_FOOD.map((food, index) => {
              return (
                <VStack
                  key={index}
                  style={{ width: 163 * (width / 375) }}
                  level="2"
                  border={16}
                  padding={16}>
                  <Icon pack="assets" name="merchant" style={styles.merchant} />
                  {/* @ts-ignore */}
                  <Image source={food.image} style={styles.image} />
                  <VStack mt={24}>
                    <Text category="h5" marginBottom={4} marginRight={32}>
                      {food.title}
                    </Text>
                    <HStack justify="flex-start" mb={8}>
                      <Text category="c1" marginTop={4} status="warning">
                        from{' '}
                      </Text>
                      <Text category="h5" status="warning">
                        {food.price}
                      </Text>
                    </HStack>
                    <Text category="subhead" status="placeholder">
                      {food.rate}
                      {'        '}
                      {food.delivery}
                    </Text>
                  </VStack>
                </VStack>
              );
            })}
          </Content>
        </VStack>
        <VStack gap={8} border={16}>
          <LinearGradientText
            text={`Yesterday`}
            textStyle={{ ...styles.textLinear, marginLeft: 8 }}
          />
          <VStack padding={16} border={16} level="3" gap={16}>
            <VStack style={styles.bookmark}>
              <Icon pack="assets" name="bookmark" style={styles.iconBookmark} />
            </VStack>
            <HStack justify="flex-start" gap={16}>
              {/* @ts-ignore */}
              <Image source={Images.food.banner} style={styles.banner} />
              <VStack gap={8}>
                <Text category="h5" marginRight={32}>
                  {'Ice Cream Jolibee'}
                </Text>
                <HStack justify="flex-start" style={{ alignItems: 'flex-end' }}>
                  <Text category="c1" status="warning" marginBottom={2}>
                    from{'  '}
                  </Text>
                  <Text category="h5" status="warning">
                    {'$2.34'}
                  </Text>
                </HStack>
                <Text category="subhead" status="placeholder">
                  ⭐️ 4/5
                  {'        '}
                  🛵️ 10kms
                </Text>
              </VStack>
            </HStack>
            <IDivider />
            <HStack gap={16} justify="flex-start" itemsCenter>
              <HStack gap={8} itemsCenter>
                <Icon pack="assets" name="hand-pointing" style={styles.icon} />
                <Text category="subhead">12k</Text>
              </HStack>
              <HStack gap={8} itemsCenter>
                <Icon pack="assets" name="chats-circle" style={styles.icon} />
                <Text category="subhead">234</Text>
              </HStack>
              <Button children="Book Again" size="tiny" style={styles.buttonBook} />
            </HStack>
          </VStack>
        </VStack>
      </Content>
      <SwipableButton />
    </Container>
  );
});

export default Food09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  caret: {
    width: 16,
    height: 16,
    tintColor: 'text-platinum-color',
  },
  avatar: {
    width: 32,
    height: 32,
  },
  content: {
    gap: 16,
    paddingHorizontal: 4,
  },
  textLinear: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  image: {
    width: 88,
    height: 88,
    zIndex: -100,
    alignSelf: 'center',
  },
  merchant: {
    position: 'absolute',
    left: -12,
    top: -12,
    width: 24,
    height: 24,
    zIndex: 100,
  },
  contentFood: {
    gap: 4,
  },
  banner: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  icon: {
    width: 16,
    height: 16,
  },
  buttonBook: {
    flex: 1,
  },
  bookmark: {
    width: 32,
    height: 32,
    backgroundColor: 'color-success-default',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: 99,
  },
  iconBookmark: {
    width: 16,
    height: 16,
    tintColor: 'text-white-color',
  },
});
const DATA_FOOD = [
  {
    image: Images.food.icecream,
    title: 'Ice Cream Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.tea,
    title: 'Ice Cream Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.chicken,
    title: 'Ice Cream Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.coffee,
    title: 'Ice Cream Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.ramen,
    title: 'Ice Cream Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
  {
    image: Images.food.hotdog,
    title: 'Ice Cream Jolibee',
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
  {
    image: Images.food.potato,
    title: 'Ice Cream Jolibee',
    rate: '⭐️ 4/5',
    delivery: '🛵️ 10kms',
    price: '$2.34',
  },
];
