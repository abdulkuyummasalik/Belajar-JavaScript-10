/*===== 4 January 2024 =====*/

/*=== Factorial Menggunakan For === */

// let angka = 5;
// let faktorial = 1;

// if (angka < 0) {
//   console.log("Input Harus Non-Negatif");
// } else {
//   for (let i = 2; i <= angka; i++) {
//     faktorial *= i;
//   }
//   console.log(`Faktorial dari ${angka} adalah : ${faktorial}`);
// }

/*=== Factorial Menggunakan While === */

// let angka = 5;
// let faktorial = 1;

// if (angka < 0) {
//   console.log("Input Harus Non-Negatif");
// } else {
//   let i = 1;
//   while (i <= angka) {
//     faktorial *= i;
//     i++;
//   }
//   console.log(`Faktorial dari ${angka} adalah : ${faktorial}`);
// }

/*=== Factorial Menggunakan Do-While === */

// let angka = 5;
// let faktorial = 1;

// if (angka < 0) {
//   console.log("Input Harus Non-Negatif");
// } else {
//   let i = 1;
//   do {
//     faktorial *= i;
//     i++;
//   } while (i <= angka);
//   console.log(`Faktorial dari ${angka} adalah : ${faktorial}`);
// }


/*===== factorial =====*/

/*=== factorial dari 5 ===*/

// let angka = 5;
// let faktorial = 6;

// for (let i = 1; i <= angka; i++) {
//   faktorial *= i;
// }

// console.log("Faktorial dari " + angka + " adalah: " + faktorial);

/*=== Penjumlahan dari factorial 5 ===*/

let angka = 5;
let faktorial = 0;

for (let i = 1; i <= angka; i++) {
  faktorial += i;
}

console.log("Penjumlahan dari 1 + 2 + 3 + 4 + " + angka + " adalah: " + faktorial);
