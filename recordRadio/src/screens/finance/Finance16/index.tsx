import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  Icon,
  Avatar,
  IndexPath,
  Select,
  SelectItem,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';

// ----------------------------- Components -----------------------------------
import {
  NavigationAction,
  Text,
  LinearGradientText,
  Container,
  Content,
  HStack,
  VStack,
} from 'components';
// ----------------------------- Victory Native -----------------------------------
import { VictoryAxis, VictoryBar, VictoryLabel, VictoryChart } from 'victory-native';
// ----------------------------- Assets -----------------------------------
import { Images } from 'assets/images';
// ----------------------------- Elements -----------------------------------
import CardSaveing from '../Finance14/CardSaving';
import TabBar from '../Finance14/TabBar';
const Finance16 = memo(() => {
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selected, setSelected] = React.useState(new IndexPath(1));
  const [activeIndex, setActiveIndex] = React.useState(0);
  const data_chart = [
    { x: 1, y: 3, time: 'Apr' },
    { x: 2, y: 4, time: 'May' },
    { x: 3, y: 6.5, time: 'Jun' },
    { x: 4, y: 10, time: 'Jul' },
    { x: 5, y: 5.5, time: 'Aug' },
    { x: 6, y: 7, time: 'Sep' },
  ];
  const data = ['Weekly', 'Monthly', 'Yearly'];
  const displayValue = data[selected.row];

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryRight={<NavigationAction icon="bell" />}
        //@ts-ignore
        accessoryLeft={<Avatar source={Images.avatar.avatar_01} style={styles.avatar} />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack ml={24}>
          <LinearGradientText
            start={{ x: 0.4, y: 0 }}
            end={{ x: 0, y: 1 }}
            text={'Your Saving'}
            textStyle={styles.text}
          />
          <HStack mt={4} itemsCenter justify="flex-start" mb={32}>
            <Text category="c2" status="platinum">
              Yesterday saving:{' '}
            </Text>
            <Text category="c2">150.000nđ</Text>
          </HStack>
        </VStack>
        <VStack
          level="2"
          style={styles.contentChart}
          onLayout={(e) => console.log(e.nativeEvent.layout.height)}>
          <HStack mh={20} mt={24} mb={40}>
            <LinearGradientText
              start={{ x: 0.4, y: 0 }}
              end={{ x: 0, y: 1 }}
              text={'Your Saving'}
              textStyle={styles.titleChart}
            />
            <Select
              size="tiny"
              value={displayValue}
              selectedIndex={selected}
              status="control"
              // @ts-ignore
              onSelect={setSelected}
              accessoryRight={<Icon pack="assets" name="caret-down" />}>
              {data.map((item, index) => {
                return <SelectItem title={item} key={index} />;
              })}
            </Select>
          </HStack>
          <VictoryChart
            animate={{
              duration: 1000,
              onLoad: { duration: 500 },
            }}
            width={width - 24}
            height={200}
            padding={{ left: 44, bottom: 24, right: 24, top: 0 }}>
            <VictoryAxis
              style={{
                axis: { stroke: 'transparent' },
                ticks: { stroke: 'transparent', size: 0 },
                tickLabels: { fill: 'transparent' },
              }}
              tickValues={[1, 2, 3, 4, 5, 6]}
              tickFormat={['2017', '2018', '2019', 'JUL', '2021', '2022']}
            />
            <VictoryBar
              animate={{
                duration: 1000,
                onLoad: { duration: 500 },
              }}
              labels={({ datum, index }) => {
                if (activeIndex === index) {
                  return datum.time;
                } else {
                  return '';
                }
              }}
              labelComponent={<VictoryLabel y={180} />}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPressIn: () => {
                      return [
                        {
                          target: 'data',
                          eventKey: 'all',
                          mutation: () => ({
                            style: { fill: '#414F5B' },
                          }),
                        },
                        {
                          target: 'data',
                          mutation: (props) => {
                            const isNotActiveIndex = props.index !== activeIndex;
                            setActiveIndex(isNotActiveIndex ? props.index : null);
                            return {
                              style: { fill: '#F6D938' },
                            };
                          },
                        },
                      ];
                    },
                    onPressOut: () => {
                      return [];
                    },
                  },
                },
              ]}
              data={data_chart}
              x="time"
              colorScale={'qualitative'}
              barWidth={48}
              padding={{ left: 100 }}
              cornerRadius={{ bottom: 8, top: 8 }}
              style={{
                data: {
                  fill: ({ datum, index }) => (index === activeIndex ? '#F6D938' : '#414F5B'),
                },
              }}
            />
          </VictoryChart>
        </VStack>
        <VStack>
          <Text category="h4" marginLeft={24} marginBottom={16}>
            Top Goals
          </Text>
          <Content horizontal contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}>
            {DATA.map((item, index) => {
              return <CardSaveing data={item} key={index} />;
            })}
          </Content>
        </VStack>
      </Content>
      <TabBar />
    </Container>
  );
});

export default Finance16;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  contentChart: {
    borderRadius: 16,
    marginBottom: 24,
    marginHorizontal: 4,
  },
  titleChart: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  content: {
    paddingTop: 32,
    paddingBottom: 120,
  },
  avatar: {
    width: 32,
    height: 32,
  },
});
const DATA = [
  {
    id: '1',
    title: 'Travel anywhere',
    symbol: '🏠',
    members: [
      { avatar: Images.avatar.avatar_02 },
      { avatar: Images.avatar.avatar_03 },
      { avatar: Images.avatar.avatar_04 },
    ],
    goal: 2000,
    amount: 1246,
    timeLeft: '64 days left',
    color: '#429DF0',
  },
  {
    id: '1',
    title: 'Travel anywhere',
    symbol: '🏠',
    members: [
      { avatar: Images.avatar.avatar_02 },
      { avatar: Images.avatar.avatar_03 },
      { avatar: Images.avatar.avatar_04 },
    ],
    goal: 2000,
    amount: 1246,
    timeLeft: '64 days left',
    color: '#00CD50',
  },
  {
    id: '1',
    title: 'Travel anywhere',
    symbol: '🏠',
    members: [
      { avatar: Images.avatar.avatar_02 },
      { avatar: Images.avatar.avatar_03 },
      { avatar: Images.avatar.avatar_04 },
    ],
    goal: 2000,
    amount: 1246,
    timeLeft: '64 days left',
    color: '#CE8ABC',
  },
  {
    id: '1',
    title: 'Travel anywhere',
    symbol: '🏠',
    members: [
      { avatar: Images.avatar.avatar_02 },
      { avatar: Images.avatar.avatar_03 },
      { avatar: Images.avatar.avatar_04 },
    ],
    goal: 2000,
    amount: 1246,
    timeLeft: '64 days left',
    color: '#C0A975',
  },
];
