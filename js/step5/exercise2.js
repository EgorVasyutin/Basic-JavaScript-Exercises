const number = [1, 2, 3, 4];

const even = (element) => element % 2 === 0
const newArray = number.filter(even)

console.log(newArray.reduce( (a, b) => a + b,))