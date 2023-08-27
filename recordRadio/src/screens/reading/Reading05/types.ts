import { ImageRequireSource } from 'react-native';

export interface IPodcast {
  title: string;
  description: string;
  avatar: ImageRequireSource;
  name: string;
  date: string;
  time: string;
}
