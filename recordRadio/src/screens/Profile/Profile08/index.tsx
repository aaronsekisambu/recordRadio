import React, {memo, useRef} from 'react';
import {ImageBackground} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {useStyleSheet, Button, Icon, StyleService, TopNavigation} from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Components -----------------------------------
import {NavigationAction, Container, Text, HStack, VStack} from 'components';
// ----------------------------- Modal -----------------------------------
import {Modalize} from 'react-native-modalize';
// ----------------------------- Reanimated 2 -----------------------------------
import Animated, {interpolate, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import BottomSheet from '@gorhom/bottom-sheet';

const Profile08 = memo(() => {
  const {height, width, top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const modalizeRef = useRef<Modalize>(null);
  const progress = useSharedValue(0);
  const styled = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, 180]);
    return {
      transform: [{rotate: `${rotate}deg`}],
    };
  });

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = React.useMemo(() => ['8%', '90%'], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    progress.value = index;
  }, []);
  return (
    <Container style={styles.container}>
      <ImageBackground
        source={Images.profile.image13}
        style={styles.background}
        imageStyle={{width: width, height: height}}
      />
      <TopNavigation
        appearance="control"
        accessoryLeft={
          <NavigationAction
            status="placeholder"
            borderRadius={12}
            icon="caret-left"
          />
        }
        accessoryRight={
          <NavigationAction
            status="placeholder"
            borderRadius={12}
            icon="heart"
          />
        }
      />
      <VStack mh={16}>
        <HStack justify="flex-start" mb={8}>
          <Text category="h3">Albert Flores</Text>
          <Icon pack="assets" name="radio-active" />
        </HStack>
        <Text category="body" status="placeholder">
          1901 Thornridge Cir. Shiloh, Hawaii 81063
        </Text>
        <HStack mt={24} gap={8} mb={68}>
          <Button
            style={styles.button}
            children="Follow Me"
            status="control"
            accessoryLeft={<Icon pack="assets" name="add-user" />}
          />
          <Button
            style={styles.button}
            children="Chat Now"
            accessoryLeft={<Icon pack="assets" name="chat" />}
          />
        </HStack>
      </VStack>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        style={styles.modal}
        snapPoints={snapPoints}
        onAnimate={(fromIndex: number, toIndex: number) => {}}
        onChange={handleSheetChanges}
        handleComponent={() => {
          return (
            <VStack style={styles.modalHeader} level="1" itemsCenter>
              <HStack itemsCenter mt={24} mb={24} gap={8}>
                <Text category="h4" status="warning" marginBottom={4}>
                  All Information
                </Text>
                <Animated.View style={styled}>
                  <Icon pack="assets" name="caret-up" style={styles.caret} />
                </Animated.View>
              </HStack>
            </VStack>
          );
        }}>
        <VStack style={styles.contentBottom} level="1"></VStack>
      </BottomSheet>
    </Container>
  );
});

export default Profile08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: -100,
  },
  contentBottom: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  modalHeader: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: -1,
  },
  modal: {
    flex: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: 'background-basic-color-1',
  },
  caret: {
    width: 24,
    height: 24,
    tintColor: 'text-warning-color',
  },
});
