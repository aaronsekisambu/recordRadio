import React from 'react';
import { TouchableOpacity, StyleSheet, View, FlatList } from 'react-native';
import { Container, Content, CurrencyText, LinearGradientText } from 'components';
import { useTheme, TopNavigation, Icon, Avatar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import BottomTab from './BottomTab';
import ChartLine from './ChartLine';
import StockItem from './StockItem';

import { Images } from 'assets/images';
import { data_stock } from './data';

const Finance03 = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const { goBack } = useNavigation();

  const renderItem = React.useCallback(({ item }: { item: any }) => {
    return <StockItem item={item} onPress={goBack} style={styles.item} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Avatar source={Images.avatar.male} size="40" />
          </TouchableOpacity>
        }
        accessoryRight={
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.bell, { backgroundColor: theme['background-basic-color-2'] }]}>
            <Icon pack="assets" name="bell" />
          </TouchableOpacity>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Investment"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <CurrencyText category="h0" marginTop={4} marginLeft={16}>
          12860.44
        </CurrencyText>
        <ChartLine />
        <View style={styles.row}>
          <LinearGradientText
            colors={['#CFE1FD', '#FFFDE1']}
            text="Portfolios"
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            textStyle={styles.title}
          />
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Icon pack="assets" name="arrow-right" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data_stock || []}
          renderItem={renderItem}
          horizontal
          scrollEventThrottle={16}
          keyExtractor={(i, index) => `${index}`}
          style={{ flexGrow: 0 }}
          snapToInterval={width - 79}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </Content>
      <BottomTab />
    </Container>
  );
});

export default Finance03;

const styles = StyleSheet.create({
  content: {
    paddingBottom: 49 + 16,
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
    marginLeft: 16,
    marginTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 16,
  },
  item: {
    marginRight: 8,
  },
  contentContainerStyle: {
    paddingLeft: 8,
    marginTop: 16,
  },
});
