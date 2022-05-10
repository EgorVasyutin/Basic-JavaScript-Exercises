// 9. Написать функцию mergeArrays(array1, array2) слияния двух отсортированных массивов.
// Принимает 3 аргумента: 2 обязательных - массивы, 1 необязательный - тип сортировки
// Тип сортировки может быть или asc (по возрастанию), или desc (по убыванию)
// По умолчанию сортировка по возрастанию

function mergeArrays(array1, array2) {
    const d = [1,2,3,4,5,6,7,8,9,0,]
    let arrays = []
    for (let i = 0; i < d.length; i++) {
        for (let k = 0; k < array2.length; k++) {
        for (let j = 0; j < array1.length; j++) {
                if (array1[j] === d[i]) {
                    arrays.push(array1[j])
                }
                if (array2[k] === d[i]) {
                    arrays.push(array2[k])
                }

            }
        }
    }
    arrays.sort()
    for (let i = 0; i < arrays.length; i++) {
        arrays = arrays[i]
        if (arrays.includes('desc')){
            arrays.push(arrays.split('').reverse().join())
        }
    }



    return arrays
}




// console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10,]))
// // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //
// //
// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]))
// // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //
// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2], 'asc'))
// // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //
// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2], 'desc'))
// -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//
//
// mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])
// -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
//
// mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12], 'desc')
// -> [12, 11, 10, 9, 7, 5, 4, 3, 2, 1]