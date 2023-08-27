import React from 'react';
import { View, Image, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import { CurrencyText, Text } from 'components';
import { useTheme, Icon } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import ProgressBar from './ProgressBar';

import { IBill } from './type';

interface SplitBillItemProps {
  style?: ViewStyle;
  item: IBill;
  onPress?(): void;
}

const SplitBillItem: React.FC<SplitBillItemProps> = ({ item, style, onPress }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { category, bill_members } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        { backgroundColor: theme['background-basic-color-2'], width: width - 40 },
        style,
      ]}
      onPress={onPress}>
      <View style={styles.row1}>
        <View style={styles.row}>
          <Image source={{ uri: category.image }} style={styles.item} />
          <Text category="h4">{category.name}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon pack="assets" name="dots-three-vertical" />
        </TouchableOpacity>
      </View>
      <View style={styles.row2}>
        <CurrencyText category="body" status="platinum">
          128
        </CurrencyText>
        <CurrencyText category="h4">680</CurrencyText>
      </View>
      <ProgressBar progress={0.1} />
      <View style={styles.bottom}>
        <Text category="h6" status="platinum">
          1 of 4 Paid
        </Text>
        <View style={styles.viewAvatar}>
          {bill_members?.map((i, index) => {
            return <Image key={index} source={{ uri: i.User.avatar }} style={styles.avatar} />;
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SplitBillItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
  },
  item: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 4,
  },
  viewAvatar: {
    flexDirection: 'row',
  },
  avatar: {
    marginRight: 4,
    width: 20,
    height: 20,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
