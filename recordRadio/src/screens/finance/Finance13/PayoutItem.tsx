import React from 'react';
import { Text } from 'components';
import { View, Image, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import numeral from 'numeral';
import { IPayout } from './types';

interface PayoutItemProps {
  style?: ViewStyle;
  item: IPayout;
  onPress?(): void;
}

const PayoutItem: React.FC<PayoutItemProps> = ({ item, style }) => {
  const theme = useTheme();
  const { image, amount, credits } = item;

  const { goBack } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={goBack}>
      <View style={[styles.header, { borderBottomColor: `${theme['border-basic-color-3']}30` }]}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text category="h3">${numeral(parseFloat(`${amount}`)).format('0,0')}</Text>
      </View>
      <View style={styles.bottom}>
        <Text category="body">${numeral(parseFloat(`${credits}`)).format('0,0')} Credits</Text>
        <Layout level="primary" style={styles.status}>
          <Text category="h6" status="white">
            Payout
          </Text>
        </Layout>
      </View>
    </TouchableOpacity>
  );
};

export default PayoutItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
  },
  bottom: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    paddingHorizontal: 24,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
