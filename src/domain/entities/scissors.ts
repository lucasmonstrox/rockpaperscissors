import { IObject, RockPaperScissors } from './object';

export class Scissors implements IObject {
  name: RockPaperScissors;
  winBy: RockPaperScissors;
  looseBy: RockPaperScissors;

  constructor() {
    this.name = RockPaperScissors.scissors;
    this.winBy = RockPaperScissors.paper;
    this.looseBy = RockPaperScissors.rock;
  }
}
