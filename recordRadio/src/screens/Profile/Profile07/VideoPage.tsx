import React, {memo} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
  Icon,
} from '@ui-kitten/components';

// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';

// ----------------------------- Components -----------------------------------
import {
  NavigationAction,
  Container,
  Content,
  Text,
  VStack,
  HStack,
} from 'components';
import Carousel from 'react-native-reanimated-carousel';
import {Images} from 'assets/images';

const VideoPage = () => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Content horizontal style={styles.container}>
      <TouchableOpacity style={styles.buttonAdd}>
        <VStack style={styles.layoutIcon}>
          <Icon pack="assets" name="plus" style={styles.icon} />
        </VStack>
        <Text category="body" status="placeholder">
          Add new
        </Text>
      </TouchableOpacity>
      {data.map((item, i) => {
        return (
          <VStack border={16} key={i} mr={8}>
            <Image
              source={item.source}
              //@ts-ignore
              style={styles.image}
              borderRadius={16}
            />
          </VStack>
        );
      })}
    </Content>
  );
};

export default VideoPage;

const themedStyles = StyleService.create({
  container: {},
  image: {
    width: 135,
    height: 240,
  },
  buttonAdd: {
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    width: 135,
    borderRadius: 16,
    borderStyle: 'dashed',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'text-white-color',
  },
  layoutIcon: {
    padding: 4,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CD50',
  },
});
const data = [
  {source: Images.profile.image12},
  {source: Images.profile.image11},
  {source: Images.profile.image08},
  {source: Images.profile.image07},
];
