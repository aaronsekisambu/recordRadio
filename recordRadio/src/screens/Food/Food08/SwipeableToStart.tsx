import * as React from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';
import { StyleService, useStyleSheet, Spinner, Button, Icon } from '@ui-kitten/components';

import { Text, VStack } from 'components';
import RoundedButton from 'components/RoundedButton';
import { Swipeable, RectButton } from 'react-native-gesture-handler';

const SwipeableToStart = React.memo(() => {
  const { goBack } = useNavigation();
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [active, setActive] = React.useState(false);
  const [start, setStart] = React.useState(false);
  return (
    <>
      {!start ? (
        <VStack>
          {!active && (
            <>
              <Text category="h4" status="basic" center style={styles.text}>
                Swipe to call
              </Text>
              <Icon pack="assets" name="caret-double-right" style={styles.iconCaret} />
            </>
          )}
          {!active ? (
            <>
              <Swipeable
                containerStyle={[
                  styles.swipeable,
                  {
                    width: width - 32,
                  },
                ]}
                overshootLeft={false}
                onSwipeableOpen={() => {
                  setActive(true);
                  setTimeout(() => {
                    setStart(true);
                  }, 1200);
                }}
                onSwipeableClose={() => {
                  setActive(false);
                }}
                renderLeftActions={(progress, dragX) => {
                  return (
                    <RectButton onPress={() => {}} activeOpacity={1}>
                      <Animated.View
                        style={{
                          width: width - 90,
                        }}
                      />
                    </RectButton>
                  );
                }}>
                <RoundedButton
                  status="primary"
                  icon="phone-call"
                  activeOpacity={1}
                  size={48}
                  style={styles.roundedButton}
                />
              </Swipeable>
            </>
          ) : (
            <VStack itemsCenter>
              <Spinner />
            </VStack>
          )}
        </VStack>
      ) : (
        <Button children={'Get Start'} style={styles.buttonStart} onPress={goBack} />
      )}
    </>
  );
});

export default SwipeableToStart;

const themedStyles = StyleService.create({
  buttonStart: {},
  roundedButton: {
    margin: 4,
  },
  swipeable: {
    borderRadius: 16,
    backgroundColor: 'color-primary-default',
    justifyContent: 'center',
    zIndex: -10,
  },
  iconCaret: {
    position: 'absolute',
    right: 16,
    top: 18,
    zIndex: 100,
  },
  text: {
    position: 'absolute',
    alignSelf: 'center',
    top: 16,
    zIndex: 100,
  },
});
