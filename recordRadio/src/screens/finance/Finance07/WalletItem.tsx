import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { CurrencyText, Text } from 'components';
import { useLayout } from 'hooks';

interface WalletItemProps {
  style?: ViewStyle;
  item: any;
  onPress?(): void;
}

const WalletItem: React.FC<WalletItemProps> = ({ item, style, onPress }) => {
  const { color } = item;
  const { width } = useLayout();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: color, width: width - 32 }, style]}
      onPress={onPress}>
      <View style={styles.top}>
        <Text category="body" status="white">
          Balance
        </Text>
        <Icon pack="assets" name="health" />
      </View>
      <CurrencyText category="h2" marginTop={16} status="white" center>
        13579
      </CurrencyText>
      <View style={styles.bottom}>
        <Text category="c1" status="white">
          Auto Pay
        </Text>
        <Icon pack="assets" name="lightning" style={styles.icon} />
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
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
