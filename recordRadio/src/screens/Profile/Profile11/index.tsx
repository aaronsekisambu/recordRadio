import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Icon, TopNavigation } from '@ui-kitten/components';
import { NavigationAction, Container, Text, Content } from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useLayout } from 'hooks';

import TabBar from './TabBar';
import FeatureItem from './FeatureItem';

import { IFeature } from './types';
import { Images } from 'assets/images';
import { RootStackParamList } from 'types/navigation-types';
import { LinearGradient } from 'expo-linear-gradient';

const UserProfile = React.memo(() => {
  const { top, bottom } = useLayout();
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  const features: IFeature[] = React.useMemo(
    () => [
      {
        title: 'Notification',
        description: 'Open all',
        icon: 'bell-ringing',
        color: '#106AF3',
        onPress: goBack,
      },
      {
        title: 'General Settings',
        description: 'Setup your account',
        icon: 'gear-six',
        color: '#00CD50',
        onPress: goBack,
      },
      {
        title: 'How to work',
        icon: 'clipboard',
        color: '#106AF3',
        onPress: goBack,
      },
      {
        title: 'Privacy Policy',
        icon: 'lock-open',
        color: '#00CD50',
        onPress: goBack,
      },
      {
        title: 'Terms & Conditions',
        icon: 'book',
        color: '#00CD50',
        onPress: goBack,
      },
    ],
    [],
  );

  return (
    <Container useSafeArea={false}>
      <View style={{ paddingTop: top }}>
        <TopNavigation
          title="Profile Settings"
          alignment="center"
          accessoryLeft={<NavigationAction />}
        />
      </View>
      <Content
        contentContainerStyle={[styles.contentContainerStyle, { paddingBottom: bottom + 49 + 16 }]}>
        <View style={styles.header}>
          <Avatar style={styles.avatar} source={Images.avatar.avatar_01} />
          <View style={styles.content}>
            <View style={styles.row}>
              <Text center category="h3" marginRight={4}>
                Albert Flores
              </Text>
              <Icon pack="assets" name="radio-active" style={styles.icon16} />
            </View>
            <LinearGradient colors={['#CFE1FD', '#FFFDE1']} style={styles.layout}>
              <Text status="black" category="c1">
                3.000P
              </Text>
            </LinearGradient>
          </View>
        </View>
        <Text category="h4" marginTop={32} marginBottom={16} uppercase>
          🔥 General
        </Text>
        <FeatureItem item={features[0]} marginBottom={4} />
        <FeatureItem item={features[1]} />
        <Text category="h4" marginTop={32} marginBottom={16} uppercase>
          🔥 Support
        </Text>
        <FeatureItem item={features[2]} marginBottom={4} />
        <FeatureItem item={features[3]} marginBottom={4} />
        <FeatureItem item={features[4]} marginBottom={32} />
        <Button
          status="secondary"
          children="Sign Out"
          onPress={goBack}
          accessoryLeft={() => <Icon pack="assets" name="sign-out" style={styles.iconLogout} />}
        />
        <Button
          children={() => (
            <Text category="h5" status="danger">
              Delete Account
            </Text>
          )}
          onPress={goBack}
          style={styles.buttonDelete}
        />
        <Text category="c1" marginTop={8} status="platinum" center>
          Version 202303
        </Text>
      </Content>
      <TabBar />
    </Container>
  );
});

export default UserProfile;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
  },
  content: {
    marginLeft: 16,
  },
  layout: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    marginTop: 8,
  },
  layoutIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  icon16: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  iconLogout: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  buttonDelete: {
    marginTop: 4,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonPremium: {
    marginTop: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
});
