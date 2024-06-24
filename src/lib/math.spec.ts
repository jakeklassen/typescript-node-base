import { sum } from '#app/lib/math.js';
import { describe, expect, it } from 'vitest';

describe('math', () => {
  describe('add', () => {
    it('should add numbers', () => {
      expect(sum(1, 2, 3)).toBe(6);
    });
  });
});
