import React from 'react';
import { LayoutChangeEvent, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import { useTheme, Layout } from '@ui-kitten/components';

interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  progress: number;
  styleBar?: StyleProp<ViewStyle>;
  size?: number;
  status?: 'primary' | 'basic' | 'warning';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  style,
  progress,
  status = 'primary',
  size = 4,
}) => {
  const theme = useTheme();
  const [width, setWidth] = React.useState<number>(1);

  const progressValue = React.useMemo(() => {
    return progress * width;
  }, [width, progress]);

  const slider = useDerivedValue(() => {
    return progress * width;
  }, [progress, width]);

  const styleSlider = useAnimatedStyle(() => {
    return {
      width: withTiming(slider.value, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  }, [slider]);

  const onLayout = React.useCallback(({ nativeEvent }: LayoutChangeEvent) => {
    setWidth((prev) => {
      if (prev !== nativeEvent.layout.width) {
        return nativeEvent.layout.width;
      }
      return prev;
    });
  }, []);

  const getBackgroundColor = () => {
    switch (status) {
      case 'primary':
        return `${theme['color-basic-1100']}10`;
      case 'warning':
        return `${theme['color-basic-1100']}40`;
      default:
        return `${theme['color-basic-1100']}10`;
    }
  };

  const getColor = () => {
    switch (status) {
      case 'primary':
        return theme['color-primary-500'];
      case 'warning':
        return theme['color-warning-500'];
      default:
        return theme['color-primary-500'];
    }
  };

  return (
    <Layout
      style={[
        styles.container,
        { backgroundColor: getBackgroundColor(), height: size, borderRadius: size },
        style,
      ]}
      onLayout={onLayout}>
      <Animated.View
        style={[
          {
            height: size,
            borderRadius: size,
            backgroundColor: getColor(),
            width: progressValue,
          },
          styleSlider,
        ]}
      />
    </Layout>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
