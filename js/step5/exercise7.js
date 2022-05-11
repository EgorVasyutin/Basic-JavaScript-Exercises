const falsyValues = [false, undefined, '', 0, null,]
let a = [false, undefined, '', 0, null, 1, 'dadasdsa']

a = a.filter((element) => {
    return !falsyValues.includes(element)
})
console.log(a)