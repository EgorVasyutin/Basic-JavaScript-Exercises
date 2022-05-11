let str = 'lol42.42kek'
strSplit = str.split('')
const strFilter = strSplit.filter((el) => parseInt(el))
const i = str.indexOf(strFilter[0])
const strSlice = str.slice(i)
console.log(parseFloat(strSlice))