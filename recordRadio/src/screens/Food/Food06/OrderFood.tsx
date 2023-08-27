import React from 'react';
import { Image, ImageRequireSource } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Icon } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { Text, HStack, VStack } from 'components';

interface OrderFoodProps {
  image: ImageRequireSource;
  order: number;
  title: string;
  price: number;
}

const OrderFood = ({ item }: { item: OrderFoodProps }) => {
  const { image, order, title, price } = item;
  const styles = useStyleSheet(themedStyles);
  const [orderNumber, setOrderNumber] = React.useState<number>(order);

  const _onPlus = () => {
    setOrderNumber(orderNumber + 1);
  };
  const _onMinus = () => {
    if (orderNumber <= 1) {
    } else {
      setOrderNumber(orderNumber - 1);
    }
  };
  return (
    <HStack style={styles.container} level="2">
      <VStack>
        <VStack style={styles.select}>
          <Text category="c1">{'x2'}</Text>
        </VStack>
        {/* @ts-ignore */}
        <Image source={image} style={styles.image} />
      </VStack>
      <VStack gap={8} style={{ flex: 1 }}>
        <Text category="h5">{title}</Text>
        <HStack>
          <HStack itemsCenter gap={12}>
            <VStack onPress={_onPlus} padding={2}>
              <Icon pack="assets" name="plus" style={styles.icon} />
            </VStack>
            <Text>{orderNumber}</Text>
            <VStack padding={2} onPress={_onMinus}>
              <Icon pack="assets" name="minus" style={styles.icon} />
            </VStack>
          </HStack>
          <Text status="warning" category="h5">
            ${(price * orderNumber).toFixed(2)}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default OrderFood;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    gap: 16,
  },
  image: {
    width: 56,
    height: 56,
  },
  select: {
    position: 'absolute',
    top: -10,
    left: -6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: '#DEEAF4',
    backgroundColor: 'color-success-default',
    zIndex: 100,
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: 'text-platinum-color',
  },
});
