import { MS_IN_SECOND } from '@/helpers/constants/time';

export const getSecondsPassed = (date?: string | number) => {
  if (typeof date === 'string') {
    const dateObject = new Date(date);
    const timestamp = dateObject.getTime();
    return Math.floor((Date.now() - timestamp) / MS_IN_SECOND);
  } else if (typeof date === 'number') {
    return Math.floor((Date.now() - date) / MS_IN_SECOND);
  } else {
    return 0;
  }
};
