import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { VStack } from 'components';
import { LinearGradient } from 'expo-linear-gradient';

const LinearProgress = memo(({ progress }: { progress: number }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack level="3" style={styles.container}>
      <LinearGradient
        colors={['#FFFDE1', '#CFE1FD']}
        start={{ x: 1, y: 0.1 }}
        end={{ x: 0.1, y: 0.4 }}
        useAngle
        style={{ width: `${progress}%`, height: 4, borderRadius: 99 }}
      />
    </VStack>
  );
});

export default LinearProgress;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 99,
    height: 4,
    width: '100%',
    overflow: 'hidden',
  },
});
