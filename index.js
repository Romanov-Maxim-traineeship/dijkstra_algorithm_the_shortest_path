// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

function makeArray(height, width) {
  let outputArray = new Array(height);
  let row = new Array(width);
  for (let iy = 0; iy < height; iy++) {
    outputArray[iy] = row.slice();
  }
  return outputArray;
}
array = makeArray(7, 7);
result_array = makeArray(7, 5);

array[0][0] = 0;
array[0][1] = 8;
array[0][2] = 3;
array[0][3] = Infinity;
array[0][4] = 15;
array[0][5] = Infinity;
array[0][6] = Infinity;

array[1][0] = 8;
array[1][1] = 0;
array[1][2] = 13;
array[1][3] = 2;
array[1][4] = 9;
array[1][5] = 4;
array[1][6] = 1;

array[2][0] = 3;
array[2][1] = 13;
array[2][2] = 0;
array[2][3] = 26;
array[2][4] = Infinity;
array[2][5] = Infinity;
array[2][6] = Infinity;

array[3][0] = Infinity;
array[3][1] = 2;
array[3][2] = 26;
array[3][3] = 0;
array[3][4] = Infinity;
array[3][5] = Infinity;
array[3][6] = 6;

array[4][0] = 15;
array[4][1] = 9;
array[4][2] = Infinity;
array[4][3] = Infinity;
array[4][4] = 0;
array[4][5] = 7;
array[4][6] = Infinity;

array[5][0] = Infinity;
array[5][1] = 4;
array[5][2] = Infinity;
array[5][3] = Infinity;
array[5][4] = 7;
array[5][5] = 0;
array[5][6] = 5;

array[6][0] = Infinity;
array[6][1] = 1;
array[6][2] = Infinity;
array[6][3] = 6;
array[6][4] = Infinity;
array[6][5] = 5;
array[6][6] = 0;

for (let k = 0; k < result_array.length - 1; k++) {
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

console.table(result_array);
