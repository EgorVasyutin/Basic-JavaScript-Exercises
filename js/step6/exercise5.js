//5. Написать объект с методами рассчета, которая считает площади фигур:
// квадрат, прямоугольник, круг, треугольника, ромб, параллелограма, трапеция
const Square =

      function square(a){
        return Math.pow(a, 2)

}

function rectangle(a, b){
    return a * b
}

function circle (r){
    return 3.14 * r
}

function triangle(a, b, c){
     const p = (a + b + c) / 2
    const s = p * (p - a) * (p - b) * (p - c)
    return Math.floor(Math.sqrt(s) * 100)/100
}

function rhombus(d1, d2){
    return d1 * d2 / 2
}

function parallelogram(b, h){
    return b * h
}

function trapezoid(a, b, h){
    let m = (a + b) / 2
    return m * h
}

console.log(trapezoid(10, 20, 5))



// Square.square(a)           // Square.square(10) => 100
// Square.rectangle(a, b)     // Square.rectangle(10, 20) => 200
// Square.circle(r)           // Square.circle(10) => 314,15
// Square.triangle(a, b, c)   // Square.triangle(10, 15, 20) => 72.61
// Square.rhombus(d1, d2)     // Square.rhombus(10, 20) => 100
// Square.parallelogram(d1, d2, sinA) // Square.parallelogram(3, 5) => 15
// Square.trapezoid(a, b, h)  // Square.trapezoid(10, 20) => 100