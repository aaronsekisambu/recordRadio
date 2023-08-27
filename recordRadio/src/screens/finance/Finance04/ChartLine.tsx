import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CandlestickChart, TCandle } from 'react-native-wagmi-charts';
import { Icon, Layout, useTheme } from '@ui-kitten/components';
import { Text } from 'components';
import { data_chart } from './data';
import { useLayout } from 'hooks';

const tabs = ['1M', '3M', '6M', '1Y', 'All'];

const ChartLine = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const [data, setData] = React.useState<TCandle[]>(data_chart);
  const [activeIndex, setActiveIndex] = React.useState(tabs.length - 1);

  return (
    <View style={styles.container}>
      <CandlestickChart.Provider data={data}>
        <CandlestickChart style={{}} width={width} height={240}>
          <CandlestickChart.Candles
            positiveColor={theme['color-danger-500']}
            negativeColor={theme['color-success-500']}
            useAnimations
          />
          <CandlestickChart.Crosshair enabled color={theme['color-success-500']}>
            <CandlestickChart.Tooltip
              style={[styles.tooltip, { backgroundColor: theme['color-success-500'] }]}
              textStyle={styles.text}
              tooltipTextProps={{
                format: (d) => {
                  'worklet';
                  return `$${d.value}`;
                },
              }}
              yGutter={20}
            />
          </CandlestickChart.Crosshair>
          <CandlestickChart.DatetimeText
            locale="en-AU"
            style={[styles.date, { color: theme['text-basic-color'] }]}
            options={{
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
            }}
          />
        </CandlestickChart>
      </CandlestickChart.Provider>
      <Layout level="2" style={styles.label}>
        {tabs.map((item, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => setActiveIndex(i)}>
              <Text category="h6" status={activeIndex === i ? 'basic' : 'platinum'}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Icon pack="assets" name="arrows-out-simple" style={styles.arrow} />
      </Layout>
    </View>
  );
});

export default ChartLine;

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flex: 1,
  },
  tooltip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  date: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 12,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 8,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});
