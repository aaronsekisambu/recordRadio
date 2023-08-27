import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  LineChart,
  LineChartCursorLine,
  LineChartDot,
  TLineChartPoint,
} from 'react-native-wagmi-charts';
import _ from 'lodash';
import dayjs from 'dayjs';
import { Icon, Layout, useTheme } from '@ui-kitten/components';
import { Text } from 'components';
import { data_chart } from './data';
import { formatDefault } from 'utils/formatNumber';
import { useLayout } from 'hooks';

const tabs = ['1M', '3M', '6M', '1Y', 'All'];

const ChartLine = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const [data, setData] = React.useState<
    {
      fundPriceId: string;
      fundId: string;
      priceDate: string;
      closingPrice: number;
    }[]
  >(data_chart[tabs.length - 1].data);
  const [activeIndex, setActiveIndex] = React.useState(tabs.length - 1);
  const [show, setShow] = React.useState<boolean>(true);

  const convertData = (
    _data: {
      fundPriceId: string;
      fundId: string;
      priceDate: string;
      closingPrice: number;
    }[],
  ) => {
    const updateData =
      _data &&
      _.map(
        _data.map((obj) => {
          let newObj: TLineChartPoint = {
            value: 0,
            timestamp: 0,
          };
          Object.keys(obj).forEach((key) => {
            if (key === 'closingPrice') {
              newObj.value = obj[key];
            }
            if (key === 'priceDate') {
              newObj.timestamp = dayjs(obj[key]).unix();
            }
          });
          return newObj;
        }),
      );
    return updateData;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: theme['color-success-500'] }]}>
        <Text category="c1" status="white">
          +$42.8 All time
        </Text>
        <Icon pack="assets" name="arrow-up-right" style={styles.icon} />
      </View>
      <LineChart.Provider data={convertData(data)}>
        <LineChart.Group>
          <LineChart yGutter={80} style={{}} width={width} height={240}>
            <LineChart.Path color={theme['color-success-500']} width={2} inactiveColor="#5099F420">
              {show && (
                <LineChartDot
                  color={theme['color-success-500']}
                  outerSize={16}
                  at={data.length - 1}
                  hasPulse
                  size={2}
                />
              )}
              <LineChart.Gradient color={theme['color-success-500']} />
            </LineChart.Path>
            <LineChartCursorLine />
            <LineChart.CursorCrosshair
              enabled
              cancelsTouchesInView
              crosshairProps={{
                style: styles.crosshairStyle,
              }}>
              <LineChart.Tooltip cursorGutter={200} yGutter={20}>
                <Layout style={styles.tooltip}>
                  <Text category="c2" status="platinum">
                    {dayjs(data[activeIndex].priceDate).format('MMMM YYYY')}
                  </Text>
                  <Text status="white">
                    {formatDefault(data[activeIndex].closingPrice.toFixed(2))}
                  </Text>
                </Layout>
              </LineChart.Tooltip>
            </LineChart.CursorCrosshair>
          </LineChart>
        </LineChart.Group>
      </LineChart.Provider>
      <View style={styles.label}>
        {tabs.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setActiveIndex(i);
                const _data = data_chart.find((_item) => _item.title === item);
                if (_data) {
                  setData(_data?.data);
                }
              }}>
              <Text category="h6" status={activeIndex === i ? 'basic' : 'platinum'}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
});

export default ChartLine;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  chart: {
    marginTop: 32,
    height: 250,
    flex: 1,
  },
  crosshairStyle: {
    borderWidth: 2,
    borderColor: '#00CD50',
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  tooltip: {
    backgroundColor: '#2A3947',
    padding: 12,
    borderRadius: 12,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    height: 32,
    marginLeft: 16,
  },
});
