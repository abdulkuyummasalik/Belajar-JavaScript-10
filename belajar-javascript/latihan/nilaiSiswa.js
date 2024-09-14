// /*1. Butlah algoritma (flowchart) untuk mencari juara kelas dengan ketentuan 
// siswa yang juara memiliki nilai rata-rata dari lima mata pelajaran totlnya 
// minimal 475, kehadiran 100% hadir. jumlah siswa 15 orang dan 5 mata pelajaran 
// adalah MTK, Indo, DPK, dan Agama. semua komponen yang dijadikan persyaratan harus di input...**/

// // Inisialisasi variabel
// const jumlahSiswa = 15;
// const jumlahMataPelajaran = 5; // Jumlah mata pelajaran, termasuk MTK, Inggris, Indo, DPK, dan Agama
// const nilaiMinimum = 475;
// const kehadiranMinimum = 100;

// // Inisialisasi variabel totalNilai dan totalKehadiran
// let totalNilai = 0;
// let totalKehadiran = 0;

// // Loop untuk menginput nilai dan kehadiran setiap siswa
// for (let i = 1; i <= jumlahSiswa; i++) {
//     // Input nilai untuk setiap mata pelajaran
//     for (let j = 1; j <= jumlahMataPelajaran; j++) {
//         const nilai = parseInt(prompt(`Masukkan nilai Mata Pelajaran ${j} untuk siswa ke-${i}:`)) || 0;
//         totalNilai += nilai;
//     }

//     // Input kehadiran
//     const kehadiran = parseInt(prompt(`Masukkan persentase kehadiran siswa ke-${i}:`)) || 0;
//     totalKehadiran += kehadiran;
// }

// // Hitung rata-rata nilai
// const rataRataNilai = totalNilai / (jumlahSiswa * jumlahMataPelajaran);

// // Cek syarat juara kelas
// if (rataRataNilai >= nilaiMinimum && totalKehadiran === kehadiranMinimum) {
//     console.log("Selamat! Anda adalah juara kelas.");
// } else {
//     console.log("Maaf, Anda tidak memenuhi syarat untuk menjadi juara kelas.");
// }


// // /*2. buatlah algoritma(flowchart) untuk menghitung penghasilan penjualan tiket
// // sebuah bioskop dengan jenis kela VIP,eksekutif,ekonomi, yang masing masing kelas memiliki 50tiket.
// // inputan jumlah tiket yang terjual perkelas menjadi dasar untuk mengetahui banyaknya uang yang masuk.
// // ketentuan yang diberlakukan:
// // a. jika tiket VIP yang terjual lebih dari sama dengan 35 maka keuntungannya adalah 25%
// // b. jika tiket VIP yang terjual lebih besar sama dengan 20 dan lebih kecil dari 35 maka keuntungannya
// // adalah 15% dibawah 20 keuntungan 5%
// // c. jika tiket eksekutif yang terjual lebih dari sama dangan 40 maka keuntungan 20%
// // d. jika tiket eksekutif yang terjual lebih dari sama dangan 20 dan lebih kecil dari 40
// // maka keuntungan 10%, dibawah 20 keuntungan 2%
// // e. untuk ekonomi yang terjual keuntungan 7%
// // output yang diharapkan adalah: keuntungan perkelas tiket , keuntungan secara keseluruhan ,
// // dan jumlah tiket per kelas serta total tiket dari seluruh kelas.**/

// // VIP = 100
// // Eksekutif = 50
// // Ekonomi = 30

// // Inisialisasi variabel
// const hargaVIP = 100000;
// const hargaEksekutif = 50000;
// const hargaEkonomi = 30000;
// const kapasitasPerKelas = 50;

// // Input jumlah tiket terjual perkelas
// const tiketTerjualVIP = 45;
// const tiketTerjualEksekutif = 25;
// const tiketTerjualEkonomi = 30;

// let keuntunganVIP, keuntunganEksekutif, keuntunganEkonomi;

// // a dan b
// if (tiketTerjualVIP >= 35) {
//   keuntunganVIP = 0.25;
// } else if (tiketTerjualVIP >= 20) {
//   keuntunganVIP = 0.15;
// } else {
//   keuntunganVIP = 0.05;
// }

// // c dan d
// if (tiketTerjualEksekutif >= 40) {
//   keuntunganEksekutif = 0.2;
// } else if (tiketTerjualEksekutif >= 20) {
//   keuntunganEksekutif = 0.1;
// } else {
//   keuntunganEksekutif = 0.02;
// }

// // e
// if (tiketTerjualEkonomi >= 1) {
//   keuntunganEkonomi = 0.07;
// } else {
//   keuntunganEkonomi = hargaEkonomi * tiketTerjualEkonomi;
// }

// console.log(`Keuntungan VIP: ${keuntunganVIP * hargaVIP * tiketTerjualVIP}`);
// console.log(
//   `Keuntungan Eksekutif: ${
//     keuntunganEksekutif * hargaEksekutif * tiketTerjualEksekutif
//   }`
// );
// console.log(
//   `Keuntungan Ekonomi: ${
//     keuntunganEkonomi * hargaEkonomi * tiketTerjualEkonomi
//   }`
// );
// const keuntunganKeseluruhan =
//   keuntunganVIP * hargaVIP * tiketTerjualVIP +
//   keuntunganEksekutif * hargaEksekutif * tiketTerjualEksekutif +
//   keuntunganEkonomi * hargaEkonomi * tiketTerjualEkonomi;
// console.log(`Keuntungan Keseluruhan: ${keuntunganKeseluruhan}`);