import React, { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Button, Icon, TopNavigation } from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Hooks -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { Container, Content, Text, VStack, HStack, NavigationAction } from 'components';
import { Images } from 'assets/images';
import Optional from './Optional';

const Food03 = memo(() => {
  const { goBack } = useNavigation();
  const { top } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [selectedTopping, setSelectedTopping] = React.useState(0);
  const [numberOrder, setNumberOrder] = React.useState(2);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        appearance="control"
        style={{ position: 'absolute', left: 0, right: 0, paddingTop: top + 12 }}
        accessoryLeft={<NavigationAction />}
        accessoryRight={<NavigationAction icon="circles-four" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Image source={Images.food.fries} style={{ alignSelf: 'center' }} />
        <VStack style={styles.banner} level="2">
          <HStack mb={8}>
            <Text category="h4" maxWidth={118}>
              Aloo shimla mirch
            </Text>
            <VStack>
              <Text category="h3" status="warning">
                $12.13
              </Text>
              <Text category="subhead" status="platinum">
                Base price
              </Text>
            </VStack>
          </HStack>
          <Text category="body" status="placeholder">
            Establish your own food awards and share your favourites with you
          </Text>
        </VStack>
        <VStack gap={4} mh={4} mt={4}>
          <Optional
            list_option={Option01}
            title="Size"
            selected={selectedSize}
            onChange={setSelectedSize}
          />
          <Optional
            list_option={Option02}
            title="Topping"
            selected={selectedTopping}
            onChange={setSelectedTopping}
          />
        </VStack>

        <HStack itemsCenter gap={8} margin={16}>
          <HStack itemsCenter style={styles.order} level="2">
            <TouchableOpacity
              onPress={() => {
                setNumberOrder(numberOrder + 1);
              }}>
              <Icon pack="assets" name="plus" style={styles.icon} />
            </TouchableOpacity>
            <Text category="h4">{numberOrder}</Text>
            <TouchableOpacity
              onPress={() => {
                if (numberOrder > 1) {
                  setNumberOrder(numberOrder - 1);
                }
              }}>
              <Icon pack="assets" name="minus" style={styles.icon} />
            </TouchableOpacity>
          </HStack>
          <Button children="Add to Basket - $24.13" style={styles.button} onPress={goBack} />
        </HStack>
      </Content>
    </Container>
  );
});

export default Food03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  banner: {
    borderRadius: 24,
    padding: 16,
    marginHorizontal: 8,
  },
  order: {
    padding: 16,
    borderRadius: 16,
    gap: 16,
  },
  button: {
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'text-platinum-color',
  },
  content: {
    paddingTop: 12,
  },
});
const Option01 = [
  { name: 'Size S', price: '6$' },
  { name: 'Size M', price: '8$' },
];
const Option02 = [
  { name: 'Cocacola', price: '6$' },
  { name: 'Bear', price: '8$' },
];
