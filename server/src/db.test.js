import { afterEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { getUserByUsername } from './db';
import { getDatabaseData, resetDatabase, setDatabaseData } from './test-helper';

describe('getUserByUsername', () => {
  it('get the correct user from the database given a username', async () => {
    afterEach('reset the database', async () => {
      await resetDatabase();
    });

    const fakeData = [
      {
        id: '123',
        username: 'abc',
        email: 'abc@gmail.com',
      },
      {
        id: '124',
        username: 'wrong',
        email: 'wrong@wrong.com',
      },
    ];

    await setDatabaseData('users', fakeData);

    const actual = await getUserByUsername('abc');
    const finalDBState = await getDatabaseData('users');

    const expected = {
      id: '123',
      username: 'abc',
      email: 'abc@gmail.com',
    };

    expect(actual).excludingEvery('_id').to.deep.equal(expected);
    expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);
  });

  it('returns null when the user is not found', async () => {
    afterEach('reset the database', async () => {
      await resetDatabase();
    });

    const fakeData = [
      {
        id: '123',
        username: 'abc',
        email: 'abc@gmail.com',
      },
    ];

    await setDatabaseData('users', fakeData);

    const actual = await getUserByUsername('def');

    const expected = null;
    expect(actual).to.equal(expected);
    // expect(actual).to.be.null;
  });
});
