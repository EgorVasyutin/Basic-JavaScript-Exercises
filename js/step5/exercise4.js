const number = [-1, -2, -3]
const number2 = [1, 2, 3]
const number3 = [-1, 0, 3]

const even = (element) => element > 0
console.log(number.every(even))
console.log(number2.every(even))
console.log(number3.every(even))