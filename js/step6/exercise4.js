// 4. Написать функцию noSpace(str), которая принимает строку,
// удаляет все пробелы в ней и возвращает получившуюся строку
// noSpace( '8 j 8   mBliB8g  imjB8B8  jl  B') => '8j8mBliB8gimjB8B8jlB'
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') => '88Bifk8hB8BB8BBBB888chl8BhBfd'
// noSpace('8aaaaa dddd r     ') => '8aaaaaddddr'
const str = '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'
let strNoSpace = []
function noSpace(str1){
    str1 = str.split('')
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === ' '){
        }else {
            strNoSpace.push(str1[i])
        }
    }
}
noSpace()
console.log(strNoSpace.join(''))