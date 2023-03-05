import {
  IObject,
  Paper,
  Rock,
  RockPaperScissors,
  Scissors,
} from '@/domain/entities';

export const makeObjectByChoice = (rockPaperScissors: string): IObject => {
  if (RockPaperScissors.rock === rockPaperScissors) {
    return new Rock();
  }
  if (RockPaperScissors.paper === rockPaperScissors) {
    return new Paper();
  }
  if (RockPaperScissors.scissors === rockPaperScissors) {
    return new Scissors();
  }
  throw new Error(
    'Invalid object name, must be one of [rock, paper, scissors]'
  );
};
