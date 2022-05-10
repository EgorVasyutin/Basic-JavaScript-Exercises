// 1. Написать фукнцию, которая принимает число
// и возвращет перевернутый массив цифр этого числа
// getReversedDigitArray(348597) => [7,9,5,8,4,3]
// getReversedDigitArray(0) => [0]


function getReversedDigitArray(num) {
    num = num.toString()
    let numArraySplit = num.split('')
    let numArrayReverse = numArraySplit.reverse()
    let numArrayJoin = numArrayReverse.join('')
    return numArrayJoin
}


console.log(getReversedDigitArray(348597))
