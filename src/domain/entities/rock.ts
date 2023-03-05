import { IObject, RockPaperScissors } from './object';

export class Rock implements IObject {
  name: RockPaperScissors;
  winBy: RockPaperScissors;
  looseBy: RockPaperScissors;

  constructor() {
    this.name = RockPaperScissors.rock;
    this.winBy = RockPaperScissors.scissors;
    this.looseBy = RockPaperScissors.paper;
  }
}
