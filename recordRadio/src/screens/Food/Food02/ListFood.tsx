import React from 'react';
import { Image, TouchableOpacity, ImageRequireSource } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { Content, Text, VStack, HStack, LinearGradientText } from 'components';

export interface IListFoodProps {
  title: string;
  onMore?(): void;
  list: IFoodProps[];
}
export interface IFoodProps {
  image: ImageRequireSource;
  title: string;
  rate: string;
  price: string;
  delivery: string;
}

const ListFood = ({ title, onMore, list }: IListFoodProps) => {
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack mt={8}>
      <HStack margin={16}>
        <HStack gap={8}>
        <Text category='h1' lineHeight={36}>☕️</Text>
        <LinearGradientText text={title} textStyle={styles.title} />
        </HStack>
        <TouchableOpacity style={styles.buttonSeemore} onPress={onMore}>
          <Text category="c2" center>
            See More
          </Text>
        </TouchableOpacity>
      </HStack>
      <Content horizontal contentContainerStyle={styles.content}>
        {list &&
          list.map((food, index) => {
            return (
              <VStack
                key={index}
                style={{ width: 212 * (width / 375) }}
                level="2"
                border={16}
                pv={24}
                ph={16}>
                {/* @ts-ignore */}
                <Image source={food.image} style={styles.image} />
                <VStack gap={8} mt={24}>
                  <Text category="h5">{food.title}</Text>
                  <Text category="h5" status="warning">
                    {food.price}
                  </Text>
                  <Text category="subhead" status="placeholder">
                    {food.rate}
                    {'    '}
                    {food.delivery}
                  </Text>
                </VStack>
              </VStack>
            );
          })}
      </Content>
    </VStack>
  );
};

export default ListFood;

const themedStyles = StyleService.create({
  buttonSeemore: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 99,
    backgroundColor: 'color-primary-default',
  },
  image: {
    width: 88,
    height: 88,
    alignSelf: 'center',
  },
  content: {
    gap: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
  },
});
