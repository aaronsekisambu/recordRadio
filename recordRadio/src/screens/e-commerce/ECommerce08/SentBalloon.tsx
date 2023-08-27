import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'components';
import { Layout } from '@ui-kitten/components';
import { useLayout } from 'hooks';

export interface User {
  _id: string | number;
  name: string;
  avatar: string;
}

export interface IMessage {
  _id: string | number;
  text?: string;
  createdAt?: Date | string | number;
  user?: User;
  images?: string[];
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  shop?: string;
}

const SentBalloon = React.memo(({ text }: IMessage) => {
  const { width } = useLayout();

  return (
    <Layout level="success" style={[styles.container, { maxWidth: width - 100 }]}>
      <Text status="white" category="body">
        {text}
      </Text>
    </Layout>
  );
});

export default SentBalloon;

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    padding: 16,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
