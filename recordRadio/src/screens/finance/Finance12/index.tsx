import React from 'react';
import { Container, CurrencyText, LinearGradientText, Text } from 'components';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme, TopNavigation, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import HistoryItem from './HistoryItem';
import ThemeLogo from 'elements/App/ThemeLogo';

import { IHistory } from './types';
import { data_histories } from './data';

const Finance12 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const renderItem = React.useCallback(({ item }: { item: IHistory }) => {
    return <HistoryItem item={item} style={styles.item} onPress={goBack} />;
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <Layout level="primary" style={styles.box}>
          <Text status="white" opacity={0.5} center>
            Balance
          </Text>
          <CurrencyText category="h2" status="white" center>
            13579
          </CurrencyText>
          <View style={styles.bottom}>
            <View style={[styles.box1, { borderRightColor: `${theme['color-basic-1100']}10` }]}>
              <Text category="body" status="white" opacity={0.5}>
                Today
              </Text>
              <CurrencyText category="h4" status="white">
                79
              </CurrencyText>
            </View>
            <View style={styles.box2}>
              <Text category="body" status="white" opacity={0.5}>
                This weeks
              </Text>
              <CurrencyText category="h4" status="white">
                286
              </CurrencyText>
            </View>
          </View>
        </Layout>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="History"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.text}
        />
      </View>
    );
  }, []);

  return (
    <Container>
      <TopNavigation accessoryLeft={<ThemeLogo size={24} onPress={goBack} />} />
      <FlatList
        data={data_histories || []}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={(i, idx) => `${idx}`}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <TabBar />
    </Container>
  );
});

export default Finance12;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 8,
    paddingHorizontal: 4,
    paddingBottom: 56,
  },
  item: {
    marginBottom: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 12,
    marginTop: 32,
    marginBottom: 16,
  },
  box: {
    padding: 24,
    borderRadius: 16,
  },
  bottom: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  box2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
