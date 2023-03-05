import { Paper, Rock, Scissors } from '@/domain/entities';
import { rockPaperScissorsUseCase } from '@/domain/useCases';

describe('rockPaperScissors', () => {
  describe('Rock', () => {
    it('x Rock', () => {
      const leftChoice = new Rock();
      const rightChoice = new Rock();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual('draw');
    });

    it('x Paper', () => {
      const leftChoice = new Rock();
      const rightChoice = new Paper();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual(rightChoice);
    });

    it('x Scissors', () => {
      const leftChoice = new Rock();
      const rightChoice = new Paper();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual(rightChoice);
    });
  });

  describe('Paper', () => {
    it('Paper x Rock', () => {
      const leftChoice = new Paper();
      const rightChoice = new Rock();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual(leftChoice);
    });

    it('x Paper', () => {
      const leftChoice = new Paper();
      const rightChoice = new Paper();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual('draw');
    });

    it('x Scissors', () => {
      const leftChoice = new Paper();
      const rightChoice = new Scissors();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual(rightChoice);
    });
  });

  describe('Scissors', () => {
    it('x Rock', () => {
      const leftChoice = new Scissors();
      const rightChoice = new Rock();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual(rightChoice);
    });

    it('x Paper', () => {
      const leftChoice = new Scissors();
      const rightChoice = new Paper();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual(leftChoice);
    });

    it('x Scissors', () => {
      const leftChoice = new Scissors();
      const rightChoice = new Scissors();
      const result = rockPaperScissorsUseCase({ leftChoice, rightChoice });
      expect(result).toEqual('draw');
    });
  });
});
