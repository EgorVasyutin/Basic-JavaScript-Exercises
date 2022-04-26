const  vowels = ['a', 'e', 'i', 'o', 'u', 'y']
const vowels2 = []

function getFirstVowelIndex(s){

    for (let charIndex = 0; charIndex < s.length; charIndex++){
        for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
            if (vowels[vowelIndex] === s[charIndex]) {
                return charIndex
            }
        }
    }
}
const str = 'hddddello'
console.log(getFirstVowelIndex(str))
