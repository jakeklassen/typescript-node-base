import { waitFor } from '#app/lib/wait-for';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';

jest.useFakeTimers();

describe('waitFor', () => {
  beforeEach(() => {
    jest.spyOn(global, 'setTimeout');
  });

  it('should call setTimeout', async () => {
    const timeout = 100;

    const promise = waitFor(timeout);

    expect(setTimeout).toBeCalledWith(expect.any(Function), timeout);

    jest.runOnlyPendingTimers();

    await promise;
  });
});
