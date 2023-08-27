import React from 'react';
import { Container, LinearGradientText, Text } from 'components';
import { StyleSheet, FlatList } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import Segment from './Segment';
import PayoutItem from './PayoutItem';
import ThemeLogo from 'elements/App/ThemeLogo';
import { LinearGradient } from 'expo-linear-gradient';

import { IPayout } from './types';
import { data_payouts } from './data';

const Finance13 = React.memo(() => {
  const { goBack } = useNavigation();

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const renderItem = React.useCallback(({ item }: { item: IPayout }) => {
    return <PayoutItem item={item} style={styles.item} onPress={goBack} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<ThemeLogo size={24} onPress={goBack} />}
        accessoryRight={
          <LinearGradient
            colors={['#CFE1FD', '#FFFDE1']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.right}>
            <Text status="primary" category="h6">
              $130
            </Text>
          </LinearGradient>
        }
      />
      <LinearGradientText
        colors={['#CFE1FD', '#FFFDE1']}
        text="Payout"
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        textStyle={styles.text}
      />
      <Segment
        data={['Payout', 'History']}
        selectedTab={selectedIndex}
        onPress={setSelectedIndex}
        style={styles.tab}
      />
      <FlatList
        data={data_payouts || []}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={(i, idx) => `${idx}`}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <TabBar />
    </Container>
  );
});

export default Finance13;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 16,
    paddingHorizontal: 4,
    paddingBottom: 56,
  },
  item: {
    marginBottom: 4,
  },
  text: {
    fontSize: 36,
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 16,
  },
  right: {
    alignSelf: 'center',
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
