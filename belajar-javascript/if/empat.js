// /* #4. buatlah program yang akan meminta user memasukan 3 harga barang, 
// apabila jumlah ketiga barang tersebut > 100000, maka akan di berikan potongan
// 10 % dari total harga.setelahh itu, tuliskan ke layar total harga.setelah itu,
// tuliskan ke layar total harga yang harus di bayar user.**/

// // Minta pengguna memasukkan harga barang
// var hargaBarang1 = parseFloat(prompt("Masukkan harga barang 1:"));
// var hargaBarang2 = parseFloat(prompt("Masukkan harga barang 2:"));
// var hargaBarang3 = parseFloat(prompt("Masukkan harga barang 3:"));

// // Hitung total harga
// var totalHarga = hargaBarang1 + hargaBarang2 + hargaBarang3;

// // Berikan potongan jika total harga lebih dari 100000
// if (totalHarga > 100000) {
//     var potongan = 0.1 * totalHarga;
//     totalHarga -= potongan;
// }

// // Tampilkan total harga
// console.log("Total harga: " + totalHarga);

// // Tampilkan total harga yang harus dibayar oleh pengguna
// console.log("Total harga yang harus dibayar: " + totalHarga);