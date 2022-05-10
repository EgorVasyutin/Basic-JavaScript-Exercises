// Написать функцию, которая принимает массив чисел
// и возвращает массив той же длины, но с измененными значениями:
// если число имеет целочисленный корень - берется корень
// если нет - то берется квадрат числа
// squareRootOrPower([4,3,9,7,2,1]) -> [2,9,3,49,4,1]




function squareRootOrPower(num) {
    let numbers = []
    num = num.toString().split('')
    console.log(num)
    for (let i = 0; i < num.length; i++) {
        if (Math.sqrt(num[i]) === Math.round(Math.sqrt(num[i]))) {
            numbers.push(num[i])
        }else {
            numbers.push(Math.pow(num[i], 2))
        }
    }
    return numbers.join()
}

let n = [4, 3, 9, 7, 2, 1]
console.log(squareRootOrPower([439721]))