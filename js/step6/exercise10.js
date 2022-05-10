// 10. Написать фукнцию перевода двоичного числа в десятичное
// binToDec('10') => 2
// binToDec('101') => 5
// binToDec('10101') => 21

function binToDec(a){
    let b = parseInt(a, 2)
    return b
}

console.log(binToDec('10'))// => 2
console.log(binToDec('101'))// => 5
console.log(binToDec('10101')) // => 21