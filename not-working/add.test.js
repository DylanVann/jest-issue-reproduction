import add from './add'

test('add', async () => {
    const result = await add(2, 2)
    expect(result).toBe(4)
})
