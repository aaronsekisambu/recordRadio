import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import { Icon, Avatar, Button, StyleService, Text, TopNavigation, useStyleSheet } from '@ui-kitten/components';

// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';

// ----------------------------- Components -----------------------------------
import { HStack, VStack, LinearGradientText, Container, Content, NavigationAction } from 'components';
import { Images } from 'assets/images';
import OrderFood from './OrderFood';

const Food06 = memo(() => {
  const styles = useStyleSheet(themedStyles);
  const { bottom } = useLayout();
  return (
    <Container style={styles.container}>
      <TopNavigation
        alignment="center"
        title={'My Order'}
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <HStack gap={4}>
            <NavigationAction icon="funnel" />
            <NavigationAction icon="search" />
          </HStack>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <HStack style={styles.card}>
          <VStack gap={8}>
            <Text category="c1" status="placeholder">
              Delivery to
            </Text>
            <HStack>
              <Text category="h5">21 Pentrefelin, LL68 9PE</Text>
              <Icon pack="assets" name="caret-right" />
            </HStack>
          </VStack>
          {/* @ts-ignore */}
          <Avatar source={Images.avatar.avatar_01} style={styles.avatar} />
        </HStack>
        <VStack gap={4}>
          <LinearGradientText text={'Order Sumary'} textStyle={styles.title} />
          {DATA.map((item, index) => {
            return <OrderFood item={item} key={index} />;
          })}
        </VStack>
        <VStack gap={4}>
          <LinearGradientText text={'Payments Details'} textStyle={styles.title} />
          {PAYMENTS.map((item, index) => {
            return (
              <HStack key={index} level="2" itemsCenter padding={10} border={16}>
                <HStack itemsCenter gap={16}>
                  <VStack padding={10} border={12} level="3">
                    <Icon
                      pack="assets"
                      name={item.icon}
                      style={{ ...styles.icon, tintColor: item.color }}
                    />
                  </VStack>
                  <Text category="h5">{item.title}</Text>
                </HStack>
                <Icon pack="assets" name="caret-right" style={styles.caret} />
              </HStack>
            );
          })}
        </VStack>
      </Content>
      <VStack style={[styles.bottom, { paddingBottom: bottom }]} rowGap={12} level="2">
        <HStack>
          <Text category="h4">{'Total:'}</Text>
          <Text category="h4" status="warning">
            {'$28.14'}
          </Text>
        </HStack>
        <Button children={'Place Order'} />
      </VStack>
    </Container>
  );
});

export default Food06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  card: {
    backgroundColor: 'color-primary-default',
    borderRadius: 16,
    padding: 16,
  },
  avatar: {
    width: 24,
    height: 24,
  },
  content: {
    paddingHorizontal: 4,
    gap: 24,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 16,
  },
  icon: {
    width: 28,
    height: 28,
  },
  caret: {
    tintColor: 'text-platinum-color',
    width: 24,
    height: 24,
  },
  bottom: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
const DATA = [
  { order: 2, title: 'Dark & Stormy', image: Images.food.chicken, price: 8.53 },
  { order: 2, title: 'BBQ Rib Dinner', image: Images.food.coffee, price: 3.33 },
  { order: 2, title: 'Hotdog Chicken Dinner', image: Images.food.hotdog, price: 4.52 },
];
const PAYMENTS = [
  { icon: 'cardholder', color: '#00CD50', title: 'Payment method' },
  { icon: 'gift', color: '#C0A975', title: 'Offer Discount' },
];
