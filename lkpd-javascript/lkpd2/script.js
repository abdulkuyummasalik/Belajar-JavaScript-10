// 1.
let gajiPokok = 200000;
let tunjangan = 0.2 * gajiPokok;
let pajak = 0.15 * (gajiPokok + tunjangan);
let gajiBersih = gajiPokok + tunjangan - pajak;
let nama = "Khoyum";

console.log(`Namanya adalah ${nama}`);
console.log(`Gaji pokoknya adalah ${gajiPokok}`);
console.log(`Tunjangannya adalah ${tunjangan}`);
console.log(`Pajaknya adalah ${pajak}`);
console.log(`Gaji bersihnya adalah ${gajiBersih}`);

// // 2.
let jam = 1;
let menit = 30;
let detik = 40;

let totalDetik = jam * 3600 + menit * 60 + detik;

console.log(jam + " jam");
console.log(menit + " menit");
console.log(detik + " detik");
console.log("Total detik: " + totalDetik);

// // 3.
// let totalDetik = 5440;

// let jam = parseInt(totalDetik / 3600);
// let sisaDetik1 = totalDetik % 3600;
// let menit = parseInt(sisaDetik1 / 60);
// let detik = sisaDetik1 % 60;

// console.log(totalDetik + " detik adalah");
// console.log("Jam: " + jam);
// console.log("Menit: " + menit);
// console.log("Detik: " + detik);