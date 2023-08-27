import React from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {Text, HStack, VStack} from 'components';

const Information = ({
  data,
}: {
  data: {
    follower: string;
    project: string;
    client: string;
    name: string;
    job: string;
    verify: boolean;
  };
}) => {
  const styles = useStyleSheet(themedStyles);

  const {follower, project, name, job, client, verify} = data;
  return (
    <VStack mt={16} gap={8}>
      <HStack itemsCenter justify="center" gap={4}>
        <Text center category="h3" status="basic">
          {name}
        </Text>
        {verify && <Icon pack="assets" name="radio-active" />}
      </HStack>
      <Text center category="body" status="placeholder">
        {job}
      </Text>
      <HStack level="2" border={16} pv={24} ph={40} mh={8}>
        <VStack gap={4}>
          <Text category="h3" uppercase>
            {follower}
          </Text>
          <Text category="subhead" status="placeholder">
            {'Follower'}
          </Text>
        </VStack>
        <VStack gap={4}>
          <Text category="h3" uppercase>
            {client}
          </Text>
          <Text category="subhead" status="placeholder">
            {'Client'}
          </Text>
        </VStack>
        <VStack gap={4}>
          <Text category="h3" uppercase>
            {project}
          </Text>
          <Text category="subhead" status="placeholder">
            {'Project'}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Information;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
