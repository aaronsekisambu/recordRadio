import React from 'react';
import { Image, TouchableOpacity, ImageRequireSource } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { Icon, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { Content, Text, VStack, HStack, LinearGradientText, NavigationAction } from 'components';

export interface IListRestaurantProps {
  title: string;
  onMore?(): void;
  list: IRestaurantProps[];
}
export interface IRestaurantProps {
  image: ImageRequireSource;
  title: string;
  rate: string;
  delivery: string;
  location: string;
}

const ListRestaurant = ({ title, onMore, list }: IListRestaurantProps) => {
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack mt={8}>
      <HStack margin={16} itemsCenter>
        <LinearGradientText text={title} textStyle={styles.title} />
        <TouchableOpacity style={styles.buttonSeemore} onPress={onMore}>
          <Icon pack="assets" name="arrow-right" style={styles.arrow} />
        </TouchableOpacity>
      </HStack>
      <Content horizontal contentContainerStyle={styles.content}>
        {list &&
          list.map((restaurant, index) => {
            const _width = width - 48;
            return (
              <VStack key={index} style={{ width: _width }}>
                {/* @ts-ignore */}
                <Image
                  source={restaurant.image}
                  style={{ width: _width, height: 160, borderRadius: 16 }}
                />
                <VStack gap={8} mv={16}>
                  <Text category="h4">{restaurant.title}</Text>
                  <HStack justify="flex-start" itemsCenter gap={8}>
                    <Icon pack="assets" name="globe" style={styles.icon} />
                    <Text category="subhead" status="placeholder">
                      {restaurant.location}
                    </Text>
                  </HStack>
                </VStack>
                <Text category="subhead" status="placeholder">
                  {restaurant.delivery}
                  {'    '}
                  {restaurant.rate}
                </Text>
              </VStack>
            );
          })}
      </Content>
    </VStack>
  );
};

export default ListRestaurant;

const themedStyles = StyleService.create({
  buttonSeemore: {
    padding: 8,
    borderRadius: 99,
    backgroundColor: 'background-basic-color-2',
  },
  icon: {
    width: 16,
    height: 16,
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
  arrow: {
    width: 24,
    height: 24,
    tintColor: 'text-warning-color',
  },
});
