// Bucles

// for
for (let i = 0; i < 5; i++) {
  console.log(`Hola ${i + 1}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento: ${numbers[i]}`)
}

// while
let i = 0
while (i < 5) {
  console.log(`Hola ${i + 1}`)
  i++
}
i = 0
// do while
do {
  console.log(`Hola ${i + 1}`)
  i++
} while (i < 5)
myArray = [1, 2, 3, 4]
mySet = new Set(["lorenzo", "xd", 37])
myMap = new Map([
  ["name", "Lorenzo"],
  ["años", 23],
  ["Email", "lorenzograizzaro55@gmail.com"],
])
// for of
for (let valor of myArray) {
  console.log(valor)
}
for (let valor of mySet) {
  console.log(valor)
}
for (let valor of myMap) {
  console.log(valor)
}
let myString = "Hola Mundo"

for (let valor of myString) {
  console.log(valor)
}
