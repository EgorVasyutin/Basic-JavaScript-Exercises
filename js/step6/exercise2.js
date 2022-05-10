// 2. Написать функцию countPositivesSumNegatives,
// которая принимает массив чисел и возвращает массив,
// где 1ый элемент - число положительных чисел,
// а 2ой - сумма отрицательных чисел
// Если приходит null, undefined или пустой массив - возвращать пустой массив
// countPositivesSumNegatives([]) => []
// countPositivesSumNegatives(null) => []
// countPositivesSumNegatives(undefined) => []
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// countPositivesSumNegatives(array) => [10, -65]
function countPositivesSumNegatives(array) {
    const isArrayNotEmpty = Array.isArray(array) && array.length > 0
    if (isArrayNotEmpty) {
        const filteredNegatives = array.filter((element) => element < 0)
        const negativesSum = filteredNegatives.reduce((a, b) => a + b, 0)
        const filteredPositives = array.filter((element) => element > 0)
        const i = filteredPositives.length

        return [i, negativesSum]
    }

    return []
}

const r1 = countPositivesSumNegatives([]) // => []
console.log(r1)
const r2 = countPositivesSumNegatives(null) // => []
console.log(r2)
const r3 = countPositivesSumNegatives(undefined) // => []
console.log(r3)
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
const r4 = countPositivesSumNegatives(array) // => [10, -65]
console.log(r4)