// import { makeArray } from './makeArray.js';
// import { fillArray } from './fillArray';
// import { shortestPathTable } from './shortestPathTable';
const readline = require('readline-sync');

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
        console.log(array[j][i]);
        continue;
      }
      const numberForArray = readline.question(`${i + 1} -> ${j + 1} `);

      array[i][j] = Number(numberForArray);
    }
  }
};

const shortestPathTable = (array, result_array) => {
  for (let k = 0; k < result_array[k].length; k++) {
    for (let j = 0; j < array.length; j++) {
      var min = 999;
      for (let i = 0; i < array[j].length; i++) {
        result_array[i][0] = array[i][array.length - 1];
        var sum = array[i][j] + result_array[i][k - 1];
        if (sum < min) min = sum;
      }
      result_array[j][k] = min;
    }
  }
};

const integerSize = Number(readline.question('Количество точек? '));
array = makeArray(integerSize, integerSize);
result_array = makeArray(integerSize, integerSize - 1);
fillArray(array);
shortestPathTable(array, result_array);

console.table(array);
console.table(result_array);
