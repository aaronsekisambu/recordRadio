import React, {memo} from 'react';
import {ImageRequireSource} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {Layout, Icon, Avatar, StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {Text, VStack, HStack, Content} from 'components';

interface Props {
  data: ImageRequireSource[];
}

const FriendList = memo(({data}: Props) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack level="2" mh={16} border={16} padding={24} gap={24}>
      <HStack>
        <HStack justify="flex-start">
          <Text category="h4">Friends</Text>
          <Layout style={styles.notificationLayout}>
            <Text status="black" category="h6" marginHorizontal={12}>
              {data.length}
            </Text>
          </Layout>
        </HStack>
        <Icon pack="assets" name="arrow-right" style={styles.icon} />
      </HStack>
      <Content horizontal>
        {data.map((item, i) => {
          // @ts-ignore
          return <Avatar key={i} source={item} style={styles.avatar} />;
        })}
      </Content>
    </VStack>
  );
});

export default FriendList;

const themedStyles = StyleService.create({
  notificationLayout: {
    backgroundColor: 'color-warning-default',
    marginHorizontal: 12,
    borderRadius: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});
