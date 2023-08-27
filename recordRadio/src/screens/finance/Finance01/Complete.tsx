import React from 'react';
import { View, Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { useStyleSheet, StyleService } from '@ui-kitten/components';

// ----------------------------- Components -----------------------------------
import { Text } from 'components';
import { useLayout } from 'hooks';
// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
interface CompleteProps {}

const Complete: React.FC<CompleteProps> = ({}) => {
  const styles = useStyleSheet(themedStyles);
  const { width } = useLayout();

  return (
    <View style={[styles.container, { width }]}>
      <Text>Complete</Text>
    </View>
  );
};

export default Complete;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
