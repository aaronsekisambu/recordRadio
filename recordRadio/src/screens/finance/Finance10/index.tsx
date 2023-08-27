import React from 'react';
import { Container, Content, CurrencyText, LinearGradientText, Text } from 'components';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme, Avatar, Icon, TopNavigation } from '@ui-kitten/components';
import { useLayout } from 'hooks';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import TransactionItem from './TransactionItem';
import WalletCardItem from './WalletCardItem';

import { Images } from 'assets/images';
import { IWalletCard } from './types';
import { data_transactions } from './data';
import { VictoryBar, VictoryAxis, VictoryChart } from 'victory-native';

const Finance10 = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const { goBack } = useNavigation();

  const data: IWalletCard[] = [
    {
      type: 'owe',
      amount: 1579,
      is_active: true,
      marginRight: 4,
    },
    {
      type: 'own',
      amount: 468,
    },
  ];

  const data_chart = [
    { x: 1, y: 3, time: '2017' },
    { x: 2, y: 4, time: '2018' },
    { x: 3, y: 6.5, time: '2019' },
    { x: 4, y: 10, time: '2020' },
    { x: 5, y: 5.5, time: '2021' },
    { x: 6, y: 7, time: '2022' },
  ];

  return (
    <Container>
      <TopNavigation
        appearance="control"
        accessoryLeft={
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.7}>
              <Avatar source={Images.avatar.male} size="40" />
            </TouchableOpacity>
            <LinearGradientText
              colors={['#CFE1FD', '#FFFDE1']}
              text="Welcome back!"
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              textStyle={styles.welcome}
            />
          </View>
        }
        accessoryRight={
          <TouchableOpacity activeOpacity={0.7}>
            <Icon pack="assets" name="search" />
          </TouchableOpacity>
        }
      />
      <Content>
        <View style={styles.top}>
          {data.map((item, index) => {
            return <WalletCardItem item={item} key={index} onPress={goBack} />;
          })}
        </View>
        <View style={styles.box}>
          <View style={styles.row2}>
            <View>
              <View style={styles.row}>
                <Text status="black">Expense</Text>
                <Icon
                  pack="assets"
                  name="caret-right"
                  style={{ tintColor: theme['text-black-color'] }}
                />
              </View>
              <CurrencyText category="h5" status="primary" marginTop={4}>
                25689.43
              </CurrencyText>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.row1, { backgroundColor: theme['color-basic-1100'] }]}>
              <Text status="platinum" category="c1" marginRight={4}>
                Monthly
              </Text>
              <Icon
                pack="assets"
                name="caret-down"
                style={[styles.icon16, { tintColor: theme['text-platinum-color'] }]}
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
              tickValues={[1, 2, 3, 4, 5, 6]}
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
                            style: { fill: '#2A3947' },
                          }),
                        },
                        {
                          target: 'data',
                          mutation: () => ({
                            style: { fill: '#106AF3' },
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
              data={data_chart}
              x="time"
              colorScale={'qualitative'}
              barWidth={48}
              padding={{ left: 100 }}
              cornerRadius={{ bottom: 8, top: 8 }}
              style={{
                data: {
                  fill: '#2A3947',
                },
              }}
            />
          </VictoryChart>
        </View>
        <View style={[styles.bottom, { backgroundColor: theme['color-basic-1100'] }]}>
          <Text category="h3" status="black" marginTop={24} marginHorizontal={24} marginBottom={8}>
            Latest Transaction
          </Text>
          {data_transactions.map((item, index) => {
            return (
              <TransactionItem
                key={index}
                item={item}
                onPress={goBack}
                style={styles.transaction}
              />
            );
          })}
        </View>
      </Content>
      <TabBar />
    </Container>
  );
});

export default Finance10;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  top: {
    marginTop: 8,
    marginHorizontal: 4,
    flexDirection: 'row',
  },
  box: {
    backgroundColor: '#DCDBB8',
    borderRadius: 16,
    padding: 24,
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
  bottom: {
    borderRadius: 16,
    marginTop: 4,
    marginHorizontal: 4,
  },
  transaction: {
    marginHorizontal: 24,
  },
});
