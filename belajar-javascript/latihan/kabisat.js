/*=== Mencari Tahun Kabisat === */

/*== 1 == */

// let tahun = "";
// for (let tahun = 1600; tahun <= 2024; tahun++) {
//   if (tahun % 4 === 0) {
//     console.log(tahun + " adalah tahun kabisat.");
//   } else if (tahun % 100 !== 0) {
//     console.log(tahun + " bukan tahun kabisat.");
//   } else if (tahun % 400 === 0) {
//     console.log(tahun + " adalah tahun kabisat.");
//   } else {
//     console.log(tahun + " bukan tahun kabisat.");
//   }
// }

/*== 2 == */

let tahun = "";
for (let tahun = 1600; tahun <= 2024; tahun++) {
  if (tahun % 4 === 0 && tahun !== 1800 && tahun != 1700 && tahun != 1900) {
    console.log(tahun + " adalah tahun kabisat.");
  } else if (tahun % 100 !== 0) {
    console.log(tahun + " bukan tahun kabisat.");
  } else if (tahun % 400 === 0) {
    console.log(tahun + " adalah tahun kabisat.");
  } else {
    console.log(tahun + " bukan tahun kabisat.");
  }
}
