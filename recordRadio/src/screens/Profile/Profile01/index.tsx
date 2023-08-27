import React from 'react';
// ----------------------------- UI kitten -----------------------------------
import { Icon, Avatar, Button, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- @Assets -----------------------------------
import { Images } from 'assets/images';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components & Elements -----------------------------------
import { Container, Content, HStack, Text, VStack } from 'components';
import { LinearGradient } from 'expo-linear-gradient';
import OptionProfile from 'elements/Profile/OptionProfile';
import BottomBarProfile from 'elements/Profile/BottomBarProfile';

const Profile01 = () => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <LinearGradient colors={['#CFE1FD', '#FFFDE1']} style={[styles.layout, { top: top + 24 }]}>
        <Text status="black" category="c1">
          300P
        </Text>
        <Icon pack="assets" name="brain" style={styles.iconBrain} />
      </LinearGradient>
      <Content contentContainerStyle={[styles.contentContainer, { paddingTop: top + 24 }]}>
        <VStack>
          <VStack rowGap={8} itemsCenter>
            <Avatar source={Images.avatar.avatar_01} size="giant" shape="round" />
            <Text center category="h3">
              Albert Flores
            </Text>
            <Text center category="body" status="placeholder">
              UI/UX Designer
            </Text>
            <Button
              onPress={goBack}
              children="Go Pro Account"
              accessoryLeft={<Icon pack="assets" name="cat" />}
              style={styles.button}
            />
          </VStack>
          <VStack mt={32} rowGap={8}>
            <OptionProfile title="Notification" desc={'Open all'} icon="bell-ringing" />
            <OptionProfile title="Gerenal Settings" desc={'Setup yout account'} icon="gear-six" />
            <OptionProfile title="Portfolios" desc={'13 show case'} icon="suitcase" />
          </VStack>
        </VStack>
        <HStack style={styles.bottom} mh={16} mb={8}>
          <VStack rowGap={16}>
            <Text category="h6" status="platinum">
              Help Center
            </Text>
            <Text category="h6" status="platinum">
              Logout
            </Text>
          </VStack>
          <Text category="h6" status="platinum">
            Feb 2021
          </Text>
        </HStack>
      </Content>
      <BottomBarProfile withLogo />
    </Container>
  );
};

export default Profile01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  layout: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    zIndex: 100,
  },
  iconBrain: {
    width: 16,
    height: 16,
    marginLeft: 4,
    tintColor: 'text-black-color',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  contentContainer: {
    paddingTop: 40,
    paddingHorizontal: 16,
    flexGrow: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  bottom: {
    alignItems: 'flex-end',
  },
  button: {
    alignSelf: 'center',
  },
});
