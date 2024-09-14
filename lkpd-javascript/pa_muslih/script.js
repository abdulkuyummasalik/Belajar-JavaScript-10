// let terbesar = -Infinity;
// let terkecil = Infinity;
// let jumlah = 0;

// for (let a = 0; a < 3; a++) {
//     let nilai = parseInt(prompt(`masukan nilai :`));
    
//     if (nilai > terbesar) {
//         terbesar = nilai;
//   }

//   if (nilai < terkecil) {
//       terkecil = nilai;
//     }
//     jumlah = jumlah + nilai;
    
// }
// let rataRata = jumlah/3

// console.log(`Nilai terbesar adalah : ${terbesar}`);
// console.log(`Nilai terkecil adalah : ${terkecil}`);
// console.log(`Nilai rata-rata adalah : ${rataRata}`);
// console.log(`Jumlah Nilai adalah : ${jumlah}`);

let terbesar = -Infinity;
let terkecil = Infinity;
let jumlah = 0;
let namaTerbesar = ""

for (let a = 0; a < 3; a++) {
    let nama = prompt(`masukan nama :`);
  let nilai = parseInt(prompt(`masukan nilai :`));

  if (nilai > terbesar) {
    terbesar = nilai;
    namaTerbesar = nama;
  }

  if (nilai < terkecil) {
    terkecil = nilai;
  }
  jumlah = jumlah + nilai;
}
let rataRata = jumlah / 3;

console.log(`Nilai terbesar adalah : ${terbesar} (${namaTerbesar})`);
console.log(`Nilai terkecil adalah : ${terkecil}`);
console.log(`Nilai rata-rata adalah : ${rataRata}`);
console.log(`Jumlah Nilai adalah : ${jumlah}`);

