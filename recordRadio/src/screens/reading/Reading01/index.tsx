import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Container, LinearGradientText, Text } from 'components';
import { Button, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import TopicItem from './TopicItem';
import TopicSelected from './TopicSelected';

const Reading01 = React.memo(() => {
  const { bottom, width } = useLayout();
  const { goBack } = useNavigation();

  const list = [data[0], data[2], data[3], data[4], data[8]];

  const [selectedItem, setSelectedItem] = React.useState<ITopic[]>(list);

  const handleTopicSelection = (item: ITopic) => {
    const itemIndex = selectedItem.findIndex((i) => i.id === item.id);
    if (itemIndex === -1) {
      setSelectedItem([...selectedItem, item]);
    } else {
      const updatedSelectedItems = [...selectedItem];
      updatedSelectedItems.splice(itemIndex, 1);
      setSelectedItem(updatedSelectedItems);
    }
  };

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Personalize your feed"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          textStyle={styles.titleText}
        />
        <Text category="body" status="placeholder" marginTop={4} marginLeft={12}>
          Select 5 or more topic
        </Text>
        <View style={styles.row}>
          {selectedItem.map((item, index) => {
            return <TopicSelected item={item} key={index} style={styles.selectedItem} />;
          })}
        </View>
      </View>
    );
  }, [selectedItem]);

  const renderItem = React.useCallback(
    ({ item }: { item: ITopic }) => {
      let selected = selectedItem.find((i) => i.id === item.id);
      let _width = (width - 4 * 4) / 3;

      return (
        <TopicItem
          item={item}
          selectedItem={!!selected}
          style={[styles.item, { width: _width }]}
          onPress={() => handleTopicSelection(item)}
        />
      );
    },
    [selectedItem],
  );

  return (
    <Container>
      <FlatList
        data={data || []}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        numColumns={3}
        scrollEventThrottle={16}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Layout style={[styles.bottom, { paddingBottom: bottom + 8 }]}>
        <Button children="Continue Feed" onPress={goBack} />
      </Layout>
    </Container>
  );
});

export default Reading01;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 12,
  },
  contentContainerStyle: {
    paddingTop: 8,
    paddingLeft: 4,
    paddingBottom: 8 * 2 + 56,
  },
  item: {
    marginBottom: 4,
    marginRight: 4,
  },
  row: {
    marginTop: 16,
    paddingHorizontal: 12,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedItem: {
    marginRight: 8,
    marginBottom: 8,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
});

export interface ITopic {
  id: string;
  name: string;
  emoji: string;
  image: string;
}

export const data: ITopic[] = [
  {
    id: '0',
    name: 'Brainstom',
    emoji: '❤️',
    image:
      'https://user-images.githubusercontent.com/42206067/231085552-fe6478fc-622e-4da6-8de5-6d028ab300a7.png',
  },
  {
    id: '1',
    name: 'Life Style',
    emoji: '❤️',
    image:
      'https://user-images.githubusercontent.com/42206067/231085502-ee90df64-1fcf-4dcf-ab57-8c0e02bcfdd6.png',
  },
  {
    id: '2',
    name: 'Interior',
    emoji: '️🛵',
    image:
      'https://user-images.githubusercontent.com/42206067/231085518-0db1483a-8786-4ffa-a5b3-edb5650b3335.png',
  },
  {
    id: '3',
    name: 'Lego',
    emoji: '👻',
    image:
      'https://user-images.githubusercontent.com/42206067/231085527-327256a2-d294-4500-ac99-33100deb48a7.png',
  },
  {
    id: '4',
    name: 'Wave',
    emoji: '😈️',
    image:
      'https://user-images.githubusercontent.com/42206067/231085531-7a69daed-cf81-45ae-b21a-f5d98cc22664.png',
  },
  {
    id: '5',
    name: 'Technology',
    emoji: '❤️',
    image:
      'https://user-images.githubusercontent.com/42206067/231085536-0833a54b-dea3-416a-9827-0d7043c77ba1.png',
  },
  {
    id: '6',
    name: 'Spac',
    emoji: '❤️',
    image:
      'https://user-images.githubusercontent.com/42206067/231085539-a7f893bf-4f13-4152-80d5-be1f773bbbe9.png',
  },
  {
    id: '7',
    name: 'Art & Design',
    emoji: '❤️',
    image:
      'https://user-images.githubusercontent.com/42206067/231085544-2e2b7de6-d974-4f8f-b090-4e5bb650ba3b.png',
  },
  {
    id: '8',
    name: 'Music',
    emoji: '🎹',
    image:
      'https://user-images.githubusercontent.com/42206067/231085547-0a788d60-e313-4957-a9d8-59a6b59801f2.png',
  },
];
