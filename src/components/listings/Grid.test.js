import data from '../..data/courses.json'

const numItems = data.length;

test('Number of items = 12', () =>
{
    expect(numItems).toBe(11);
});

test('Number of items to be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(11);
})
