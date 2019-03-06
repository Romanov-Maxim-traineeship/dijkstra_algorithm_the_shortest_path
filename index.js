function makeArray(height, width) {
  let outputArray = new Array(height);
  let row = new Array(width);
  for (let iy = 0; iy < height; iy++) {
    outputArray[iy] = row.slice();
  }
  return outputArray;
}
const infinity = 999;
array = makeArray(6, 6);
result_array = makeArray(6, 4);

array[0][0] = 0;
array[0][1] = 1;
array[0][2] = infinity;
array[0][3] = 10;
array[0][4] = 9;
array[0][5] = infinity;

array[1][0] = 1;
array[1][1] = 0;
array[1][2] = 8;
array[1][3] = 2;
array[1][4] = 11;
array[1][5] = infinity;

array[2][0] = infinity;
array[2][1] = 8;
array[2][2] = 0;
array[2][3] = 3;
array[2][4] = 6;
array[2][5] = 4;

array[3][0] = 10;
array[3][1] = 2;
array[3][2] = 3;
array[3][3] = 0;
array[3][4] = infinity;
array[3][5] = 5;

array[4][0] = 9;
array[4][1] = 11;
array[4][2] = 6;
array[4][3] = infinity;
array[4][4] = 0;
array[4][5] = 7;

array[5][0] = infinity;
array[5][1] = infinity;
array[5][2] = 4;
array[5][3] = 5;
array[5][4] = 7;
array[5][5] = 0;

for (let j = 0; j < array.length; j++) {
  result_array[j][0] = array[j][array.length - 1];
}

var number = [];

for (let j = 0; j < array.length; j++) {
  var min = infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i][j] + result_array[i][0] < min) {
      min = array[i][j] + result_array[i][0];
    }
  }
  result_array[j][1] = min;
}

for (let k = 0; k < result_array.length; k++) {
  for (let j = 0; j < array.length; j++) {
    var min = infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i][j] + result_array[i][k] < min) {
        min = array[i][j] + result_array[i][k];
      }
    }
    result_array[j][k + 1] = min;
  }
}

console.log(result_array);
