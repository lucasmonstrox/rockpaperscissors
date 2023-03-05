import { IObject } from '@/domain/entities/object';

type Input = { leftChoice: IObject; rightChoice: IObject };
type Output = IObject | 'draw';

export const rockPaperScissorsUseCase = ({
  leftChoice,
  rightChoice,
}: Input): Output => {
  const leftChoiseIsWinner = leftChoice.winBy == rightChoice.name;
  if (leftChoiseIsWinner) {
    return leftChoice;
  }
  const rightChoiceIsWinner = rightChoice.winBy == leftChoice.name;
  if (rightChoiceIsWinner) {
    return rightChoice;
  }
  return 'draw';
};
