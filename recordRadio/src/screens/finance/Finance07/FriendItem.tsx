import React from 'react';
import { StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Text } from 'components';
import { IFriend } from './types';
import { Avatar, useTheme } from '@ui-kitten/components';

interface FriendItemProps {
  style?: ViewStyle;
  item: IFriend;
  onPress?(): void;
}

const FriendItem: React.FC<FriendItemProps> = ({ style, item, onPress }) => {
  const theme = useTheme();
  const { avatar, name, time } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={onPress}>
      <Avatar source={{ uri: avatar }} style={styles.avatar} />
      <Text center category="h5" marginTop={16}>
        {name}
      </Text>
      <Text category="subhead" status="placeholder" center marginTop={8}>
        {time}
      </Text>
    </TouchableOpacity>
  );
};

export default FriendItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderRadius: 16,
    width: 144,
    paddingHorizontal: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    alignSelf: 'center',
  },
});
