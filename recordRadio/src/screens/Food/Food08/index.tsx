import React, { memo } from 'react';
import { View, Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, useTheme, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Text, VStack } from 'components';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import CustomPin from './CustomPin';
import StartPin from './StartPin';
import FooterTracking from './FooterTracking';
import { Images } from 'assets/images';
import SwipeableToStart from './SwipeableToStart';

const Food08 = memo(() => {
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const refMap = React.useRef<MapView | null>(null);

  const startLocation = { latitude: 37.7733358, longitude: -122.4161628 };
  const myLocation = { latitude: 37.7583358, longitude: -122.4262328 };
  const destination = {
    latitude: 37.7727554036838,
    longitude: -122.40456238389014,
  };
  const endLocation = { latitude: 37.7583358, longitude: -122.4425687 };

  return (
    <Container style={styles.container}>
      <TopNavigation appearance={'control'} accessoryLeft={<NavigationAction />} />
      <MapView
        ref={refMap}
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        region={{
          latitude: 37.7583358,
          longitude: -122.4262328,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0531,
        }}
        onPress={(e) => console.log(e.nativeEvent.coordinate)}
        customMapStyle={customMapStyle}>
        <Polyline
          coordinates={[endLocation, myLocation, startLocation, destination]}
          strokeColor="#106AF3"
          strokeWidth={2}
          lineDashPattern={[10, 40, 70]}
        />
        <StartPin coordinate={endLocation} />
        <CustomPin icon={<Image source={Images.food.store} />} coordinate={destination} />
        <CustomPin
          icon={<Image source={Images.food.moto} />}
          coordinate={myLocation}
          size="medium"
        />
      </MapView>
      <VStack style={{ flex: 1 }}>
        <VStack mh={24} pv={16} ph={24} gap={4}>
          <View style={styles.notification} />
          <Text category="h4">Shipper pick up your food.</Text>
          <Text category="subhead" style={{ color: theme['color-basic-500'] }}>
            0901-776-058
          </Text>
          <Text category="subhead" style={{ color: theme['color-basic-500'] }}>
            Your order is already on its way to you!
          </Text>
        </VStack>
        <VStack style={[styles.bottom, { marginBottom: bottom + 4 }]} border={24} mh={4}>
          <FooterTracking shipper={SHIPPER} distance={'10'} time={'15-20 minitues'} />
          <SwipeableToStart />
        </VStack>
      </VStack>
    </Container>
  );
});

export default Food08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  mapView: {
    position: 'absolute',
    top: -0,
    left: 0,
    right: 0,
    zIndex: -10,
    bottom: 0,
  },
  shop: {
    width: 48,
    height: 48,
    borderRadius: 99,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  more: {},
  notification: {
    backgroundColor: '#2A3947',
    opacity: 0.75,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
  },
  bottom: {
    borderRadius: 24,
    marginBottom: 4,
    backgroundColor: '#00CD50',
    padding: 12,
  },
});
const SHIPPER = {
  id: 0,
  name: 'Le Thanh Hai',
  typeShipper: 'Food-Shipper  ⭐️️10',
  avatar: Images.avatar.avatar_02,
};
export const customMapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#1F2933',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: 'rgba(40, 67, 95, 1)',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1F2933',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: 'rgba(40, 67, 95, 1)',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: 'rgba(40, 67, 95, 1)',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#1F2933',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#1F2933',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#29394A',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#29394A',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#29394A',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#29394A',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#29394A',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#29394A',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#29394A',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#28435F',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#28435F',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#28435F',
      },
    ],
  },
];
