import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  describe('boundary', () => {
    it('should reverse a string', () => {
      const result = pipe.transform('Hello, Angular!');
      expect(result).toBe('!ralugnA ,olleH');
    });

    it('should return an empty string if no value is provided', () => {
      const result = pipe.transform('');
      expect(result).toBe('');
    });

    it('should handle null or undefined input gracefully', () => {
      const resultNull = pipe.transform(null);
      const resultUndefined = pipe.transform(undefined);
      expect(resultNull).toBe('');
      expect(resultUndefined).toBe('');
    });
  });
});
