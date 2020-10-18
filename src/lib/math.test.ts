import { add } from '@app/lib/math';

describe('math.add', () => {
  it('should add numbers correctly', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});
