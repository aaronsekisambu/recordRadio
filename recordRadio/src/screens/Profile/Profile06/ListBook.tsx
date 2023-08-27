import React from 'react';
import {Image, ImageRequireSource} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {useTheme, Icon, StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {Text, VStack, HStack, ProgressBar} from 'components';

interface IBookProps {
  title: string;
  artist: string;
  loading: number;
  duration: string;
  cover: ImageRequireSource;
}

const ListBook = ({data}: {data: IBookProps[]}) => {

  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack style={styles.container}>
      {data.map((item, i) => {
        return (
          <HStack key={i} justify="flex-start" gap={8} level="2" border={8}>
            {/* @ts-ignore */}
            <Image source={item.cover} style={styles.cover} />
            <VStack mv={8} gap={24} style={styles.content}>
              <VStack gap={4}>
                <Text category="h5">{item.title}</Text>
                <Text category="c1" status="placeholder">
                  {item.artist}
                </Text>
              </VStack>
              <VStack gap={8}>
                <HStack itemsCenter>
                  <HStack gap={4} itemsCenter>
                    <Icon
                      pack="assets"
                      name="headphone"
                      style={styles.headphone}
                    />
                    <Text category="c1">{item.duration}</Text>
                  </HStack>
                  <Icon pack="assets" name="download" style={styles.download} />
                </HStack>
                <ProgressBar
                  progress={5 / 10}
                  style={styles.progress}
                  styleBar={styles.progress}
                />
              </VStack>
            </VStack>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default ListBook;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
    paddingTop: 16,
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  cover: {
    width: 84,
    aspectRatio: 1 / 1.322,
    borderRadius: 8,
    margin: 8,
  },
  progress: {
    height: 4,
  },
  headphone: {
    width: 16,
    height: 16,
    tintColor: 'color-warning-default',
  },
  download: {
    width: 24,
    height: 24,
    tintColor: 'color-warning-default',
  },
});
