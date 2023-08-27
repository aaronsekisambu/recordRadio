import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationAction, Container, Text, LinearGradientText } from 'components';
import { useTheme, TopNavigation, Avatar, Input, Icon, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import StockItem from './StockItem';
import StockHotItem from './StockHotItem';

import { Images } from 'assets/images';
import { data_stock_hot } from './data';

const Finance09 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <Input size="small" placeholder="Enter something…" style={styles.search} />
        <View style={styles.contentStockHot}>
          {data_stock_hot.map((item, index) => {
            return (
              <StockHotItem key={index} item={item} style={styles.stockHot} onPress={goBack} />
            );
          })}
        </View>
        <View style={[styles.banner, { backgroundColor: theme['color-primary-500'] }]}>
          <Avatar source={Images.avatar.male} style={styles.avatar} />
          <View style={styles.box1}>
            <Text category="c1" status="white">
              Portfolios
            </Text>
            <Text category="h5" status="white" marginTop={6}>
              $25,689.43
            </Text>
          </View>
          <View style={[styles.box2, { backgroundColor: theme['color-basic-1100'] }]}>
            <Text category="c1" status="primary">
              +12%
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <LinearGradientText
            colors={['#CFE1FD', '#FFFDE1']}
            text="Hot Trend"
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            textStyle={styles.titleText}
          />
          <TouchableOpacity activeOpacity={0.7}>
            <Layout level="2" style={styles.caret}>
              <Icon
                pack="assets"
                name="caret-down"
                style={[styles.icon, { tintColor: theme['color-basic-1100'] }]}
              />
            </Layout>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, []);

  const renderItem = React.useCallback(({ item }: { item: any }) => {
    return <StockItem item={item} onPress={goBack} style={styles.item} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="dots-six-vertical" />}
        accessoryRight={
          <View style={styles.left}>
            <NavigationAction icon="chat-circle-text" marginRight={24} />
            <NavigationAction icon="bell" />
          </View>
        }
      />
      <FlatList
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={(i, idx) => `${idx}`}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={{ paddingBottom: 56 + 4 }}
      />
      <TabBar />
    </Container>
  );
});

export default Finance09;

const styles = StyleSheet.create({
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginTop: 8,
    marginHorizontal: 4,
  },
  stockHot: {
    marginRight: 4,
  },
  contentStockHot: {
    flexDirection: 'row',
    marginTop: 8,
    paddingLeft: 4,
  },
  banner: {
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 4,
  },
  box1: {
    marginLeft: 8,
    flex: 1,
  },
  box2: {
    borderRadius: 16,
    paddingHorizontal: 8,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginRight: 12,
  },
  caret: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
  row: {
    marginLeft: 16,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  item: {
    marginBottom: 4,
    marginHorizontal: 16,
  },
});
