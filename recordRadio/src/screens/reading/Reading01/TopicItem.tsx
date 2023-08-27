import React from 'react';
import { Text } from 'components';
import { View, StyleSheet, ImageBackground, TouchableOpacity, ViewStyle } from 'react-native';
import { Icon } from '@ui-kitten/components';

import { LinearGradient } from 'expo-linear-gradient';

import { ITopic } from '.';

interface TopicItemProps {
  style?: ViewStyle;
  item: ITopic;
  selectedItem?: boolean;
  onPress?(): void;
}

const TopicItem: React.FC<TopicItemProps> = ({ item, selectedItem, style, onPress }) => {
  const { image, name } = item;

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, style]} onPress={onPress}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <LinearGradient
          colors={['#2A3947', 'rgba(42, 57, 71, 0)']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.overlay}
        />
        <View style={styles.content}>
          <View style={styles.checkView}>
            {!!selectedItem && <Icon pack="assets" name="checked-circle" style={styles.icon} />}
          </View>
          <Text category="subhead">{name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TopicItem;

const styles = StyleSheet.create({
  container: {
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    height: '50%',
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 8,
    justifyContent: 'space-between',
  },
  checkView: {
    width: 20,
    height: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 6,
    marginLeft: 6,
  },
});
