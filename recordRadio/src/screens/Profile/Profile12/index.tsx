import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  Avatar,
  Button,
  Icon,
  StyleService,
  TopNavigation,
  useStyleSheet,
} from '@ui-kitten/components';

// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Components -----------------------------------
import { Container, Content, HStack, NavigationAction, Text, VStack } from 'components';
// ----------------------------- Assets -----------------------------------
import { Images } from 'assets/images';
import { useNavigation } from '@react-navigation/native';
import ProgressCard from './ProgressCard';

const Profile12 = memo(() => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const DATA = [
    {
      icon: 'bell-ringing',
      name: 'Notification',
      desc: 'Open all',
      color: '#106AF3',
    },
    { icon: 'text', name: 'Language', desc: 'English', color: '#00CD50' },
    { icon: 'moon', name: 'Darkmode', desc: 'On', color: '#00CD50' },
    { icon: 'money', name: 'Currency', desc: 'USD', color: '#00CD50' },
  ];
  const example = [
    {
      title: 'Travel anywhre',
      symbol: '🏠',
      members: [Images.avatar.avatar_02, Images.avatar.avatar_03, Images.avatar.avatar_04],
      bg: '#106AF3',
      date: '64 day left',
      amount: 1246,
      goal: 2000,
    },
    {
      title: 'Travel anywhre',
      symbol: '🏠',
      members: [Images.avatar.avatar_05, Images.avatar.avatar_06, Images.avatar.avatar_07],
      bg: '#00CD50',
      date: '64 day left',
      amount: 1246,
      goal: 2000,
    },
  ];
  return (
    <Container style={styles.container}>
      <VStack pt={top + 8} style={styles.header}>
        <TopNavigation
          appearance="control"
          title={'Profile Settings'}
          alignment="center"
          accessoryLeft={<NavigationAction />}
        />
      </VStack>
      <Content contentContainerStyle={styles.content}>
        <VStack itemsCenter style={styles.topContent}>
          <Avatar
            source={Images.avatar.avatar_01}
            //@ts-ignore
            style={styles.avatar}
            shape="rounded"
          />
          <Text category="h3" marginBottom={10}>
            Philip Schmidt
          </Text>
          <Text category="body" style={{ color: '#E8E9EB' }} marginBottom={16}>
            Total saving: $12,680.99
          </Text>
          <Button
            children={'Upgrade Premium'}
            accessoryLeft={<Icon pack="assets" name="crown" />}
          />
        </VStack>
        <VStack mt={24}>
          <Text category="h4" marginBottom={16} marginLeft={16}>
            Your Goals
          </Text>
          <Content horizontal contentContainerStyle={styles.contentProgress}>
            {example.map((example, index) => {
              return <ProgressCard data={example} key={index} />;
            })}
          </Content>
        </VStack>
        <VStack mh={16} gap={8} mt={16}>
          {DATA.map((item, i) => {
            return (
              <TouchableOpacity style={styles.button} key={i}>
                <HStack itemsCenter gap={16}>
                  <VStack style={{ backgroundColor: item.color }} padding={10} border={15}>
                    {item.icon && <Icon pack="assets" name={item.icon} style={styles.icon} />}
                  </VStack>
                  <VStack gap={4}>
                    <Text category="h5">{item.name}</Text>
                    <Text category="subhead" style={{ color: '#B8BDC2' }}>
                      {item.desc}
                    </Text>
                  </VStack>
                </HStack>
                <Icon pack="assets" name={'caret-right'} style={styles.caret} />
              </TouchableOpacity>
            );
          })}
        </VStack>
      </Content>
      <Text uppercase category="h6" center style={{ color: '#5A6570' }} onPress={goBack}>
        Log out
      </Text>
    </Container>
  );
});

export default Profile12;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    backgroundColor: '#C0A975',
  },
  topContent: {
    backgroundColor: '#C0A975',
    paddingBottom: 32,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    paddingBottom: 40,
  },
  avatar: {
    width: 96,
    height: 96,
    marginVertical: 16,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'background-basic-color-2',
    borderRadius: 16,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: 'text-basic-color',
  },
  caret: {
    width: 28,
    height: 28,
    tintColor: 'text-platinum-color',
  },
  contentProgress: {
    marginLeft: 16,
  },
});
