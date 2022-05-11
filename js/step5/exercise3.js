const number = [1, 2, 3, 4]
const number2 = [1, 1, 1, 1]
const even = (element) => element % 2 === 0
console.log(number.some(even))
console.log(number2.some(even))