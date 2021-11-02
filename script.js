"use strict";

// Scrabble Hand

function maximumScore(tileHand) {
  const result = tileHand.reduce((x, score) => x + score.score, 0);
  return result;
}
console.log(
  maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ])
);

// Printer Levels

function inkLevels(inks) {
  const result = Math.min(...Object.values(inks));
  return result;
}

console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
);

// Return the Objects Keys and Values

function keysAndValues(obj) {
  const result = [];
  result.push([Object.keys(obj)].sort(), [Object.values(obj).sort()]);
  return result;
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

//Make a Circle with OOP

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
let circo = new Circle(20);
console.log(circo.getArea());
console.log(circo.getPerimeter());

// Calculate the Total Price of Groceries

function getTotalPrice(groceries) {
  const result = groceries.reduce((x, a) => x + a.price * a.quantity, 0);
  return result;
}

console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);

// Frequency Distribution

function getFrequencies(arr) {
  const result = arr.reduce(
    (count = 0, x, i) => (x[i] === x[i + 1] ? count++ : count),
    0
  );
  return result;
}
console.log(getFrequencies(["A", "A"]));
