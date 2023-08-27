import React from 'react';
import { TextInput, ViewStyle, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { useTheme, Icon, Layout } from '@ui-kitten/components';
import { useLayout } from 'hooks';
import { Text } from 'components';
import { goBack } from 'navigation/root-navigation';

interface Props {
  style?: ViewStyle;
  onPress: (text: string) => void;
  onScrollToEnd: () => void;
}

const ChatInput = React.memo(({ style, onPress, onScrollToEnd }: Props) => {
  const theme = useTheme();
  const { bottom } = useLayout();
  const [chatContent, setContent] = React.useState<string>('');
  const inputRef = React.useRef<TextInput>(null);

  const onSendMessage = React.useCallback(() => {
    onPress && onPress(chatContent);
    inputRef.current?.clear();
  }, [chatContent, onPress]);

  const quick_answers = ['Any discount?', 'Can I get it today?', 'Other same'];

  const renderItem = React.useCallback(({ item }: { item: string }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goBack}
        style={[styles.item, { borderColor: theme['border-basic-color-2'] }]}>
        <Text category="subhead" status="placeholder">
          {item}
        </Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View>
      <FlatList
        data={quick_answers}
        renderItem={renderItem}
        keyExtractor={(i, idx) => `${idx}`}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.content}
      />
      <Layout level="2" style={[styles.container, { paddingBottom: bottom + 16 }, style]}>
        <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
          <Icon pack="assets" name="plus-circle" style={styles.icon40} />
        </TouchableOpacity>
        <Layout style={styles.box}>
          <TextInput
            placeholder="Leave comment"
            style={[styles.textInput, { color: theme['text-basic-color'] }]}
            placeholderTextColor={theme['text-placeholder-color']}
            value={chatContent}
            onChangeText={setContent}
            ref={inputRef}
            onFocus={onScrollToEnd}
          />
          <TouchableOpacity
            style={[styles.buttonSent, { backgroundColor: theme['color-primary-500'] }]}
            onPress={onSendMessage}>
            <Icon pack="assets" name="send" style={styles.icon16} />
          </TouchableOpacity>
        </Layout>
      </Layout>
    </View>
  );
});

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  box: {
    marginLeft: 8,
    borderRadius: 16,
    flex: 1,
    flexDirection: 'row',
    height: 40,
    padding: 2,
    paddingLeft: 16,
  },
  textInput: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'SpaceGrotesk-Regular',
    flex: 1,
  },
  buttonSent: {
    marginLeft: 12,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonSend: {
    width: 40,
    height: 36,
    marginLeft: 16,
  },
  icon40: {
    width: 40,
    height: 40,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  item: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: 4,
  },
  content: {
    paddingLeft: 4,
    marginBottom: 8,
  },
});
