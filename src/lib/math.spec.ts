import { sum } from '#app/lib/math';
import { describe, expect, it } from '@jest/globals';

describe('math', () => {
  describe('add', () => {
    it('should add numbers', () => {
      expect(sum(1, 2, 3)).toBe(6);
    });
  });
});
