import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Container, CurrencyText, Text } from 'components';
import { useTheme, TopNavigation, Icon, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useBoolean, useLayout } from 'hooks';

import TabBar from './TabBar';
import WalletItem from './WalletItem';

import numeral from 'numeral';
import { Images } from 'assets/images';
import { EFormat } from 'types/component-types';
import { data_bills } from './data';
import { IWallet } from './types';

const Finance05 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { bottom } = useLayout();

  const [secure, { toggle }] = useBoolean(true);

  const renderItem = React.useCallback(({ item }: { item: IWallet }) => {
    return <WalletItem item={item} style={styles.item} onPress={goBack} />;
  }, []);

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.scanView, { backgroundColor: theme['background-basic-color-2'] }]}>
            <Icon pack="assets" name="brackets-square" />
          </TouchableOpacity>
        }
        accessoryRight={
          <TouchableOpacity activeOpacity={0.7}>
            <Avatar source={Images.avatar.male} size="40" />
          </TouchableOpacity>
        }
      />
      <View style={styles.row}>
        <Text category="h5" marginRight={8}>
          Balance
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={toggle}>
          <Icon
            pack="assets"
            name={secure ? 'eye-slash' : 'eye'}
            style={[styles.icon16, { tintColor: theme['color-basic-900'] }]}
          />
        </TouchableOpacity>
      </View>
      {secure ? (
        <CurrencyText formatType={EFormat.SECURE} category="h3" marginTop={4} marginLeft={16}>
          0
        </CurrencyText>
      ) : (
        <Text category="h3" marginTop={4} marginLeft={16}>
          ${`${numeral(parseFloat('12860.44')).format('0,0.00')}`}
        </Text>
      )}
      <FlatList
        data={data_bills || []}
        renderItem={renderItem}
        keyExtractor={(i) => `${i.id}`}
        scrollEventThrottle={16}
        contentContainerStyle={[styles.contentContainerStyle, { paddingBottom: bottom + 56 + 4 }]}
      />
      <TabBar />
    </Container>
  );
});

export default Finance05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scanView: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 16,
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingHorizontal: 4,
  },
  item: {
    marginBottom: 4,
  },
});
