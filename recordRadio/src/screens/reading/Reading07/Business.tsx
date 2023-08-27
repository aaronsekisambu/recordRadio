import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useLayout } from 'hooks';

import BookmarkItem from './BookmarkItem';

import { IBookmark } from './types';
import { data_bookmark } from './data';

interface BusinessProps {}

const Business: React.FC<BusinessProps> = () => {
  const { width } = useLayout();

  const renderItem = React.useCallback(({ item }: { item: IBookmark }) => {
    return <BookmarkItem item={item} style={styles.item} />;
  }, []);

  return (
    <View style={[styles.container, { width }]}>
      <FlatList
        data={data_bookmark || []}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 8,
    paddingBottom: 4 + 56 + 8,
  },
  item: {
    marginBottom: 8,
  },
  contentContainerStyle: {
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingBottom: 49,
  },
});
