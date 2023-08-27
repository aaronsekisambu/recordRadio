import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import {  Text, VStack, HStack } from 'components';
// ----------------------------- Reanimated -----------------------------------
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// ----------------------------- LinearGradient -----------------------------------
import { LinearGradient } from 'expo-linear-gradient';

interface IProgressBarProps {
  progress: number;
  amount: number;
}
const ProgressBarLinear = memo(({ progress, amount }: IProgressBarProps) => {
 
  const styles = useStyleSheet(themedStyles);
  const progressAnimated = useSharedValue(0);
  React.useEffect(() => {
    progressAnimated.value = withTiming(progress, { duration: 1200 });
  }, [progress]);
  const styled = useAnimatedStyle(() => {
    return {
      width: `${progress}%`,
      height: '100%',
      borderRadius: 99,
      overflow: 'hidden',
    };
  });
  return (
    <VStack style={styles.container}>
      <VStack style={styles.barContainer} level="3">
        <Animated.View style={styled}>
          <LinearGradient
            colors={['#FFFDE1', '#CFE1FD']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.1, y: 0.5 }}
            useAngle
            style={styles.linear}
          />
        </Animated.View>
      </VStack>
      <HStack mt={8}>
        <Text category='h5'>
          {amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          })}
        </Text>
        <VStack style={styles.percent}>
          <Text category="c1" fontWeight="700">
            {progress.toFixed(0)}%
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
});

export default ProgressBarLinear;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  barContainer: {
    height: 8,
    borderRadius: 99,
    width: '100%',
  },
  linear: {
    width: '100%',
    height: '100%',
  },
  percent: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
    backgroundColor: 'color-primary-default',
  },
});
