import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Container, CurrencyText, LinearGradientText, NavigationAction, Text } from 'components';
import { useTheme, TopNavigation, Icon, Layout, Input, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';

import ChartLine from './ChartLine';

const Finance04 = React.memo(() => {
  const theme = useTheme();
  const { top, bottom } = useLayout();
  const { goBack } = useNavigation();

  const [price, setPrice] = React.useState<string>('86');
  const [amount, setAmount] = React.useState<string>('10000');

  return (
    <Container useSafeArea={false}>
      <View style={{ paddingTop: top }}>
        <TopNavigation
          accessoryLeft={<NavigationAction />}
          accessoryRight={<NavigationAction icon="search" />}
        />
      </View>
      <LinearGradientText
        colors={['#CFE1FD', '#FFFDE1']}
        text="ABC"
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        textStyle={styles.titleText}
      />
      <Text category="body" marginHorizontal={16} status="placeholder">
        Abc joint stock company
      </Text>
      <View style={styles.row}>
        <CurrencyText category="h2" marginRight={8}>
          84.44
        </CurrencyText>
        <Layout level="success" style={styles.box}>
          <Text category="c1" status="white">
            +$42.8 (0.5%) today
          </Text>
          <Icon pack="assets" name="arrow-up-right" style={styles.icon} />
        </Layout>
      </View>
      <ChartLine />
      <Layout level="2" style={[styles.bottom, { paddingBottom: bottom + 8 }]}>
        <View style={styles.left}>
          <Input
            label="Price"
            placeholder="Price"
            style={[styles.input, { borderColor: theme['border-basic-color-3'] }]}
            value={price}
            onChangeText={setPrice}
          />
          <Button status="danger" onPress={goBack}>
            <View>
              <Text category="h5" status="white" center>
                Buy
              </Text>
              <Text category="c1" status="white" center>
                -$12,468.00
              </Text>
            </View>
          </Button>
        </View>
        <View style={styles.right}>
          <Input
            label="Amount"
            placeholder="Amount"
            style={[styles.input, { borderColor: theme['border-basic-color-3'] }]}
            value={amount}
            onChangeText={setAmount}
          />
          <Button onPress={goBack}>
            <View>
              <Text category="h5" status="white" center>
                Sale
              </Text>
              <Text category="c1" status="white" center>
                +$12,468.00
              </Text>
            </View>
          </Button>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}} style={styles.max}>
          <Text status="warning" category="h6" uppercase>
            max
          </Text>
        </TouchableOpacity>
      </Layout>
    </Container>
  );
});

export default Finance04;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 16,
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
    paddingHorizontal: 12,
    height: 32,
  },
  bottom: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  left: {
    flex: 1,
    marginRight: 8,
  },
  right: {
    flex: 1,
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
  },
  max: {
    position: 'absolute',
    top: 12,
    right: 16,
  },
});
