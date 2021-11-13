import expect from 'expect';
import { createMock } from 'ts-auto-mock';

interface Person {
  id: string;
  getName(): string;
  details: {
    phone: number;
  };
}

describe('auto mock example', () => {
  let mock: Person;

  beforeEach(() => {
    mock = createMock<Person>();
  });

  it('should work', () => {
    expect(mock.getName()).toBe('');

    expect(mock.getName).toHaveBeenCalledTimes(1);
  });
});
