import React, {memo} from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet, Layout, Icon} from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {HStack, Text, VStack} from 'components';
// ----------------------------- Hooks -----------------------------------
import {useLayout} from 'hooks';

const Statistics = memo(
  ({data}: {data: Array<{title: string; desc: string; image: string}>}) => {
    const styles = useStyleSheet(themedStyles);
    const {width} = useLayout();

    return (
      <VStack style={styles.container}>
        <HStack itemsCenter justify="flex-start" mb={20}>
          <Text category="h2">🔥 </Text>
          <Text category="h4">Statistics</Text>
        </HStack>
        <VStack style={styles.content}>
          {data.map((item, i) => {
            return (
              <Layout
                style={[styles.tag, {width: (width - 24) / 2}]}
                key={i}
                level="2">
                <Icon pack="assets" name={item.image} style={styles.icon} />
                <VStack gap={8} mt={20}>
                  <Text category="h4">{item.title}</Text>
                  <Text category="body" status="placeholder">
                    {item.desc}
                  </Text>
                </VStack>
              </Layout>
            );
          })}
        </VStack>
      </VStack>
    );
  },
);

export default Statistics;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    borderRadius: 16,
    padding: 16,
  },
  icon: {
    width: 48,
    height: 48,
  },
});
