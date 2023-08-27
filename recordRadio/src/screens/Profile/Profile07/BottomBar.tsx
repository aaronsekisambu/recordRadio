import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Components -----------------------------------
import {HStack, VStack} from 'components';

const BottomBar = memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <HStack style={[styles.container, {bottom: bottom + 8}]} level="2">
      <TouchableOpacity
        style={[styles.basicButton, activeTab === 0 && styles.buttonActive]}
        onPress={() => setActiveTab(0)}>
        <Icon
          pack="assets"
          name="receipt"
          style={[styles.icon, activeTab === 0 && styles.iconActive]}
        />
      </TouchableOpacity>
      <VStack style={styles.buttonAdd}>
        <Icon pack="assets" name="plus" />
      </VStack>
      <TouchableOpacity
        style={[styles.basicButton, activeTab === 1 && styles.buttonActive]}
        onPress={() => setActiveTab(1)}>
        <Icon
          pack="assets"
          name="user"
          style={[styles.icon, activeTab === 1 && styles.iconActive]}
        />
      </TouchableOpacity>
    </HStack>
  );
});

export default BottomBar;

const themedStyles = StyleService.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 100,
    borderRadius: 99,
    alignItems: 'center',
    paddingHorizontal: 32,
    height: 56,
  },
  buttonAdd: {
    backgroundColor: 'color-primary-default',
    padding: 16,
    borderRadius: 99,
    borderWidth: 4,
    borderColor: 'background-basic-color-1',
    marginBottom: 12,
    marginTop: -24,
    marginHorizontal: 32,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'text-platinum-color',
  },
  iconActive: {
    tintColor: 'text-white-color',
  },
  basicButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
    padding: 8,
  },
  buttonActive: {
    backgroundColor: 'color-primary-default',
  },
});
