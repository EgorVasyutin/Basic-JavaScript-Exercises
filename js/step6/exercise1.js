// 1. Написать фукнцию, которая принимает число
// и возвращет перевернутый массив цифр этого числа
// getReversedDigitArray(348597) => [7,9,5,8,4,3]
// getReversedDigitArray(0) => [0]
let numbers = 348597
let numbersArray = []
function getReversedDigitArray(num) {
    num = [numbers]
    let numArraySplit = num.split('')
    console.log(numArraySplit)
    let numArrayReverse = numArraySplit.reverse()
    let numArrayJoin = numArrayReverse.join()
    numArrayJoin.push(numbersArray)
}
getReversedDigitArray()
console.log(numbersArray)
