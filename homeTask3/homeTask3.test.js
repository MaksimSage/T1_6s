import { quickSortIterative } from './homeTask3'; 

describe('quickSortIterative', () => {
  test.each([
    [[], []],
    [[1], [1]],
    [[2, 1], [1, 2]],
    [[5, 5, 5, 5], [5, 5, 5, 5]],
    [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
    [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5]],
    [[3, 1, 2, 3, 1, 2], [1, 1, 2, 2, 3, 3]],
  ])('sorts %j → %j', (input, expected) => { 
    const arr = [...input];
    quickSortIterative(arr);
    
    expect(arr).toEqual(expected);
  });
});