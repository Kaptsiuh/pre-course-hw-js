const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];

numbers.map((e) => e.map((elem, i) => (elem % 2 === 0 ? e.splice(i, 1) : 0)));

console.log(numbers);
