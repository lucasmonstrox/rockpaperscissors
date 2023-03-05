import {
  IObject,
  Paper,
  Rock,
  RockPaperScissors,
  Scissors,
} from '@/domain/entities';

export const makeObjectByChoice = (
  rockPaperScissors: RockPaperScissors
): IObject => {
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
    `Invalid object name, must be one of [${RockPaperScissors.rock}, ${RockPaperScissors.paper}, ${RockPaperScissors.scissors}]`
  );
};
