import React from 'react';
import {ImageRequireSource} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet, Avatar, Button, Icon} from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {Text, VStack, HStack} from 'components';

interface IInformationProps {
  name: string;
  job: string;
  follower: string;
  project: string;
  avatar: ImageRequireSource;
}

const Information = ({
  name,
  job,
  follower,
  project,
  avatar,
}: IInformationProps) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack style={styles.container} mh={16}>
      <HStack columnGap={16} justify="flex-start">
        <Avatar source={avatar} size="medium" />
        <VStack rowGap={8}>
          <Text category="h3">{name}</Text>
          <Text category="body" status="placeholder">
            {job}
          </Text>
        </VStack>
      </HStack>
      <HStack mt={24} mb={16} level="2" ph={40} pv={18} border={16}>
        <VStack>
          <Text center category="h2">{follower}</Text>
          <Text center category="subhead" status='placeholder'>Follower</Text>
        </VStack>
        <VStack>
          <Text center category="h2">{project}</Text>
          <Text center category="subhead" status='placeholder'>Project</Text>
        </VStack>
      </HStack>
      <HStack columnGap={8}>
        <Button style={styles.button} appearance='outline' status='warning' children={'Follow'} accessoryLeft={<Icon pack='assets' name='briefcase'/>}/>
        <Button style={styles.button} children={'Hire Me'} accessoryLeft={<Icon pack='assets' name='briefcase'/>}/>
      </HStack>
    </VStack>
  );
};

export default Information;

const themedStyles = StyleService.create({
  container: {
    marginHorizontal: 16,
  },
  button:{
    flex:1,
  }
});
