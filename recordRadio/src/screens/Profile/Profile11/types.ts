import { ToggleProps } from '@ui-kitten/components';

export interface IFeature {
  icon: string;
  color: string;
  title: string;
  description?: string;
  isArrow?: boolean;
  toggle?: ToggleProps;
  onPress?(): void;
}
