// let base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < base.length; i++) {
//   for (let j = 0; j < base.length; j++) {
//     console.log(`${base[i]} x ${base[j]} = ${base[i] * base[j]}`);
//   }
// }

let x = 1;

while(x <= 10) {
  let y = 1;
  while(y <= 10) {
    console.log(`${x} x ${y} = ${x * y}`);
    y++;
  }
  x++;
}

// let num = 0;

// while(num >= -10) {
//   console.log(num);
//   num--;
// }