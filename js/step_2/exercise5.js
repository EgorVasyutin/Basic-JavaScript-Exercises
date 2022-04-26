const a = {
    value: 1,
}
console.log('a', a)
let b = {}
    Object.assign(b, a)
console.log('b', b)
a.value = 2
console.log('a', a)
console.log('b', b)