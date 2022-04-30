// самописная функция поиска минимального числа в массиве
function max(array) {
    if (!Array.isArray(array)) {
        console.log('это не массив')
        return -1
    }

    if (array.length < 1) {
        console.log('минимального значения нет в пустом массиве')
        return -1
    }

    if (Number.isNaN(array[0])) {
        console.log('это не число')
        return -1
    }


    let max = array[0] // 1

    if (array.length >= 2) {
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
    }

    return max
}


const array = [-4, -2, -3]
const maxValue = max(array)
console.log('array = ', array) // [1,2,3]
console.log('max = ', maxValue) // 1



