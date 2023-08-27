import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { Icon, Input, TopNavigation, useTheme } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Text, LinearGradientText } from 'components';

import TabBar from './TabBar';
import BillItem from './BillItem';
import SplitBillItem from './SplitBillItem';

import { IBill } from './type';
import { Images } from 'assets/images';
import { data_bills, data_split_bills } from './data';

const Finance02 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { width, top } = useLayout();

  const renderSplitBill = React.useCallback(({ item }: { item: IBill }) => {
    return <SplitBillItem item={item} style={styles.splitBill} onPress={goBack} />;
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <View style={[styles.header, { backgroundColor: theme['color-primary-500'] }]}>
          <View style={styles.row}>
            <Text category="h0" status="white" marginTop={16} marginLeft={16}>
              {'Manage\nBilling'}
            </Text>
            <Image source={Images.fiat_money} style={styles.image} />
          </View>
        </View>
        <Input
          style={styles.input}
          size="small"
          placeholder="Search Bill"
          accessoryLeft={<Icon pack="assets" name="search" />}
          accessoryRight={
            <TouchableOpacity activeOpacity={0.7}>
              <Icon pack="assets" name="scan" />
            </TouchableOpacity>
          }
        />
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Split Bill"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <FlatList
          data={data_split_bills || []}
          renderItem={renderSplitBill}
          horizontal
          keyExtractor={(i, index) => `${i.amount}-${index}`}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contentSplitBill}
          style={{ flexGrow: 0 }}
          snapToInterval={width - 32}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
        />
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Own Bill"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
      </View>
    );
  }, []);

  const renderBill = React.useCallback(({ item }: { item: IBill }) => {
    return <BillItem item={item} style={styles.item} onPress={goBack} />;
  }, []);

  return (
    <Container useSafeArea={false}>
      <View style={{ backgroundColor: theme['color-primary-500'], paddingTop: top }}>
        <TopNavigation
          appearance="control"
          accessoryLeft={<NavigationAction status="white" />}
          accessoryRight={<NavigationAction icon="circles-four" status="white" />}
        />
      </View>
      <FlatList
        data={data_bills || []}
        renderItem={renderBill}
        keyExtractor={(i, index) => `${i.amount}-${index}`}
        scrollEventThrottle={16}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
      <TabBar />
    </Container>
  );
});

export default Finance02;

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  image: {
    width: 210,
    height: 166,
    top: -12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 166,
  },
  item: {
    marginBottom: 8,
    marginHorizontal: 8,
  },
  splitBill: {
    marginRight: 8,
  },
  contentSplitBill: {
    paddingLeft: 8,
    paddingRight: 4,
  },
  content: {
    paddingBottom: 4 + 56 + 8 + 28,
  },
  input: {
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: -28,
    borderWidth: 0,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 16,
  },
});
