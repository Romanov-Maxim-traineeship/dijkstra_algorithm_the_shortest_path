const readline = require('readline-sync');
var way = [];
const makeArray = (a, b) => {
    let c = Array(a),
      d = Array(b);
    for (let e = 0; e < a; e++) c[e] = d.slice();
    return c;
  },
  fillArray = (a) => {
    console.log('\u0412\u0432\u0435\u0434\u0438 \u043F\u0443\u0442\u044C: ');
    for (let b = 0; b < a.length; b++)
      for (let c = 0; c < a[b].length; c++) {
        if (b == c) {
          a[b][c] = 0;
          continue;
        } else if ('undefined' != typeof a[c][b]) {
          a[b][c] = a[c][b];
          continue;
        }
        const d = readline.question(`${b + 1} -> ${c + 1} `);
        a[b][c] = +d;
      }
    return a;
  },
  shortestPathTable = (a = [], b = []) => {
    let c = makeArray(a.length, a.length - 1);
    for (let e = 0; e < a.length - 2; e++)
      for (let f, g = 0; g < a.length - 1; g++) {
        f = currentPoint = 1 / 0;
        for (let b = 0; b < a[g].length; b++)
          if (
            ((c[b][0] = a[b][a.length - 1]), (c[c.length - 1][g] = 0), b != g)
          ) {
            var d = a[b][g] + c[b][e];
            d < f && ((f = d), (currentPoint = b));
          }
        b.push(`${g + 1} -> ${currentPoint + 1}`), (c[g][e + 1] = f);
      }
    return c;
  };
console.clear();
const integerSize = +readline.question(
  '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0447\u0435\u043A? '
);
console.clear(),
  (answer = fillArray(makeArray(integerSize, integerSize))),
  console.clear(),
  console.table(answer),
  console.table(shortestPathTable(answer, way)),
  console.table(way.slice(-integerSize + 1));
