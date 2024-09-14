/* 1. Buatlah algoritma menghitung jumlah uang yang harus dibayarkan pembeli berdasarkan 
beratnnya buah jeruk yang dibeli.diketahui bahwa harga barang per kg adalah 500 rupiah / 100 gram. 
diketahui pula pembeli berhak mendapatkan diskon sebesar 5 %.hasil keluaran yang diinginkan adalah 
total harga sebelum diskon,  diskon, dan total harga sesudah diskon**/

let berat = 1000;
let perGram = 100;
let perKg = 500;
let sebelum = (berat / perGram) * perKg;
let diskon = sebelum * 0.05;
let sesudah = sebelum - diskon;

console.log("Ini Sebelum Diskon " + sebelum);
console.log("Ini Diskon " + diskon);
console.log("Ini Sesudah Diskon " + sesudah);

/* 2. Buatlah algoritma yang meminta input sebuah bilangan bulat, kemudian algoritma akan memberikan
keluaran (output) berupa angka satuan, puluhan, dan ratusan. contohnya, apabila diinputkan bilangan 
1.234.567 (1 juta 234 ribu 567), maka algoritma akan menghasilkan output bilangan 7 satuan, 6 puluhan, 
dan 5 ratusan. apabila diinputkan bilangan 73 (tujuh puluh tiga) maka algoritma akan menghasilkan 
output bilangan 3 satuan, 7 puluhan, 0 ratusan.*/

let bilangan = 1234567;

let satuan = bilangan % 10;
let puluhan = Math.floor(bilangan / 10) % 10;
let raturan = Math.floor(bilangan / 100) % 10;

console.log("satuan adalah " + satuan);
console.log("puluhan adalah " + puluhan);
console.log("ratusan adalah " + raturan);

/* 3. Diketahui bahwa cuaca dikatan panas apabila temperatuenya lebih dari 300C dan cuaca dikatan dingin 
apabila temperatur nya kurang dari 250C. buatlah algoritma untuk mencetak kata "Panas", "Dingin", 
atau "Normal" sesuai dengan temperatur yang di inputkan user. temperatur yang diinputkan oleh user 
adalah dalam satuan derajat fehrenhrit.*/

let suhuFahrenheit = 200;

let suhuCelcius = Math.floor(((suhuFahrenheit - 32) * 5) / 9);

if (suhuCelcius > 300) {
  suhu = "Panas";
} else if (suhuCelcius < 250) {
  suhu = "Dingin";
} else {
  suhu = "Normal";
}
console.log(`suhunya ${suhuCelcius} dan termasuk ${suhu}`);
