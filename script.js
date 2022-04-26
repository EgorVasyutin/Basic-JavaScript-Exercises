
// function getFirstVowel(str){
//     let Vowel = ['a', 'e', 'i', 'o', 'u', 'y']
//     let slovo = 'hello';
//
//     if (Vowel[1] >= slovo[1]){
//         console.log(1)
//     }
//
// }


































const array  = [11,12,13,14,15,16]
const array2 = []

for (let i = 0; i <  array.length; i++) {
    const n = array[i]
    // записываю значение в массив 2, если оно четное
    if (n % 2 === 0) {
        array2.push(n)
    }

}
console.log(array2)