import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { CurrencyText, Text } from 'components';
import { useNavigation } from '@react-navigation/native';
import { IWallet } from './types';

interface WalletItemProps {
  style?: ViewStyle;
  item: IWallet;
  onPress?(): void;
}

const WalletItem: React.FC<WalletItemProps> = ({ item, style }) => {
  const { category, amount, color } = item;

  const { goBack } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: color }, style]}
      onPress={goBack}>
      <View style={styles.content}>
        <Text category="body" status="white">
          {category.name}
        </Text>
        <Image source={{ uri: category.image }} style={styles.image} />
      </View>
      <CurrencyText category="h3" marginTop={16} status="white">
        {amount}
      </CurrencyText>
      <Text category="body" status="white" opacity={0.5}>
        Balance
      </Text>
      <View style={styles.bottom}>
        <Text category="c1" status="white">
          +$42.8 (0.5%) today
        </Text>
        <Icon pack="assets" name="arrow-up-right" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default WalletItem;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  bottom: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
