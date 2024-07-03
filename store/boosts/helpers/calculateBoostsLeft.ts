import { getSecondsPassed } from '@/helpers/convertTimeFormat';
import { BoostDbData, BoostInterface } from '../type';
import { S_IN_HOUR } from '@/helpers/constants/time';

export const calculateBoostsLeft = (
  boost: BoostDbData & {
    maxItems: BoostInterface['maxItems'];
    resetDuration: BoostInterface['resetDuration'];
  },
) => {
  const { updatedAt, itemsLeft, maxItems, resetDuration, type } = boost;

  const secondsPassed = getSecondsPassed(updatedAt);
  if (resetDuration === 'immediately') {
    return maxItems;
  }

  const resetDurationInSeconds = resetDuration * S_IN_HOUR;
  const itemsToAdd = Math.floor(secondsPassed / resetDurationInSeconds);
  const newItemsLeft = itemsLeft + itemsToAdd;
  return newItemsLeft > maxItems ? maxItems : newItemsLeft;
};
