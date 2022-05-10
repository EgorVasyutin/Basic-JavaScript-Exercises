// 6. Написать функцию, которая очищает строку от чисел
// cleanStringFromNumbers('! !') -> '! !'
// cleanStringFromNumbers('123456789') -> ''
// cleanStringFromNumbers('This looks5 grea8t!') -> 'This looks great!'
const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
function cleanStringFromNumbers(str) {
    let strNoNumbers = [];
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if (!digits.includes(str[i])) {
            strNoNumbers.push(str[i]);
        }
    }
    return strNoNumbers.join("");
}
console.log(cleanStringFromNumbers('! !'))
console.log(cleanStringFromNumbers('123456789'))
console.log(cleanStringFromNumbers('This looks5 grea8t!'))