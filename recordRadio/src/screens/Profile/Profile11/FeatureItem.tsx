import React from 'react';
import { Text } from 'components';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, Icon, Toggle } from '@ui-kitten/components';

import { IFeature } from './types';

interface FeatureItemProps {
  style?: ViewStyle;
  marginBottom?: number;
  item: IFeature;
}

const FeatureItem = React.memo(({ item, marginBottom, style }: FeatureItemProps) => {
  const theme = useTheme();
  const { icon, color, title, description, toggle, isArrow = !toggle && true, onPress } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        { backgroundColor: theme['background-basic-color-2'], marginBottom },
        style,
      ]}
      onPress={onPress}>
      <View style={[styles.iconView, { backgroundColor: color }]}>
        <Icon
          pack="assets"
          name={icon}
          style={[styles.icon28, { tintColor: theme['color-basic-1100'] }]}
        />
      </View>
      <View style={styles.content}>
        <Text status="basic" category="h5">
          {title}
        </Text>
        {!!description && (
          <Text status={'placeholder'} category={'p2'} marginTop={3}>
            {description}
          </Text>
        )}
      </View>
      {!!isArrow && (
        <Icon
          pack="assets"
          name="caret-right"
          style={[styles.icon28, { tintColor: theme['text-platinum-color'] }]}
        />
      )}
      {!!toggle && <Toggle {...toggle} />}
    </TouchableOpacity>
  );
});

export default FeatureItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 48,
    height: 48,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  icon: {
    width: 16,
    height: 16,
  },
  icon28: {
    width: 28,
    height: 28,
  },
});
