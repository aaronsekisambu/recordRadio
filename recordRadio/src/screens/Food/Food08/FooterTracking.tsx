import React, { memo } from 'react';
import { View, ImageRequireSource } from 'react-native';
import { useTheme, StyleService, useStyleSheet, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import useLayout from 'hooks/useLayout';
import Text from 'components/Text';
import NavigationAction from 'components/NavigationAction';

interface DataShipperProps {
  id: number;
  name: string;
  typeShipper: string;
  avatar: ImageRequireSource;
}
interface FooterTrackingProps {
  shipper: DataShipperProps;
  distance: string;
  time: string;
}

const FooterTracking = memo(({ shipper, distance, time }: FooterTrackingProps) => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const WIDTH = `${width}`;
  const HEIGHT = `${height}`;
  return (
    <View style={styles.container}>
      <Avatar
        source={shipper.avatar}
        /* @ts-ignore */
        style={styles.avatar}
      />
      <View style={styles.title}>
        <View>
          <Text status={'white'} category="h3">
            {shipper.name}
          </Text>
          <Text category="subhead">{shipper.typeShipper}</Text>
        </View>
        <NavigationAction icon='message' status='warning-fill' borderRadius={16}/>
      </View>
      <View style={styles.information}>
        <Text>🛵 {distance}kms</Text>
        <Text>⏰ {time}</Text>
      </View>
    </View>
  );
});

export default FooterTracking;

const themedStyles = StyleService.create({
  container: {
    marginBottom: 32,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginBottom: 20,
  },
  avatar: {
    marginTop: -40,
    marginBottom: 8,
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
});
