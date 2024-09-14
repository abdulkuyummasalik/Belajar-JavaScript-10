/*===== 2 January 2024 =====*/

/*
#DEFINISI
    pengulangan (looping) adalah bagaian yang bertugas melakukan kegiaatan berunalng ulang sesuai dengan yang di inginkan)

#BAGIAN-BAGIAN
    1. Inisialisasi merupakan kondisi awal sebelum melakukan pengulangan.
    2. Kondisi penghentian (Stopping conditions) meerupakan kondisi dimana pengulangan akan berhenti.
    3. Pengatur iterasi merupakan kondisi agar pengulangan terus berjalan.
    4. Proses adalah bagian yang akan dilakukan berulang-ulang selama kondisi penghentian belum terpenuhi.

#JENIS-JENIS
    1. Do - while
    2. While
    3. For
**/

// awalnya gini
// console.log("sesuatu");
// console.log("sesuatu");
// console.log("sesuatu");
// console.log("sesuatu");
// console.log("sesuatu");
// console.log("sesuatu");
// console.log("sesuatu");
// console.log("sesuatu");
// console.log("sesuatu");
// console.log("sesuatu");

// menjadi gini

// // for
// // DiConsole
// for (let i = 0; i < 10; i++){
//     console.log("sesuatu");
// }
// // DiHTML
// for (let i = 1; i <= 20; i++) {
//   document.write(i + "<br>");
// }
// for (let i = 20; i >= 1; i--) {
//   document.write(i + "<br>");
// }
// for (let i = 5; i >  0 ; i--){
//     console.log('mesin nyala')
//     document.write("<p>Mesin nyala</p>");
// }

// While

// // inisialisasi
// jp = 6;
// // lopping
// while (jp <= 4) {
//   document.write("<h1>Sedang Belajar DPK</h1>");
//   // itersi
//   jp++;
// }
// while (jp > 4 && jp <= 8) {
//   document.write("<h1>Sedang Belajar PIPAS</h1>");
//   jp++;
// }

// //TUGASS
// // buat dari 1-40 dan 40-1 dengan for dan while
// for (let i = 1; i <= 40; i++) {
//   document.write(i + "<br>");
// }
// for (let c = 40; c >= 1; c--) {
//   document.write(c + "<br>");
// }

// b = 1;
// while (b <= 40) {
//   console.log(b);
//   b++;
// }
// a = 40;
// while (a > 0) {
//   console.log(a);
//   a--;
// }

// do-while
// inisialisai
// x = 30;
// do {
//   document.write("<p>semangat prod</p>");
//   // iterasi
//   x--;
//   // kondisi berhenti
// } while (x >= 20);

// repeo baru
// belajar js
// 1. angka1-angka50 dan angka50-angka1 dengan for dan while
// 2. cetak tahun 2000 - 2023  dengan do while

// //1
// for (let i = 1; i <= 50; i++) {
//   console.log("Angka ke " + i);
// }

// let a = 50;
// while (a >= 1) {
//   console.log("Angka ke " + a);
//   a--;
// }

// //2
// let x = 2000;
// do {
//   console.log("Tahun " + x);
//   x++;
// } while (x <= 2023);

// let y = 2023;
// do {
//   console.log("Tahun " + x);
//   x--;
// } while (x >= 2000);


/*===== For, While, dan Do-While =====*/
/*===== Inisialisasi, Aksi, dan Iterasi =====*/

/*=== For Angka 1 - 50 ===*/

// for (let angka = 1; angka <= 50; angka++) {
//   console.log(angka);
// }

/*=== While Angka 1 - 50 ===*/

// let angka = 1;

// while (angka <= 50) {
//   console.log(angka);
//   angka++;
// }

/*=== Do-While Angka 1 - 50 ===*/
// let angka = 1;
// do {
//   console.log(angka);
//   angka++;
// } while (angka <= 50);

/*=== For Ganji dan Genap ===*/

// for (let angka = 1; angka <= 50; angka++) {
//   if (angka % 2 === 0) {
//     document.write("<p>" + "No. " + angka + " Adalah Bilangan Genap </p>");
//   } else {
//     document.write("<p>" + "No. " + angka + " Adalah Bilangan Ganjil </p>");
//   }
// }

/*=== While Ganji dan Genap ===*/

// let angka = 0;

// while (angka <= 50) {
//     if (angka % 2 === 0) {
//         console.log(angka + " Adalah Bilangan Genap");
//     } else {
//         console.log(angka + " Adalah Bilangan Ganjil");
//     }
//     angka++;
// }

/*=== Do-While Ganji dan Genap ===*/

// let angka = 1;

// do {
//   if (angka % 2 === 0) {
//     console.log("No. " + angka + " Adalah Bilangan Genap");
//   } else {
//     console.log("No. " + angka + " Adalah Bilangan Ganjil");
//   }
//   angka++;
// } while (angka <= 50);


/*=== For Genap 1 - 100 ===*/
// for (let angka = 1; angka <= 100; angka++) {
//   if (angka % 2 === 0) {
//     document.write("<h2>" + "No. " + angka + " Adalah Bilangan Genap </h2>");
//   }
// }

/*=== While Ganji 1 - 100 ===*/

// let angka = 1;

// while (angka <= 100) {
//   if (angka % 2 === 1) {
//     console.log(angka + " Adalah Bilangan Ganjil");
//   }
//   angka++;
// }

/*=== Do-While Ganji 1 - 100 ===*/
// let angka = 1;

// do {
//   if (angka % 2 === 1) {
//     console.log("No. " + angka + " Adalah Bilangan Ganjil");
//   }
//   angka++;
// } while (angka <= 100);
