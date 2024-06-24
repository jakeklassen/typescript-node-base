import { waitFor } from '#app/lib/wait-for.js';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.useFakeTimers();

describe('waitFor', () => {
  beforeEach(() => {
    vi.spyOn(global, 'setTimeout');
  });

  it('should call setTimeout', async () => {
    const timeout = 100;

    const promise = waitFor(timeout);

    expect(setTimeout).toBeCalledWith(expect.any(Function), timeout);

    vi.runOnlyPendingTimers();

    await promise;
  });
});
