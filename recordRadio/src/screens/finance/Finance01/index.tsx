import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { useTheme, TopNavigation, ViewPager } from '@ui-kitten/components';

// ----------------------------- Components -----------------------------------
import { NavigationAction, Container, Text } from 'components';
import All from './All';
import Upcoming from './Upcoming';
import Expired from './Expired';
import Complete from './Complete';
import TabBar from './TabBar';

const Finance01 = React.memo(() => {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const refScroll = React.useRef<FlatList>(null);

  React.useEffect(() => {
    refScroll.current?.scrollToIndex({
      index: selectedIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [selectedIndex]);

  const renderTab = React.useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedIndex === index
                  ? theme['color-primary-500']
                  : theme['background-basic-color-2'],
            },
          ]}
          onPress={() => setSelectedIndex(index)}>
          <Text status={selectedIndex === index ? 'white' : 'platinum'} category="h5">
            {item}
          </Text>
        </TouchableOpacity>
      );
    },
    [selectedIndex],
  );

  return (
    <Container>
      <TopNavigation
        accessoryRight={
          <View style={styles.header}>
            <NavigationAction icon="bell-simple" marginRight={24} status="warning" />
            <NavigationAction icon="dots-three-vertical" status="warning" />
          </View>
        }
      />
      <Text category="h0" marginBottom={24} marginLeft={16}>
        Dashboard
      </Text>
      <View>
        <FlatList
          ref={refScroll}
          data={['All', 'Upcoming (12)', 'Expired', 'Complete']}
          renderItem={renderTab}
          horizontal
          keyExtractor={(item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={styles.tabView}
          contentContainerStyle={styles.contentTab}
        />
      </View>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        shouldLoadComponent={(index) => index === selectedIndex}
        style={styles.content}>
        <All />
        <Upcoming />
        <Expired />
        <Complete />
      </ViewPager>
      <TabBar />
    </Container>
  );
});

export default Finance01;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 24,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 16,
  },
  content: {
    flex: 1,
  },
  tabView: {
    marginBottom: 8,
  },
  contentTab: {
    paddingLeft: 8,
  },
});
