const cars = [
    [
        'brand',' lada'
    ],
    [
        'brand',' toyota'
    ]
]

function getObject(){
    let cars2 = []

    for (let i = 0; i < cars.length; i++) {
        cars2.push(cars[i])
    }
    return cars2
}

console.log(getObject())
