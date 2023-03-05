import { RockPaperScissors } from '@/domain/entities';
import { rockPaperScissorsUseCase } from '@/domain/useCases';
import { makeObjectByChoice } from '../factories';

type Input = {
  l: RockPaperScissors;
  r: RockPaperScissors;
};

export const rockPaperScissorsCommand = (input: Input) => {
  const leftChoice = makeObjectByChoice(input.l);
  const rightChoice = makeObjectByChoice(input.r);
  const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
  const isDraw = result === 'draw';
  if (isDraw) {
    console.log('💩🎉 ~ No one won, there was a draw');
    return;
  }
  console.log(`🎉 ~ The winner is:`, result.name);
};
