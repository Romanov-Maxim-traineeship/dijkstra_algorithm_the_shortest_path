const readline = require('readline-sync');
var way = [];

const makeArray = (height, width) => {
  let outputArray = new Array(height);
  let row = new Array(width);
  for (let iy = 0; iy < height; iy++) {
    outputArray[iy] = row.slice();
  }
  return outputArray;
};

const fillArray = (array) => {
  console.log('Введи путь: ');
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i == j) {
        array[i][j] = 0;
        continue;
      } else if (typeof array[j][i] !== 'undefined') {
        array[i][j] = array[j][i];
        continue;
      }
      const numberForArray = readline.question(`${i + 1} -> ${j + 1} `);

      array[i][j] = +numberForArray;
    }
  }
  return array;
};

const shortestPathTable = (array = [], way = []) => {
  let resultArray = makeArray(array.length, array.length - 1);
  for (let k = 0; k < array.length - 2; k++) {
    for (let j = 0; j < array.length - 1; j++) {
      let min = (currentPoint = Infinity);
      for (let i = 0; i < array[j].length; i++) {
        resultArray[i][0] = array[i][array.length - 1];
        resultArray[resultArray.length - 1][j] = 0;
        if (i == j) continue;
        var sum = array[i][j] + resultArray[i][k];
        if (sum < min) {
          min = sum;
          currentPoint = i;
        }
      }
      way.push(`${j + 1} -> ${currentPoint + 1}`);
      resultArray[j][k + 1] = min;
    }
  }
  return resultArray;
};

console.clear();
const integerSize = +readline.question('Количество точек? ');
console.clear();
answer = fillArray(makeArray(integerSize, integerSize));

console.clear();
console.table(answer);
console.table(shortestPathTable(answer, way));
console.table(way.slice(-integerSize + 1));
