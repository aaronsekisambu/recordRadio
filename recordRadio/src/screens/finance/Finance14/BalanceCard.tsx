import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Icon, Button } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { Text, VStack, LinearGradientText, HStack } from 'components';

const BalanceCard = memo(({ saving, balance }: { saving: string; balance: string }) => {
  const styles = useStyleSheet(themedStyles);
  const [hide, setHide] = React.useState(false);

  const toggle = () => {
    setHide(!hide);
  };
  return (
    <HStack ml={24} mr={16} itemsCenter>
      <VStack gap={4}>
        <HStack itemsCenter justify="flex-start" gap={4}>
          <Text category="h6" status="platinum">
            Total balance
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={toggle}>
            <Icon pack="eva" name={hide ? 'eye-outline' : 'eye-off-outline'} style={styles.icon} />
          </TouchableOpacity>
        </HStack>
        <HStack gap={8} justify="flex-start">
          <LinearGradientText text={`${balance}`} textStyle={styles.balance} />
          <LinearGradientText text={`USD`} textStyle={styles.balance} />
        </HStack>
        <HStack justify="flex-start" gap={4}>
          <Text status="platinum" category="c2">
            Yesterday saving:
          </Text>
          <Text category="c2">{saving}</Text>
        </HStack>
      </VStack>
      <Button
        style={styles.buttonChart}
        size="navigate"
        status="success"
        accessoryLeft={<Icon pack="assets" name="chart-bar" />}
      />
    </HStack>
  );
});

export default BalanceCard;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  balance: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: 'text-platinum-color',
  },
  buttonChart: {
    borderRadius: 99,
  },
});
