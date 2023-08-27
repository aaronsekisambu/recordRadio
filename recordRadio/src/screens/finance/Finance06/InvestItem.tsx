import React from 'react';
import { View, ViewStyle, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Icon, useTheme } from '@ui-kitten/components';

import { CurrencyText, Text } from 'components';
import { Images } from 'assets/images';

interface InvestItemProps {
  style?: ViewStyle;
  item: any;
  onPress?(): void;
  is_active?: boolean;
}

const InvestItem: React.FC<InvestItemProps> = ({ style, is_active, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        {
          backgroundColor: is_active
            ? theme['color-primary-500']
            : theme['background-basic-color-2'],
        },
        style,
      ]}
      onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Avatar source={Images.avatar.male} style={styles.avatar} />
          <Text marginLeft={8} category="body" status="white">
            Miranaha
          </Text>
        </View>
        <View style={styles.row1}>
          {['radio-active', 'health'].map((i, idx) => {
            return <Icon pack="assets" name={i} key={idx} style={styles.icon} />;
          })}
        </View>
      </View>
      <Text status="white" category="subhead" marginTop={16}>
        Borrow buy house
      </Text>
      <CurrencyText category="h2" status="white">
        5680
      </CurrencyText>
      <View style={[styles.line, { backgroundColor: theme['color-basic-1100'] }]} />
      <View style={styles.bottom}>
        <View>
          <Text category="subhead" status="white">
            Time
          </Text>
          <Text category="h6" marginTop={4}>
            90 days
          </Text>
        </View>
        <View>
          <Text category="subhead" status="white">
            Interest
          </Text>
          <View
            style={[
              styles.percent,
              {
                backgroundColor: is_active ? theme['color-basic-1100'] : theme['color-primary-500'],
              },
            ]}>
            <Text category="c1" status={is_active ? 'primary' : 'white'}>
              +25%
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InvestItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 24,
  },
  avatar: {
    width: 20,
    height: 20,
  },
  line: {
    marginTop: 16,
    opacity: 0.1,
    height: 1,
  },
  bottom: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  percent: {
    borderRadius: 16,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 16,
  },
});
