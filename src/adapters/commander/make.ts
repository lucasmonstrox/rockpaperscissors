import { program } from 'commander';
import { rockPaperScissorsCommand } from './commands';

export const makeCommander = () => {
  program
    .command('play')
    .description('Play Rock Paper Scissors choosing two times')
    .option('-l <char>')
    .option('-r <char>')
    .action(rockPaperScissorsCommand);
  program.parse();
};
