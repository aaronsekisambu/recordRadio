import * as React from 'react';
// ----------------------------- UI kitten -----------------------------------
import {Layout, Avatar, Icon, Button, StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {NavigationAction, Text, HStack, VStack, IDivider} from 'components';

const Information = ({
  data,
}: {
  data: {
    name: string;
    job: string;
    avatar: any;
    verify: boolean;
    following: string;
    follower: string;
  };
}) => {
  const {name, job, avatar, verify, follower, following} = data;
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.container}>
      <HStack itemsCenter>
        <VStack gap={8}>
          <Text category="h3">{name}</Text>
          <Text category="body">{job}</Text>
        </VStack>
        <VStack>
          <Avatar source={avatar} size="giant" />
          {verify && (
            <Icon pack="assets" name="radio-active" style={styles.verify} />
          )}
        </VStack>
      </HStack>
      <IDivider />
      <HStack itemsCenter>
        <HStack itemsCenter gap={4}>
          <Text category="h4" uppercase>
            {following}
          </Text>
          <Text category="subhead" status="placeholder">
            Following
          </Text>
        </HStack>
        <HStack itemsCenter gap={4}>
          <Text category="h4" uppercase>
            {follower}
          </Text>
          <Text category="subhead" status="placeholder">
            Follower
          </Text>
        </HStack>
      </HStack>
      <HStack gap={16}>
        <Button
          style={styles.button}
          children={'Follow'}
          status="warning"
          accessoryLeft={<Icon pack="assets" name="add-user" />}
        />
        <NavigationAction icon="suitcase" size="giant" borderRadius={16} borderWidth={1} />
      </HStack>
    </Layout>
  );
};

export default Information;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    borderRadius: 16,
    backgroundColor: 'color-primary-default',
  },
  verify: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: 'text-white-color',
  },
  button: {
    flex: 1,
  },
});
