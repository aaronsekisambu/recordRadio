import React, { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Icon, Avatar, Button } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { Container, Content, Text, HStack, VStack } from 'components';
import { Images } from 'assets/images';
import ListFood from './ListFood';
import { DATA_FOOD, DATA_RESTAURENT } from './data';
import ListRestaurant from './ListRestaurant';
import { useNavigation } from '@react-navigation/native';

const HomeFood02 = memo(() => {
  const { width } = useLayout();
  const { goBack } = useNavigation();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <HStack style={styles.header} mb={4} onPress={goBack}>
          <VStack>
            <Text category="c1" style={{ color: '#D0D3D6' }}>
              Delivery to
            </Text>
            <HStack>
              <Text category="h5">21 Pentrefelin, LL68 9PE</Text>
              <Icon pack="assets" name="caret-right" style={styles.caret} />
            </HStack>
          </VStack>
          <HStack gap={20}>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon pack="assets" name="search" style={styles.image} />
            </TouchableOpacity>
            {/* @ts-ignore */}
            <Avatar source={Images.avatar.avatar_01} style={styles.image} />
          </HStack>
        </HStack>
        <Image
          source={Images.food.banner}
          style={{ width: width - 8, height: 160, marginHorizontal: 4 }}
          resizeMode="cover"
          borderRadius={16}
        />
        <ListFood list={DATA_FOOD} title={'Popular'} />
        <HStack style={styles.banner} pv={12} ph={16} mt={24} mb={24}>
          <Text category="h6" marginVertical={8}>
            {'326 Vourcher waiting'}
          </Text>
          <Button size="tiny" children="Claim" />
        </HStack>
        <ListRestaurant list={DATA_RESTAURENT} title="Restaurant" />
      </Content>
      <TouchableOpacity style={styles.buttonBottom}>
        <Icon pack="assets" name="shopping" />
        <VStack style={styles.notification}>
          <Text category="h6" lineHeight={20} center>
            5
          </Text>
        </VStack>
      </TouchableOpacity>
    </Container>
  );
});

export default HomeFood02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  tabBar: {
    paddingRight: 16,
  },
  caret: {
    width: 16,
    height: 16,
  },
  content: {
    paddingBottom: 80,
  },
  input: {
    flex: 1,
    margin: 16,
  },
  header: {
    backgroundColor: 'color-primary-default',
    borderRadius: 16,
    marginHorizontal: 4,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginTop: 12,
  },
  image: {
    width: 24,
    height: 24,
  },
  banner: {
    backgroundColor: 'color-success-default',
    marginHorizontal: 16,
    borderRadius: 16,
  },
  buttonBottom: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    backgroundColor: '#B1CEDE',
    padding: 16,
    borderRadius: 99,
  },
  notification: {
    width: 20,
    height: 20,
    backgroundColor: '#00CD50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
    position: 'absolute',
    top: -4,
    right: 4,
  },
});
