import sum from '@/hooks/sum.js';

test('1 + 1 equal to 2', () => {
  const result = sum(1, 1);
  expect(result).toBe(2);
});
