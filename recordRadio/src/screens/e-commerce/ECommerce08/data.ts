import dayjs from 'dayjs';

export const conversations = [
  {
    _id: 1,
    text: 'Hello! Product still available?',
    createdAt: dayjs().subtract(10, 'minutes').format('hh:mm'),
    user: {
      _id: 1,
      name: 'Hien',
      avatar: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
    },
  },
  {
    _id: 2,
    text: 'Yes! Can I help you. Please let me know :D',
    createdAt: dayjs().subtract(9, 'minutes').format('hh:mm'),
    user: {
      _id: 2,
      name: 'Van',
      avatar: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
    },
    shop: 'abc',
  },
];
