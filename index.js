const readline = require('readline-sync'),
  makeArray = (r, e) => {
    let a = Array(r),
      n = Array(e);
    for (let e = 0; r > e; e++) a[e] = n.slice();
    return a;
  },
  fillArray = (r) => {
    console.log('Введи путь: ');
    for (let e = 0; e < r.length; e++)
      for (let a = 0; a < r[e].length; a++) {
        if (e == a) {
          r[e][a] = 0;
          continue;
        }
        if (void 0 !== r[a][e]) {
          (r[e][a] = r[a][e]), console.log(r[a][e]);
          continue;
        }
        const n = readline.question(`${e + 1} -> ${a + 1} `);
        r[e][a] = +n;
      }
  },
  shortestPathTable = (r, e) => {
    for (let t = 0; t < e[t].length; t++)
      for (let i = 0; i < r.length; i++) {
        var a = 999;
        for (let l = 0; l < r[i].length; l++) {
          e[l][0] = r[l][r.length - 1];
          var n = r[l][i] + e[l][t - 1];
          a > n && (a = n);
        }
        e[i][t] = a;
      }
  },
  integerSize = +readline.question('Количество точек? ');
(array = makeArray(integerSize, integerSize)),
  (result_array = makeArray(integerSize, integerSize - 1)),
  fillArray(array),
  shortestPathTable(array, result_array),
  console.table(array),
  console.table(result_array);
