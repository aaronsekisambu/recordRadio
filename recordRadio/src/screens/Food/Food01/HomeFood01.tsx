import React, { memo } from 'react';
import { Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, Input, Icon } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Content, Text, HStack, VStack } from 'components';
import { Images } from 'assets/images';
import TabBarScrollable from '../elements/TabBarScrollable';

const HomeFood01 = memo(() => {
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const size_food = 56;
  const [selected, setSelected] = React.useState(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <HStack itemsCenter gap={8}>
            <NavigationAction status="placeholder" icon="mappin" />
            <Text category="h5">21 Pentrefelin, LL68 9PE</Text>
            <Icon pack="assets" name="caret-right" style={styles.caret} />
          </HStack>
        }
        accessoryRight={
          <HStack gap={8}>
            <NavigationAction icon="envelope" />
            <NavigationAction icon="bell-ringing" />
          </HStack>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Input
          placeholder="Find food & drink"
          accessoryLeft={<Icon pack="assets" name="search" />}
          size="large"
          style={styles.input}
        />
        <Image
          source={Images.food.banner}
          style={{ width: width - 8, height: 240, marginHorizontal: 4 }}
          borderRadius={16}
        />
        <TabBarScrollable tabs={DATA} activeIndex={selected} onChange={setSelected} style={styles.tabBar} />
        <HStack wrap mt={24}>
          {DATA_FOOD.map((food, index) => {
            return (
              <VStack key={index} style={{ width: (width - 20) / 4 }} itemsCenter mb={24}>
                <Image source={food.image} style={{ width: size_food, height: size_food }} />
                <Text category="subhead" center marginTop={12}>
                  {food.title}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </Content>
    </Container>
  );
});

export default HomeFood01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  tabBar: {
    paddingRight: 16,
  },
  caret: {
    width: 16,
    height: 16,
  },
  content: {
    paddingBottom: 40,
  },
  input: {
    flex: 1,
    margin: 16,
  },
});

const DATA = ['Popular', 'Hot Today', 'Near by', 'Favorite', 'Best rate', 'Local'];
const DATA_FOOD = [
  { image: Images.food.tea, title: 'Tea' },
  { image: Images.food.chicken, title: 'Chicken' },
  { image: Images.food.coffee, title: 'Coffee' },
  { image: Images.food.ramen, title: 'Ramen' },
  { image: Images.food.hotdog, title: 'Hotdog' },
  { image: Images.food.icecream, title: 'Tea' },
  { image: Images.food.potato, title: 'Potato' },
  { image: Images.food.icecream, title: 'Icecream' },
];
