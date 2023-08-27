import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { CurrencyText, NavigationAction, Text } from 'components';
// ----------------------------- @Types -----------------------------------
import { IBill, StatusEnum } from './type';
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Hook -----------------------------------

interface BillItemProps {
  style?: ViewStyle;
  item: IBill;
  onPress?(): void;
}

const BillItem: React.FC<BillItemProps> = ({ item, style }) => {
  const theme = useTheme();
  const { category, amount, status, due_date } = item;

  const { goBack } = useNavigation();

  const getColor = () => {
    switch (status) {
      case StatusEnum.Waiting:
        return theme['color-warning-500'];
      case StatusEnum.Paid:
        return theme['color-success-300'];
      case StatusEnum.Expired:
        return theme['color-danger-300'];
      case StatusEnum.Complete:
      default:
        return theme['color-primary-500'];
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={goBack}>
      <View style={[styles.header, { borderBottomColor: theme['background-basic-color-11'] }]}>
        <Image source={{ uri: category.image }} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.box}>
            <Text category="h4">{category.name}</Text>
            <CurrencyText category="h2" marginTop={8}>
              {amount}
            </CurrencyText>
          </View>
          <NavigationAction icon="dots-three-vertical" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text category="body" opacity={0.5}>
          Due: {due_date}
        </Text>
        <View style={[styles.status, { backgroundColor: getColor() }]}>
          <Text category="h6" status="white">
            {status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BillItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 16,
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
