import { RockPaperScissors } from '@/domain/entities';
import { rockPaperScissorsUseCase } from '@/domain/useCases';
import { makeObjectByChoice } from '../factories/makeObjectByChoice';

export const rockPaperScissorsCommand = (options: {
  l:
    | RockPaperScissors.rock
    | RockPaperScissors.paper
    | RockPaperScissors.scissors;
  r:
    | RockPaperScissors.rock
    | RockPaperScissors.paper
    | RockPaperScissors.scissors;
}) => {
  const leftChoice = makeObjectByChoice(options.l);
  const rightChoice = makeObjectByChoice(options.r);
  const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
  const isDraw = result === 'draw';
  if (isDraw) {
    console.log('💩🎉 ~ No one won, there was a draw');
    process.exit();
  }
  console.log(`🎉 ~ The winner is:`, result.name);
};
