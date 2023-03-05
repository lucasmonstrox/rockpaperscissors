import { IObject, RockPaperScissors } from './object';

export class Paper implements IObject {
  name: RockPaperScissors;
  winBy: RockPaperScissors;
  looseBy: RockPaperScissors;

  constructor() {
    this.name = RockPaperScissors.paper;
    this.winBy = RockPaperScissors.rock;
    this.looseBy = RockPaperScissors.scissors;
  }
}
