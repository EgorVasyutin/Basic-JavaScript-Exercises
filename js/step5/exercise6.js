function getRandomNumber(n) {
    const arr = []
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.random()* 100
        arr.push(Math.round(randomNumber))
    }
    return arr
}
const result = getRandomNumber(1)


console.log(result)
