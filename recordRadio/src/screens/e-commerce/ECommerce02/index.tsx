import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {
  Container,
  Content,
  CurrencyText,
  LinearGradientText,
  NavigationAction,
  Text,
} from 'components';
import { useTheme, TopNavigation, Icon, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useBoolean, useLayout } from 'hooks';

import TabBar from './TabBar';
import ProductItem from './ProductItem';
import { LinearGradient } from 'expo-linear-gradient';

import { IProduct } from './types';
import { data_products } from './data';
import { EFormat } from 'types/component-types';
import { VictoryBar, VictoryAxis, VictoryChart, VictoryLabel } from 'victory-native';

const ECommerce02 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { width } = useLayout();

  const [secure, { toggle }] = useBoolean(true);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const data_chart = [
    { x: 'Apr', y: 3, time: '2017' },
    { x: 'May', y: 4, time: '2018' },
    { x: 'Jun', y: 6.5, time: '2019' },
    { x: 'Jul', y: 10, time: '2020' },
    { x: 'Aug', y: 5.5, time: '2021' },
    { x: 'Sep', y: 7, time: '2022' },
  ];

  const renderItem = React.useCallback(({ item }: { item: IProduct }) => {
    return <ProductItem item={item} onPress={goBack} style={styles.item} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="chat-circle-dots" />}
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction icon="bell-simple" status="warning" marginRight={8} />
            <NavigationAction icon="dots-three-vertical" status="warning" />
          </View>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Dashboard"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
          <LinearGradient
            colors={['#CFE1FD', '#FFFDE1']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.header}>
            <Text category="h4" status="black">
              36 Order Pending
            </Text>
            <Layout level="primary" style={styles.boxHeader}>
              <Icon pack="assets" name="arrow-right" />
            </Layout>
          </LinearGradient>
        </TouchableOpacity>
        <Layout level="primary" style={styles.box}>
          <View style={styles.row2}>
            <View>
              <View style={styles.row}>
                <Text status="placeholder" category="c1" marginRight={4}>
                  Profits
                </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={toggle}>
                  <Icon
                    pack="assets"
                    name={secure ? 'eye-slash' : 'eye'}
                    style={[styles.icon16, { tintColor: theme['text-placeholder-color'] }]}
                  />
                </TouchableOpacity>
              </View>
              {secure ? (
                <CurrencyText
                  formatType={EFormat.SECURE}
                  category="h5"
                  status="white"
                  marginTop={4}>
                  0
                </CurrencyText>
              ) : (
                <CurrencyText category="h5" status="white" marginTop={4}>
                  25689.43
                </CurrencyText>
              )}
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.row1, { borderColor: theme['color-basic-1100'] }]}>
              <Text status="white" category="c1" marginRight={4}>
                Monthly
              </Text>
              <Icon
                pack="assets"
                name="caret-down"
                style={[styles.icon16, { tintColor: theme['text-white-color'] }]}
              />
            </TouchableOpacity>
          </View>
          <VictoryChart
            animate={{
              duration: 1000,
              onLoad: { duration: 500 },
            }}
            width={width - 56}
            height={100}
            padding={{ left: 24, bottom: 24, right: 24, top: 0 }}>
            <VictoryAxis
              style={{
                axis: { stroke: 'transparent' },
                ticks: { stroke: 'transparent', size: 0 },
                tickLabels: { fill: 'transparent' },
              }}
              tickFormat={['2017', '2018', '2019', '2020', '2021', '2022']}
            />
            <VictoryBar
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPressIn: () => {
                      return [
                        {
                          target: 'data',
                          eventKey: 'all',
                          mutation: () => ({
                            style: { fill: '#E8E9EB20' },
                          }),
                        },
                        {
                          target: 'labels',
                          eventKey: 'all',
                          mutation: () => ({
                            style: {
                              fill: 'transparent',
                              //fontFamily: 'SpaceGrotesk-Regular',
                              fontSize: 12,
                            },
                          }),
                        },
                        {
                          target: 'data',
                          mutation: () => ({
                            style: { fill: '#D0E1F0' },
                          }),
                        },
                        {
                          target: 'labels',
                          mutation: () => ({
                            style: {
                              fill: theme['color-basic-100'],
                              //fontFamily: 'SpaceGrotesk-Regular',
                              fontSize: 12,
                            },
                          }),
                        },
                      ];
                    },
                    onPressOut: () => {
                      return [];
                    },
                  },
                },
              ]}
              labels={({ datum }) => datum.x}
              data={data_chart}
              x="time"
              colorScale={'qualitative'}
              barWidth={48}
              padding={{ left: 100 }}
              cornerRadius={{ bottom: 8, top: 8 }}
              labelComponent={<VictoryLabel y={80} />}
              style={{
                data: {
                  fill: '#E8E9EB20',
                },
                labels: {
                  fill: 'transparent',
                  //fontFamily: 'SpaceGrotesk-Regular',
                  fontSize: 12,
                },
              }}
            />
          </VictoryChart>
        </Layout>
        <View style={styles.tabView}>
          {['Top Sell', 'Popular', 'Newest'].map((i, idx) => {
            return (
              <TouchableOpacity key={idx} activeOpacity={0.7} onPress={() => setSelectedIndex(idx)}>
                <LinearGradient
                  colors={
                    selectedIndex === idx
                      ? ['#CFE1FD', '#FFFDE1']
                      : [theme['background-basic-color-1'], theme['background-basic-color-1']]
                  }
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.tab}>
                  <Text category="h5" status={selectedIndex === idx ? 'black' : 'placeholder'}>
                    {i}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>
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
      </Content>
      <TabBar />
    </Container>
  );
});

export default ECommerce02;

const styles = StyleSheet.create({
  content: {
    paddingBottom: 4 + 56 + 8,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
    marginTop: 4,
  },
  header: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 72,
    justifyContent: 'space-between',
    marginHorizontal: 4,
  },
  boxHeader: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: 16,
    paddingTop: 24,
    paddingHorizontal: 24,
    marginTop: 4,
    marginHorizontal: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 32,
    borderRadius: 12,
    borderWidth: 1,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 38,
    height: 38,
    marginRight: 8,
  },
  contentContainerStyle: {
    paddingLeft: 8,
  },
  item: {
    marginRight: 8,
  },
});
