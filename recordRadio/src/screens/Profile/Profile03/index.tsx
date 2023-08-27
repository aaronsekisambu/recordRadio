import React, { memo } from 'react';
import { FlatList } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { Avatar, Icon, StyleService, TopNavigation, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import { Images } from 'assets/images';
// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Text, VStack, HStack } from 'components';
// ----------------------------- Linear gradient -----------------------------------
import { LinearGradient } from 'expo-linear-gradient';
// ----------------------------- Utils -----------------------------------
import { keyExtractoUtil } from 'utils';

const Profile03 = memo(() => {
  const styles = useStyleSheet(themedStyles);

  const list_button = [
    {
      title: 'Notification',
      desc: 'Open all',
      icon: 'bell-ringing',
      color: '#106AF3',
    },
    {
      title: 'Gerenal Settings',
      desc: 'Setup your account',
      icon: 'gear-six',
      color: '#00CD50',
    },
    {
      title: 'Portfolios',
      desc: '13 show case',
      icon: 'bell-ringing',
      color: '#B1CEDE',
    },
    {
      title: 'Portfolios',
      desc: 'Open all',
      icon: 'suitcase',
      color: '#F6D938',
    },
    {
      title: 'Portfolios',
      desc: 'Open all',
      icon: 'suitcase',
      color: '#DCDBB8',
    },
    {
      title: 'Portfolios',
      desc: 'Open all',
      icon: 'suitcase',
      color: '#CFE1FD',
    },
  ];

  const ListHeaderComponent = () => {
    return (
      <VStack style={styles.header}>
        <VStack style={styles.avatar}>
          <Avatar size="giant" source={Images.avatar.avatar_01} />
        </VStack>
        <VStack level="2" style={styles.information}>
          <HStack justify="center" gap={4} itemsCenter>
            <Text center category="h3">
              {'Albert Flores'}
            </Text>
            <Icon pack="assets" name="radio-active" />
          </HStack>
          <Text center category="body" status="placeholder">
            {'UX/UI Designer'}
          </Text>
          <LinearGradient colors={['#CFE1FD', '#FFFDE1']} style={styles.layout}>
            <Text status="black" category="c1">
              300P
            </Text>
            <Icon pack="assets" name="brain" style={styles.iconBrain} />
          </LinearGradient>
        </VStack>
      </VStack>
    );
  };

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        appearance="control"
        accessoryLeft={<NavigationAction />}
        accessoryRight={<NavigationAction icon="gear-six" />}
      />
      <FlatList
        data={list_button}
        contentContainerStyle={styles.content}
        keyExtractor={keyExtractoUtil}
        renderItem={({ item }) => {
          return (
            <HStack level="2" padding={16} border={16} itemsCenter>
              <HStack gap={16} itemsCenter>
                <VStack style={[styles.layoutIcon, { backgroundColor: item.color }]}>
                  <Icon pack="assets" name={item.icon} style={styles.iconButton} />
                </VStack>
                <VStack gap={4}>
                  <Text category="h5">{item.title}</Text>
                  <Text category="subhead">{item.desc}</Text>
                </VStack>
              </HStack>
              <Icon pack="assets" name="caret-right" style={styles.caret} />
            </HStack>
          );
        }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={() => {
          return <VStack gap={8}></VStack>;
        }}
      />
    </Container>
  );
});

export default Profile03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 40,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    gap: 8,
  },
  information: {
    flex: 1,
    gap: 8,
    width: '100%',
    borderRadius: 16,
    paddingTop: 56,
    paddingBottom: 24,
  },
  avatar: {
    borderWidth: 2,
    borderColor: 'background-basic-color-1',
    borderRadius: 99,
    marginBottom: -40,
    zIndex: 100,
  },
  layout: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    zIndex: 100,
  },
  iconBrain: {
    width: 16,
    height: 16,
    marginLeft: 4,
    tintColor: 'text-black-color',
  },
  layoutIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  iconButton: {
    width: 28,
    height: 28,
    tintColor: 'text-basic-color',
  },
  caret: {
    width: 28,
    height: 28,
    tintColor: 'text-placeholder-color',
  },
});
