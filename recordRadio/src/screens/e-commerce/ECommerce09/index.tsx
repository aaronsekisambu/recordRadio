import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { Container, Content, LinearGradientText, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation, Button, Avatar, Icon, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import TabBar from './TabBar';
import ProductItem from './ProductItem';
import { LinearGradient } from 'expo-linear-gradient';

import { IProduct } from './types';
import { data_products } from './data';
import { Images } from 'assets/images';

const ECommerce09 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { width } = useLayout();

  const images = [
    'https://user-images.githubusercontent.com/42206067/226249101-10ee46a0-f767-4ce9-80f5-c2fdae3f2517.png',
    'https://user-images.githubusercontent.com/42206067/226264963-26e14cc8-a325-4fb4-a846-a1bfeb66f8bd.png',
    'https://user-images.githubusercontent.com/42206067/227877465-61675bf9-1817-4d06-8733-83d16dbb0de4.png',
  ];

  const renderItem = React.useCallback(({ item }: { item: IProduct }) => {
    return <ProductItem item={item} onPress={goBack} style={styles.item} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        title="Order Management"
        accessoryLeft={<NavigationAction />}
        accessoryRight={<NavigationAction icon="circles-four" />}
      />
      <Content contentContainerStyle={styles.content}>
        <View style={[styles.box, { borderColor: theme['color-danger-500'] }]}>
          <Text category="h5" status="white">
            Refunds Request
          </Text>
          <View style={styles.row}>
            <Text category="subhead" status="placeholder">
              🛵️ 3 Request refunds
            </Text>
            <View style={styles.row1}>
              {images.map((i, idx) => {
                return (
                  <Image
                    source={{ uri: i }}
                    key={idx}
                    style={[styles.image, { marginRight: idx < images.length - 1 ? 8 : 0 }]}
                  />
                );
              })}
            </View>
          </View>
          <Button size="tiny" children="Check All Request" style={styles.button} />
        </View>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="New Orders (108)"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <FlatList
          data={data_products || []}
          renderItem={renderItem}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(i, index) => `${index}`}
          style={{ flexGrow: 0 }}
          snapToInterval={(width - 16) / 2 + 8}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
        <View style={styles.bottom}>
          <LinearGradient
            colors={['#CFE1FD', '#FFFDE1']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.box1}>
            <Icon
              pack="assets"
              name="chat-circle-text"
              style={{ tintColor: theme['color-primary-500'] }}
            />
          </LinearGradient>
          <View style={styles.contentBottom}>
            <Text category="h5" status="black">
              Customer Chat
            </Text>
            <View style={styles.row2}>
              <Avatar size="20" source={Images.avatar.avatar_01} />
              <Text category="c1" status="chambrey" marginLeft={4}>
                What price?
              </Text>
            </View>
          </View>
          <Layout level="primary" style={styles.box2}>
            <Text category="c1" status="white">
              34 Waiting
            </Text>
          </Layout>
        </View>
      </Content>
      <TabBar />
    </Container>
  );
});

export default ECommerce09;

const styles = StyleSheet.create({
  content: {
    paddingBottom: 56 + 24,
  },
  box: {
    marginTop: 8,
    backgroundColor: 'rgba(227, 1, 71, 0.2)',
    borderWidth: 1,
    borderRadius: 16,
    marginHorizontal: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  button: {
    marginTop: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
    marginTop: 32,
    marginBottom: 16,
  },
  item: {
    marginRight: 8,
  },
  contentContainerStyle: {
    paddingLeft: 8,
  },
  box1: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    marginRight: 8,
  },
  bottom: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 24,
    marginHorizontal: 8,
    borderRadius: 16,
    padding: 24,
  },
  row2: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    paddingHorizontal: 8,
    height: 24,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBottom: {
    flex: 1,
  },
});
