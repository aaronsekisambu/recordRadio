import React from 'react';
import { Container, LinearGradientText, Text } from 'components';
import { View, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useTheme, TopNavigation, Avatar, Icon, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import AnalyticItem from './AnalyticItem';
import ProductItem from './ProductItem';

import { Images } from 'assets/images';
import { IAnalytic, IProduct } from './types';
import { data_analytics, data_products } from './data';

const ECommerce03 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const data = [
    {
      number: '$230K',
      title: 'Balance',
    },
    {
      number: '2,468',
      title: 'Sales',
    },
    {
      number: '498',
      title: 'Product',
    },
  ];

  const accessoryLeft = React.useCallback(() => {
    return (
      <View style={styles.header}>
        <Avatar size="48" source={Images.avatar.avatar_01} />
        <View style={styles.contentHeader}>
          <Text category="h4">Ultimate UI KIT</Text>
          <View style={styles.rowHeader}>
            <Text category="subhead" marginRight={4} status="placeholder">
              Linkstorehere
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => Alert.alert('Copied successfully')}>
              <Icon pack="assets" name="copy" style={styles.icon16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }, []);

  const accessoryRight = React.useCallback(() => {
    return (
      <TouchableOpacity
        onPress={goBack}
        activeOpacity={0.7}
        style={[styles.boxHeader, { backgroundColor: theme['color-primary-500'] }]}>
        <Icon pack="assets" name="arrow-right" />
      </TouchableOpacity>
    );
  }, []);

  const renderItem = React.useCallback(({ item, index }: { item: IAnalytic; index: number }) => {
    return (
      <AnalyticItem
        item={item}
        onPress={goBack}
        is_active={index === 0}
        style={styles.analyticItem}
      />
    );
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <Layout level="2" style={styles.box}>
          {data.map((i, idx) => {
            return (
              <View key={idx} style={styles.item}>
                <Text category="h4">{i.number}</Text>
                <Text category="subhead" status="placeholder" marginTop={4}>
                  {i.title}
                </Text>
              </View>
            );
          })}
        </Layout>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Summary"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <FlatList
          data={data_analytics}
          renderItem={renderItem}
          horizontal
          scrollEventThrottle={16}
          style={{ flexGrow: 0 }}
          keyExtractor={(item, index) => `${index}`}
          contentContainerStyle={styles.contentAnalytics}
          showsHorizontalScrollIndicator={false}
        />
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Top Seller"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
      </View>
    );
  }, []);

  const renderProduct = React.useCallback(({ item }: { item: IProduct }) => {
    return <ProductItem item={item} onPress={goBack} style={styles.productItem} />;
  }, []);

  return (
    <Container>
      <TopNavigation accessoryLeft={accessoryLeft} accessoryRight={accessoryRight} />
      <FlatList
        data={data_products}
        renderItem={renderProduct}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <TabBar />
    </Container>
  );
});

export default ECommerce03;

const styles = StyleSheet.create({
  header: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentHeader: {
    marginLeft: 16,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  boxHeader: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon16: {
    width: 16,
    height: 16,
  },
  box: {
    flexDirection: 'row',
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 24,
    marginTop: 24,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginTop: 24,
    marginLeft: 16,
    marginBottom: 16,
  },
  analyticItem: {
    marginRight: 4,
  },
  contentAnalytics: {
    paddingLeft: 4,
  },
  contentContainerStyle: {
    paddingBottom: 54 + 2,
  },
  productItem: {
    marginBottom: 4,
    marginHorizontal: 4,
  },
});
