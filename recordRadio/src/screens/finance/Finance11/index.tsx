import React from 'react';
import { Container, LinearGradientText, Text } from 'components';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { useTheme, TopNavigation, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import TaskItem from './TaskItem';
import ThemeLogo from 'elements/App/ThemeLogo';
import { LinearGradient } from 'expo-linear-gradient';

import { ITask } from './types';
import { data_tasks } from './data';

const Finance11 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const iconShopping =
    'https://user-images.githubusercontent.com/42206067/223720276-635dddef-8411-4d7f-bc2e-d4317f99dace.png';

  const renderItem = React.useCallback(({ item }: { item: ITask }) => {
    return <TaskItem item={item} style={styles.item} onPress={goBack} />;
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Tasks"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.textTask}
        />
        <Layout level="success" style={styles.box1}>
          <View
            style={[styles.header, { borderBottomColor: `${theme['border-basic-color-3']}10` }]}>
            <Image source={{ uri: iconShopping }} style={styles.image} />
            <View style={styles.content}>
              <Text category="h3" status="white">
                Task pick today
              </Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View>
              <Text category="h4" status="white">
                Buy Ultimate UI KIT
              </Text>
              <Text category="body" status="white" opacity={0.7}>
                1000+ Screen iOS
              </Text>
            </View>
            <Layout level="primary" style={styles.status}>
              <Text category="h6" status="white">
                +130
              </Text>
            </Layout>
          </View>
        </Layout>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Available Tasks"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.textAvailable}
        />
      </View>
    );
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
      <FlatList
        data={data_tasks || []}
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

export default Finance11;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 4,
    paddingBottom: 56,
  },
  item: {
    marginBottom: 4,
  },
  textTask: {
    fontSize: 36,
    fontWeight: '700',
    marginLeft: 12,
    marginBottom: 16,
  },
  textAvailable: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 12,
    marginTop: 32,
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
  box1: {
    padding: 24,
    borderRadius: 16,
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  content: {
    flex: 1,
  },
  bottom: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
