import { rockPaperScissorsUseCase } from '@/domain/useCases';
import { program } from 'commander';
import { makeObjectByChoice } from './factories/makeObjectByChoice';

export const makeCommander = () => {
  program.option('-l <char>').option('-r <char>');
  program.parse();
  const options = program.opts();
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
