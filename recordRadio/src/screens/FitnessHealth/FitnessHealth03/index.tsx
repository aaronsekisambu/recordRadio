import * as React from "react";
import { Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {StyleService,useStyleSheet} from "@ui-kitten/components";
// ----------------------------- Assets -----------------------------------
import { Images } from "assets/images";
// ----------------------------- Hook -----------------------------------
import { useLayout, useToggle } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";
// ----------------------------- Components -----------------------------------
import { Container, HStack, NavigationAction, Text, VStack } from "components";
// ----------------------------- Reanimated 2 -----------------------------------
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";

const FitnessHealth01 = () => {
  const { top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [isPlay, toggle] = useToggle(true);
  const refMap = React.useRef<MapView | null>(null);

  const destination1 = {
    latitude: 37.762568743094995,
    longitude: -122.43482306599616,
  };
  const destination2 = {
    latitude: 37.774555382642525,
    longitude: -122.41926927119495,
  };
  const destination3 = {
    latitude: 37.78535672087544,
    longitude: -122.42115654051304,
  };
  const destination4 = {
    latitude: 37.78324803866675,
    longitude: -122.43911795318127,
  };
  const destination5 = {
    latitude: 37.770080000633186,
    longitude: -122.43664529174568,
  };
  const destination6 = {
    latitude: 37.768742395322974,
    longitude: -122.43553888052703,
  };
  const destination7 = {
    latitude: 37.762568743094995,
    longitude: -122.43508324027061,
  };

  return (
    <Container style={styles.container}>
    <NavigationAction style={[styles.topNavigation,{top:top+12}]} />
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
        customMapStyle={customMapStyle}
      >
        <Polyline
          coordinates={[
            destination1,
            destination2,
            destination3,
            destination4,
            destination5,
            destination6,
            destination7,
          ]}
          strokeColor="#106AF3"
          strokeWidth={3}
        />
        <Marker
          coordinate={{
            latitude: destination3.latitude - 0.0024,
            longitude: destination3.longitude,
          }}
        >
          <VStack style={styles.marker}>
            <Image source={Images.health.runner} />
          </VStack>
        </Marker>
        <Marker
          coordinate={{
            latitude: destination1.latitude - 0.0024,
            longitude: destination1.longitude,
          }}
        >
          <VStack style={styles.markerStart}>
            <Text>S</Text>
          </VStack>
        </Marker>
      </MapView>
      <VStack level="2" style={styles.bottomView}>
        <HStack mt={-40} itemsCenter ph={68}>
          <VStack>
            <Image source={Images.health.camera} />
          </VStack>
          <VStack onPress={toggle}>
            <Image source={isPlay ? Images.health.pause : Images.health.play} />
          </VStack>
          <VStack>
            <Image source={Images.health.music} />
          </VStack>
        </HStack>
        <HStack wrap ph={40} style={{ paddingBottom: bottom + 16 }}>
          <VStack style={[styles.information]} mb={24}>
            <Text category="h3">5.68</Text>
            <Text category="body">Km</Text>
          </VStack>
          <VStack style={styles.information}>
            <Text category="h3">3.289</Text>
            <Text category="body">Step</Text>
          </VStack>
          <VStack style={styles.information}>
            <Text category="h3">1.289</Text>
            <Text category="body">Calo</Text>
          </VStack>
          <VStack style={styles.information}>
            <Text category="h3">13:25</Text>
            <Text category="body">Mins</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};
export default FitnessHealth01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 0,
  },
  topNavigation: {
    position:"absolute",
    left: 24,
  },
  content: {
    marginTop: 12,
  },
  mapView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -10,
    bottom: 0,
  },
  marker: {
    borderRadius: 16,
    backgroundColor: "color-success-default",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  markerStart: {
    width: 32,
    height: 32,
    backgroundColor: "color-primary-default",
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  percent: {
    borderRadius: 16,
    backgroundColor: "color-primary-default",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  day: {
    borderRadius: 99,
    borderColor: "#5A6570",
    borderWidth: 1,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
  bgImage: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: "color-warning-default",
  },
  bottomView: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  information: {
    width: "40%",
  },
});
export const customMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1F2933",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        // color: "rgba(40, 67, 95, 1)",
        color:"transparent",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1F293300",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "rgba(40, 67, 95, 1)",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "rgba(40, 67, 95, 1)",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#1F2933",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#1F2933",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#29394A",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#29394A",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#29394A",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#29394A",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#29394A",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#29394A",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#29394A",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#28435F",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#28435F",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#28435F",
      },
    ],
  },
];

const DATA = [
  { time: "Monday", finished: true },
  { time: "Tueday", finished: false },
  { time: "Wednesday" },
  { time: "Thursday" },
  { time: "Friday" },
  { time: "Saturday" },
  { time: "Sunday" },
];
