const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray)).toBeTruthy()

    test('length to equal arguments', () => {
        expect(shuffleArray.length).toEqual(5)
    })
    })
})
