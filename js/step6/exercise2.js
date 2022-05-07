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
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
let array2 = []
const arrayFalsy = [[], null, undefined]

function countPositivesSumNegatives(array3, array4, arrayF) {
    const even = (element) => element >= 0
    array3 = array.filter(even)
    // console.log(array3)
    const getSumArray2 = array3.reduce((a, b) => a + b)
    array2.push(getSumArray2)
    // console.log(array2)
    const even2 = (element) => element < 0
    array4 = array.filter(even2)
    // console.log(array3)
    const getSumArray3 = array4.reduce((a, b) => a + b)
    array2.push(getSumArray3)
    // console.log(array2)
    // for (let i = 0; i < arrayFalsy.length; i++) {
    //     const even3 = (element) => element === arrayFalsy[i]
    //     arrayF = array.filter(even3)
    //     array2.push([])
    // }

    return array2
}
const result = countPositivesSumNegatives()
console.log(result)