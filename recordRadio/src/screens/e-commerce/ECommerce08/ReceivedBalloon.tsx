import React from 'react';
import { Text } from 'components';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme, Layout } from '@ui-kitten/components';

import { IMessage } from './SentBalloon';

const ReceivedBalloon = React.memo(({ text, shop }: IMessage) => {
  const theme = useTheme();

  return (
    <Layout level="4" style={styles.container}>
      {text && <Text category="body">{text}</Text>}
      {shop && (
        <TouchableOpacity
          style={[styles.shop, { backgroundColor: theme['background-basic-color-3'] }]}>
          <Text category="subhead">Check shop</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
});

export default ReceivedBalloon;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginTop: 16,
    marginRight: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    padding: 16,
  },
  shop: {
    alignSelf: 'flex-start',
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
});
