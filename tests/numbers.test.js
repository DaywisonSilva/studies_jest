const sum = require('../js/numbers/sum')
const divide = require('../js/numbers/divide')

test('add 1 + 2 to be equal 3', () => {
  expect(sum(1, 2)).toBe(3)
  expect(divide(4, 2)).toBe(2)
})
