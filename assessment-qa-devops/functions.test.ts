const {shuffleArray} = require('./utils')

let array = [3, 7, 8, 4, 6]

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(array))).toBeTruthy()

    test('length to equal arguments', () => {
        expect(shuffleArray(array).length).toEqual(5)
    })
    })
})
