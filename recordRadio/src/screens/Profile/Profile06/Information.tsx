import React from 'react';
import {ImageRequireSource} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {useStyleSheet, StyleService, Avatar, Icon} from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {Text, VStack} from 'components';

// ----------------------------- @Types -----------------------------------
interface IInformationProps {
  name: string;
  job: string;
  verify: boolean;
  avatar: ImageRequireSource;
}

const Information = ({data}: {data: IInformationProps}) => {
  const styles = useStyleSheet(themedStyles);
  const {name, job, verify, avatar} = data;
  return (
    <VStack style={styles.container}>
      <VStack alignSelfCenter>
        <Avatar source={avatar} size="giant" />
        {verify && (
          <Icon pack="assets" name="radio-active" style={styles.icon} />
        )}
      </VStack>
      <VStack gap={8} itemsCenter>
        <Text category="h3">{name}</Text>
        <Text category="body" status="placeholder">
          {job}
        </Text>
      </VStack>
    </VStack>
  );
};

export default Information;

const themedStyles = StyleService.create({
  container: {
    gap: 16,
    overflow: 'hidden',
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
});
