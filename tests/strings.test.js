test('testing string', () => {
  const name = 'Daywison da Silva de Sousa'

  expect(name).toEqual(expect.stringContaining('Sousa'))
})
