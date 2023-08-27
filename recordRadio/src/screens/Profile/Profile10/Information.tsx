import React, {memo} from 'react';
import {ImageRequireSource} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  StyleService,
  useStyleSheet,
  Avatar,
  Icon,
  Button,
} from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {Text, HStack, VStack, IDivider} from 'components';
import {Images} from 'assets/images';

interface Props {
  user: {
    name: string;
    job: string;
    following: string;
    follower: string;
    desc: string;
    address: string;
    avatar: ImageRequireSource;
    verify: boolean;
  };
}

const Information = memo(({user}: Props) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack level="2" border={16} mh={4}>
      <HStack style={styles.contentAvatar}>
        <Avatar source={Images.avatar.avatar_01} shape="square" size="large" />
        {user.verify && (
          <VStack style={styles.icon}>
            <Icon pack="assets" name={'radio-active'} />
          </VStack>
        )}
      </HStack>
      <HStack mh={16}>
        <VStack>
          <Text category="h3" marginBottom={8}>
            {user.name}
          </Text>
          <Text category="body" status="platinum">
            {user.job}
          </Text>
        </VStack>
        <HStack gap={8}>
          <Button
            accessoryLeft={<Icon pack="assets" name="add-user" />}
            status="success"
          />
          <Button
            accessoryLeft={<Icon pack="assets" name="chat" />}
            status="primary"
          />
        </HStack>
      </HStack>
      <IDivider marginTop={20} marginBottom={16} />
      <VStack gap={16} margin={16}>
        <HStack justify="flex-start">
          <HStack gap={4} itemsCenter mr={16}>
            <Text category="h6">{user.following}</Text>
            <Text category="subhead">Following</Text>
          </HStack>
          <HStack gap={4} itemsCenter>
            <Text category="h6">{user.follower}</Text>
            <Text category="subhead">Follower</Text>
          </HStack>
        </HStack>
        <Text category="subhead" status="platinum">
          {user.desc}
        </Text>
        <HStack itemsCenter justify="flex-start">
          <Icon pack="assets" name="mappin" style={styles.mappin} />
          <Text category="subhead">{user.address}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
});

export default Information;

const themedStyles = StyleService.create({
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: 'text-white-color',
    borderRadius: 99,
    backgroundColor: 'color-primary-default',
  },
  mappin: {
    width: 16,
    height: 16,
    tintColor: 'text-warning-color',
    marginRight: 4,
  },
  contentAvatar: {
    alignSelf: 'flex-start',
    marginTop: -48,
    marginLeft: 16,
    marginBottom: 16,
  },
});
