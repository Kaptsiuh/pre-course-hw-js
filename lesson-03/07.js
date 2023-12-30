const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];

console.log(numbers.map((e) => e.filter((elem) => elem % 2 !== 0)));
