// Написать функцию, которая принимает массив чисел
// и возвращает массив той же длины, но с измененными значениями:
// если число имеет целочисленный корень - берется корень
// если нет - то берется квадрат числа
// squareRootOrPower([4,3,9,7,2,1]) -> [2,9,3,49,4,1]

const numbers = [4,3,9,7,2,1]
let numbers2 = []

function squareRootOrPower(){
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i])
        numbers2.push(Math.sqrt(numbers[i]))
    else {
        numbers2.push(numbers[i] * numbers[i])
    }
    }

}
squareRootOrPower()
console.log(numbers2)