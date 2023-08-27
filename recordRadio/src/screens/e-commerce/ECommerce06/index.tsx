import React from 'react';
import { Container, CurrencyText, LinearGradientText, NavigationAction, Text } from 'components';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useTheme, TopNavigation, Layout, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import BottomTab from './BottomTab';
import AnalyticItem from './AnalyticItem';

import dayjs from 'dayjs';
import { data_analytics } from './data';
import { EFrequency, IAnalytic } from './types';
import { VictoryBar, VictoryAxis, VictoryChart, VictoryLabel } from 'victory-native';

const ECommerce06 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { width } = useLayout();

  const data_frequency = [EFrequency.DAILY, EFrequency.MONTHLY, EFrequency.YEARLY];

  const [frequency, setFrequency] = React.useState<EFrequency>(EFrequency.DAILY);
  const [date, setDate] = React.useState<Date>(new Date());

  const data_chart = [
    { x: 'Apr', y: 3, time: '2017' },
    { x: 'May', y: 4, time: '2018' },
    { x: 'Jun', y: 6.5, time: '2019' },
    { x: 'Jul', y: 10, time: '2020' },
    { x: 'Aug', y: 5.5, time: '2021' },
    { x: 'Sep', y: 7, time: '2022' },
  ];

  const renderItem = React.useCallback(({ item, index }: { item: IAnalytic; index: number }) => {
    return (
      <AnalyticItem
        item={item}
        onPress={goBack}
        style={{ marginRight: index % 2 === 0 ? 4 : 0, marginBottom: 4 }}
      />
    );
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <Text category="h0" marginLeft={12}>
          Earning
        </Text>
        <View style={styles.tabView}>
          {data_frequency.map((i, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => setFrequency(i)}
                style={[
                  styles.tab,
                  {
                    backgroundColor:
                      i === frequency
                        ? theme['color-primary-500']
                        : theme['background-basic-color-2'],
                    marginRight: idx < 2 ? 4 : 0,
                  },
                ]}>
                <Text capitalize category="h6" status={i === frequency ? 'white' : 'platinum'}>
                  {i}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Layout level="primary" style={styles.box}>
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setDate(dayjs(date).subtract(1, 'month').toDate())}>
              <Icon
                pack="assets"
                name="caret-left"
                style={[styles.icon24, { tintColor: theme['text-white-color'] }]}
              />
            </TouchableOpacity>
            <Text category="h5" status="white">
              {dayjs(date).format('MMM YYYY')}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setDate(dayjs(date).add(1, 'month').toDate())}>
              <Icon
                pack="assets"
                name="caret-right"
                style={[styles.icon24, { tintColor: theme['text-white-color'] }]}
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
            padding={{ left: 24, bottom: 16, right: 24, top: 0 }}>
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
                            style: {
                              fill: '#E8E9EB20',
                              //fontFamily: 'SpaceGrotesk-Regular',
                              fontSize: 12,
                            },
                          }),
                        },
                        {
                          target: 'labels',
                          eventKey: 'all',
                          mutation: () => ({
                            style: { fill: 'transparent' },
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
              labelComponent={<VictoryLabel y={86} />}
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
          <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
              <Text category="h5" status="white">
                Total
              </Text>
              <CurrencyText category="h3" status="warning" marginTop={4}>
                862.34
              </CurrencyText>
            </View>
            <View>
              <Text category="h5" status="placeholder">
                Average per day
              </Text>
              <CurrencyText category="h3" status="placeholder" marginTop={4}>
                62.34
              </CurrencyText>
            </View>
          </View>
        </Layout>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Analytics"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
      </View>
    );
  }, [frequency, date]);

  return (
    <Container>
      <TopNavigation
        accessoryRight={
          <View style={styles.right}>
            <NavigationAction icon="bell-simple" status="warning" marginRight={8} />
            <NavigationAction icon="dots-three-vertical" status="warning" />
          </View>
        }
      />
      <FlatList
        data={data_analytics}
        renderItem={renderItem}
        numColumns={2}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <BottomTab />
    </Container>
  );
});

export default ECommerce06;

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabView: {
    flexDirection: 'row',
    marginTop: 24,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    flex: 1,
    height: 40,
  },
  box: {
    borderRadius: 16,
    padding: 24,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 48,
  },
  icon24: {
    width: 24,
    height: 24,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomLeft: {
    marginRight: 40,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 12,
    marginTop: 24,
    marginBottom: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: 4,
    paddingBottom: 49,
  },
});
