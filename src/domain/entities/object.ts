export enum RockPaperScissors {
  rock = 'rock',
  paper = 'paper',
  scissors = 'scissors',
}

export interface IObject {
  name: RockPaperScissors;
  winBy: RockPaperScissors;
  looseBy: RockPaperScissors;
}
