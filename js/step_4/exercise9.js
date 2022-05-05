const  vowels = ['a', 'e', 'i', 'o', 'u', 'y']
const vowels2 = []
let str = 'hdaddedello'
str = str.split('')
function getFirstVowelIndex(s){
    s = str
    for (let charIndex = 0; charIndex < s.length; charIndex++){
        for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
            if (vowels[vowelIndex] === s[charIndex]) {
                return charIndex
            }
        }
    }
}

console.log(getFirstVowelIndex(str))