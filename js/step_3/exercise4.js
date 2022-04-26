function equation (a, b, c) {
    let D = b * b - 4 * a * c;
    console.log('D =', D);
    const x1 = (-b + (Math.sqrt(D)) ) / (2 * a);
    const x2 = (-b - (Math.sqrt(D)) ) / (2 * a);
    return {
        x1,
        x2
    };
}
const otvet = equation(1, 3, -18);//0  0.25

console.log('x1,2 =', otvet);


