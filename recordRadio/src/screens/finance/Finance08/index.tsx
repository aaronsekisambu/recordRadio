import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NavigationAction, Container, Text, CurrencyText, LinearGradientText } from 'components';
import { useTheme, Avatar, Icon, TopNavigation } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import TransactionItem from './TransactionItem';

import { ITransaction } from './types';
import { Images } from 'assets/images';
import { data_transactions } from './data';

const Finance08 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <View style={styles.header}>
          <Avatar source={Images.avatar.male} style={styles.avatar} />
          <Text category="h3" marginLeft={8}>
            Hi! Peter
          </Text>
        </View>
        <View style={[styles.box, { backgroundColor: theme['color-basic-1100'] }]}>
          <View style={styles.row1}>
            <View>
              <View style={styles.row}>
                <CurrencyText category="h3" status="black">
                  13579
                </CurrencyText>
                <Icon
                  pack="assets"
                  name="caret-down"
                  style={[styles.arrow, { tintColor: theme['text-black-color'] }]}
                />
              </View>
              <Text category="body" status="black" opacity={0.5}>
                Balance
              </Text>
            </View>
            <Icon pack="assets" name="health" />
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={goBack}
              style={[styles.button1, { backgroundColor: theme['color-primary-500'] }]}>
              <Icon pack="assets" name="arrow-down" style={styles.icon} />
              <Text category="subhead" marginLeft={8}>
                Deposit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={goBack}
              style={[styles.button2, { backgroundColor: theme['color-success-500'] }]}>
              <Icon pack="assets" name="arrow-up" style={styles.icon} />
              <Text category="subhead" marginLeft={8}>
                Withdraw
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.box1, { backgroundColor: theme['color-basic-1000'] }]}
              activeOpacity={0.7}
              onPress={goBack}>
              <Icon pack="assets" name="dots-three-vertical" style={{ tintColor: '#8247E5' }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box2}>
          {['Saving', 'Bill', 'P2P'].map((i, idx) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={goBack}
                key={idx}
                style={[
                  styles.box3,
                  {
                    marginRight: idx < 2 ? 4 : 0,
                    backgroundColor: theme['background-basic-color-2'],
                  },
                ]}>
                <Icon pack="assets" name="health" />
                <Text category="body">{i}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Transaction"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
      </View>
    );
  }, []);

  const renderItem = React.useCallback(({ item }: { item: ITransaction }) => {
    return <TransactionItem item={item} onPress={goBack} style={styles.item} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="scan" />}
        accessoryRight={
          <View style={styles.left}>
            <NavigationAction icon="chart-bar" marginRight={16} />
            <NavigationAction icon="search" />
          </View>
        }
      />
      <FlatList
        data={data_transactions || []}
        renderItem={renderItem}
        keyExtractor={(i, idx) => `${idx}`}
        scrollEventThrottle={16}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.content}
      />
      <TabBar />
    </Container>
  );
});

export default Finance08;

const styles = StyleSheet.create({
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 8,
  },
  avatar: {
    width: 32,
    height: 32,
  },
  box: {
    marginTop: 24,
    padding: 24,
    borderRadius: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  health: {
    width: 32,
    height: 32,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button1: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 8,
    height: 44,
  },
  button2: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 8,
    height: 44,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  box1: {
    width: 44,
    height: 44,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
  box2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  box3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    aspectRatio: 1 / 1,
    paddingVertical: 24,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginTop: 24,
    marginLeft: 12,
    marginBottom: 16,
  },
  item: {
    marginBottom: 4,
  },
  content: {
    paddingHorizontal: 4,
    paddingBottom: 4 + 56,
  },
});
