/*=====Tulis condingan js disini=====*/
/*===JS internal===*/
/*===cara buat variabel===*/
/*==(keyword) let /const namaVariabel = isiVAriabel/Value/Nilai;==*/
/*==variabel adalah tempat untuk menyimpan nilai/value==*/

// let mtk = 90;
// let dpk = 82;
// let bing = 86;

// let mean = (mtk + dpk + bing) / 3;
// console.log(mean)

// // codingan logika

// if (mean > 85) {
//     grade = "A"
// } else if (mean > 70) {
//     grade = "B"
// } else if (mean > 65) {
//     grade = "C"
// } else if (mean > 40) {
//     grade = "D"
// } else{
//     grade = "E"
// }

// console.log(mean)
// console.log(grade)

// // latihan 1

// let mtk = 76;
// let dpk = 84;
// let bing = 91;
// let science = 52;
// let sunda = 87;

// let mean = (mtk + dpk + bing + science + sunda) / 5;

// if (mean > 90) {
//     grade = "A"
// } else if (mean > 80) {
//     grade = "B"
// } else if (mean > 75) {
//     grade = "C"
// } else if (mean > 71) {
//     grade = "D"
// }else if (mean > 60) {
//     grade = "E"
// }
// else {
//     grade = "BK"
// }

// console.log(mean)
// console.log(grade)

/* 1. angka1-angka50 dan angka50-angka1 dengan for dan while*/
/* 2. cetak tahun 2000 - 2023  dengan do while*/

/* 1 */
// for (let i = 1; i <= 50; i++) {
//   console.log("Angka ke " + i);
// }

// let a = 50;
// while (a >= 1) {
//   console.log("Angka ke " + a);
//   a--;
// }

/* 2 */
let x = 2000;
do {
  console.log("Tahun " + x);
  x++;
} while (x <= 2023);

let y = 2023;
do {
  console.log("Tahun " + x);
  x--;
} while (x >= 2000);
