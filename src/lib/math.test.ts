import { describe, expect, it } from 'vitest';
import { add } from './math.js';

describe('math.add', () => {
  it('should add numbers correctly', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});
