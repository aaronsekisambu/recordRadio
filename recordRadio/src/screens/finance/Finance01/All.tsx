import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useLayout } from 'hooks';

import BillItem from './BillItem';

import { IBill } from './type';
import { data_bills } from './data';

interface AllProps {}

const All: React.FC<AllProps> = ({}) => {
  const { width } = useLayout();

  const renderItem = React.useCallback(({ item }: { item: IBill }) => {
    return <BillItem item={item} style={styles.item} />;
  }, []);

  return (
    <View style={[styles.container, { width }]}>
      <FlatList
        data={data_bills}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingTop: 24,
    paddingHorizontal: 8,
    paddingBottom: 4 + 56 + 8,
  },
  item: {
    marginBottom: 8,
  },
});
