import * as React from 'react';
import { Alert, Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Avatar, Icon, Layout } from '@ui-kitten/components';
import HomeFood01 from './HomeFood01';
import { useLayout } from 'hooks';
import { Images } from 'assets/images';

const Screen = () => {
  return <Layout style={styles.screen} />;
};

export default function Food01() {
  const { bottom, width } = useLayout();
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = 'house';

    switch (routeName) {
      case 'title1':
        icon = 'house';
        break;
      case 'title2':
        icon = 'clipboard';
        break;
      case 'title3':
        icon = 'plus';
        break;
      case 'title4':
        icon = 'shopping-cart';
        break;
      case 'title5':
        icon = 'user';
        break;
    }
    if (routeName == 'title5') {
      return <Avatar source={Images.avatar.avatar_01} style={styles.img} />;
    } else {
      return (
        <Icon
          style={[styles.img, { tintColor: routeName === selectedTab ? '#F6D938' : '#889098' }]}
          name={icon}
        />
      );
    }
  };
  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: {
    routeName: string;
    selectedTab: string;
    navigate: (selectedTab: string) => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
        activeOpacity={0.7}>
        {_renderIcon(routeName, selectedTab)}
        {routeName !== 'title5' && routeName === selectedTab && <View style={[styles.dot]} />}
      </TouchableOpacity>
    );
  };

  return (
    <Layout level="1" style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        type="DOWN"
        height={55}
        width={width - 8}
        circleWidth={52}
        bgColor="#2A3947"
        initialRouteName="title1"
        borderTopLeftRight
        screenOptions={{ headerShown: false }}
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Click Action')}>
              <Icon name={'plus'} style={{ tintColor: '#F6D938' }} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen name="title1" position="LEFT" component={() => <HomeFood01 />} />
        <CurvedBottomBar.Screen name="title2" component={() => <Screen />} position="LEFT" />
        <CurvedBottomBar.Screen name="title3" component={() => <Screen />} position="CENTER" />
        <CurvedBottomBar.Screen name="title4" component={() => <Screen />} position="RIGHT" />
        <CurvedBottomBar.Screen name="title5" component={() => <Screen />} position="RIGHT" />
      </CurvedBottomBar.Navigator>
      <View
        style={{
          height: bottom,
          width: width - 8,
          backgroundColor: '#2A3947',
          alignSelf: 'center',
        }}
      />
    </Layout>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#106AF3',
    bottom: 30,
    borderWidth: 2,
    borderColor: '#122332',
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
  },
  img: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: '#F6D938',
    borderRadius: 99,
    position: 'absolute',
    bottom: 10,
  },
});
