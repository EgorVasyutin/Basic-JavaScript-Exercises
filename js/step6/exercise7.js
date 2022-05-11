//7. Написать функцию, которая аргументами принимает 2 символа
// и сравнивает их по регистру:
// возвращает 1, если оба символа в одном регистре (оба большие или оба маленькие)
// возвращает 0, если символы разных регистров
// возвращает -1, если хотя бы символ не я является буквой





// 7. Написать функцию, которая аргументами принимает 2 символа
// и сравнивает их по регистру:
// возвращает 1, если оба символа в одном регистре (оба большие или оба маленькие)
// возвращает 0, если символы разных регистров
// возвращает -1, если хотя бы символ не я является буквой
function isSameCase(a, b) {
    const isALetter = /[A-Za-z]/.test(a);
    const isBLetter = /[A-Za-z]/.test(b);
    if (!isALetter || !isBLetter) {
        return -1;
    }

    const areAandBUpperCase = a === a.toUpperCase() && b === b.toUpperCase();
    const areAandBLowerCase = a === a.toLowerCase() && b === b.toLowerCase();

    return areAandBUpperCase || areAandBLowerCase ? 1 : 0;
}

console.log("a", "b", isSameCase("a", "b")); //=> 1
console.log("a", "g", isSameCase("a", "g")); //=> 1
console.log("A", "C", isSameCase("A", "C")); // => 1
console.log("B", "g", isSameCase("B", "g")); //=> 0
console.log("t", "E", isSameCase("B", "g")); //=> 0
console.log("0", "?", isSameCase("0", "?")); //=> -1
console.log("a", "1", isSameCase("a", "?")); // => -1



console.log(isSameCase('a', 'b'))
console.log(isSameCase('a', 'g') )//=> 1)
console.log(isSameCase('A' , 'C'))// => 1)
console.log(isSameCase('B' , 'g')) //=> 0)
console.log(isSameCase('0' , '?')) //=> -1)
console.log(isSameCase('a' , '?')) // => -1)








