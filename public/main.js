const multiples = (input) => {
  let number = Number(input);
  const result = [];

  const highestNumber = {
    7: 100,
    8: 200,
    9: 300,
  };

  number = highestNumber[number];
  console.log(number);

  for (let i = input; i < number; i += input) {
    result.push(i);
  }

  return result;
};

console.log(multiples(7));
console.log(multiples(8));
console.log(multiples(9));

module.exports = multiples;
