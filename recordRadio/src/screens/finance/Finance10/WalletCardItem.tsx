import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme, Icon } from '@ui-kitten/components';
import { CurrencyText, Text } from 'components';
import { IWalletCard } from './types';

interface WalletCardItemProps {
  item: IWalletCard;
  onPress?(): void;
}

const WalletCardItem: React.FC<WalletCardItemProps> = ({ item, onPress }) => {
  const theme = useTheme();
  const { marginRight, is_active, type, amount } = item;

  const backgroundColor = is_active
    ? theme['color-primary-500']
    : theme['background-basic-color-2'];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { marginRight, backgroundColor }]}
      onPress={onPress}>
      <Icon pack="assets" name="health" style={styles.icon} />
      <Text category="body" status="white" opacity={0.5} marginTop={24} capitalize>
        {type}
      </Text>
      <CurrencyText category="h3" status="white">
        {amount}
      </CurrencyText>
    </TouchableOpacity>
  );
};

export default WalletCardItem;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 24,
    flex: 1,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
