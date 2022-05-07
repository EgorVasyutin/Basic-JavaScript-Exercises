// 6. Написать функцию, которая очищает строку от чисел
// cleanStringFromNumbers('! !') -> '! !'
// cleanStringFromNumbers('123456789') -> ''
// cleanStringFromNumbers('This looks5 grea8t!') -> 'This looks great!'
const str = '123456789'
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let strNoNumbers = []
function cleanStringFromNumbers(str1){
    str1 = str.split('')
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < num.length; j++) {
            // console.log(num[j])
            if (str1[i] === num[j]){
            }else {
                strNoNumbers.push(str1[i])
            }
        }
    }
}
cleanStringFromNumbers()
console.log(strNoNumbers.join(''))