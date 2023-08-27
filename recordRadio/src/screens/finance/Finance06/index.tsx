import React from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Container, Text, CurrencyText, LinearGradientText } from 'components';
import { useTheme, TopNavigation, Icon, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import TabBar from './TabBar';
import BottomTab from './BottomTab';
import InvestItem from './InvestItem';
import { LinearGradient } from 'expo-linear-gradient';

import { Images } from 'assets/images';

const Finance06 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Balance"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <CurrencyText category="h0" marginTop={4} center>
          12860.44
        </CurrencyText>
        <LinearGradient
          colors={['#CFE1FD', '#FFFDE1']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.box}>
          <Text status="black" category="c1">
            $462.8 Available
          </Text>
        </LinearGradient>
        <TabBar
          data={['Loan', 'Borrow']}
          selectedTab={selectedIndex}
          onPress={setSelectedIndex}
          style={styles.tab}
        />
      </View>
    );
  }, [selectedIndex]);

  const renderItem = React.useCallback(({ item, index }: { item: any; index: number }) => {
    return <InvestItem item={item} onPress={goBack} style={styles.item} is_active={index === 0} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryRight={
          <View style={styles.right}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.chart, { backgroundColor: theme['background-basic-color-2'] }]}>
              <Icon pack="assets" name="chart-bar" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.bell, { backgroundColor: theme['background-basic-color-2'] }]}>
              <Icon pack="assets" name="bell" />
            </TouchableOpacity>
          </View>
        }
        accessoryLeft={
          <TouchableOpacity activeOpacity={0.7}>
            <Avatar source={Images.avatar.male} size="40" />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={[0, 1, 2]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <BottomTab />
    </Container>
  );
});

export default Finance06;

const styles = StyleSheet.create({
  iconView: {
    width: 40,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chart: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bell: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    textAlign: 'center',
  },
  box: {
    marginTop: 4,
    alignSelf: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    marginHorizontal: 16,
    marginTop: 32,
    marginBottom: 24,
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 49,
  },
  item: {
    marginBottom: 4,
    marginHorizontal: 12,
  },
});
