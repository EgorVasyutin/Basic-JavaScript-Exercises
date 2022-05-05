//Написать функцию, которая принимает массив чисел и возвращает их сумму
// const numbers = [1, 2, 3, 4]
//
// const getSum = numbers.reduce((a, b) => a + b,)
// console.log(getSum)


//Написать функцию, которая принимает массив чисел и возвращает сумму чётных чисел
// const number = [1, 2, 3, 4];
//
// const even = (element) => element % 2 === 0
// const newArray = number.filter(even)
//
// console.log(newArray.reduce( (a, b) => a + b,))



//Написать функцию, которая принимает массив чисел и возвращает true,
//если хотя бы один элемент четный; протестировать минимум на двух массивах - с четными, без четных чисел;
//использовать функцию some
// const number = [1, 2, 3, 4]
// const number2 = [1, 1, 1, 1]
// const even = (element) => element % 2 === 0
// console.log(number.some(even))
// console.log(number2.some(even))


//Написать функцию, которая принимает массив чисел и возвращает true,
// если все элементы неотрицательные; протестировать минимум на трех массивах - только с отрицательными, только с положительными,
// с + и -; использовать функцию some
// const number = [-1, -2, -3]
// const number2 = [1, 2, 3]
// const number3 = [-1, 0, 3]
//
// const even = (element) => element > 0
// console.log(number.every(even))
// console.log(number2.every(even))
// console.log(number3.every(even))

//Написать функцию, которая принимает массив чисел [ 1, 2, 3, 6, 4, 5] и возвращает индекс первой 6ки
// const number = [1, 2, 3, 6, 4, 5]
//
//
// console.log(number.findIndex((element) => element === 6))


//Написать функцию которая возвращает массив случайных чисел; принимает кол-во элементов в массиве, возвращает массив;

// function getRandomNumber(n) {
//     const arr = []
//     for (let i = 0; i < n; i++) {
//         const randomNumber = Math.random()* 100
//         arr.push(Math.round(randomNumber))
//     }
//     return arr
// }
// const result = getRandomNumber(1)
//
//
// console.log(result)


//Написать функцию, которая очищает массив от falsy значений (false, undefined, пустые строки, ноль, null)
// const falsyValues = [false, undefined, '', 0, null,]
// let a = [false, undefined, '', 0, null, 1, 'dadasdsa']
//
// a = a.filter((element) => {
//     return !falsyValues.includes(element)
// })
// console.log(a)


//Перевести строку ‘lol42kek’ в целое число
// let str = 'lol42kek'
// strSplit = str.split('')
// const strFilter = strSplit.filter((el) => parseInt(el))
// const i = str.indexOf(strFilter[0])
// const strSlice = str.slice(i)
// console.log(parseInt(strSlice))


// Перевести строку ‘lol42.42kek’ в дробное число
// let str = 'lol42.42kek'
// strSplit = str.split('')
// const strFilter = strSplit.filter((el) => parseInt(el))
// const i = str.indexOf(strFilter[0])
// const strSlice = str.slice(i)
// console.log(parseFloat(strSlice))



//Написать функцию, которая принимает массив и разделяет его на подмассивы заданной длины: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]    ----------------------
// let array = [1, 2, 3, 4, 5]
// console.log(array)



//Написать функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - значение    ----------------------
// const cars = [
//     [
//         'brand',' lada'
//     ],
//     [
//         'brand',' toyota'
//     ]
// ]
// let cars2 = {}
// function getObject(){
//     for (let i = 0; i < cars.length; i++) {
//         cars[i].push(cars2)
//     }
//     return cars2
// }
//
// console.log(getObject())


