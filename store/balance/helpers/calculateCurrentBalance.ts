import { getSecondsPassed } from '@/helpers/convertTimeFormat';
import { BalanceSlice } from '../type';

export const calculateCurrentBalance = (
  state: BalanceSlice,
): Partial<BalanceSlice> => {
  /*
  Calculate current balance based on time passed since last balance update
  TODO: Should include all the boosters and other factors that can affect the balance offline
  */
  const secondsPassed = getSecondsPassed(state.balanceUpdatedAt);
  const maxSecondsPassed =
    secondsPassed > state.staticEnergyLevel
      ? state.staticEnergyLevel
      : secondsPassed;
  return {
    currentBalance: state.staticBalance + maxSecondsPassed * state.tokenGain,
    currentEnergyLevel: state.staticEnergyLevel - maxSecondsPassed,
    tokenGain: state.tokenGain,
  };
};
