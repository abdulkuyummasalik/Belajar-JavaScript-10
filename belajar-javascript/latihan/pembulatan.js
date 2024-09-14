/*===== QUIZ =====*/
/*===== 5 January 2024 =====*/

/*===Jika kita belanja disupermarket, nilai total belanja kita seringkali bukan kelipatan pecahan rupiah yang berlaku.Misalnya, nilai total belanja adalah Rp. 19.212, -.Walaupun pecahan rupian terkecil Rp.50, - akan tetapi cukup susah untuk kembaliannya.solusinya dilakukan pembultan dengan ketentuan:
Jika >= Rp.50 akan dibulatkan ke Rp.100, dan jika < Rp. 50 maka akan di abaikan.Contohnya:
Rp.19.212 dibulatkan menjadi Rp. 19.200
Rp.19.782 dibulatkan menjadi Rp. 19.800

input: Total belanja, uang yang dibayarkan pembeli
output: Uang kemblian
Tambahan nilai: Buat program menggunakan perulangan===*/

// /*=== Cara 1 ===*/
// let hargaAsli1 = 19262;

// let hargaBulatan1 = Math.round(hargaAsli1 / 100) * 100;

// document.write("Harga awal: Rp " + hargaAsli1 + "<br>");
// document.write("Harga yang dibulatkan: Rp " + hargaBulatan1 + "<br>");

// let hargaAsli2 = 19912;

// let hargaBulatan2 = hargaAsli2 - (hargaAsli2 % 100) + (hargaAsli2 % 100 >= 50 ? 100 : 0);

// document.write("Harga awal: Rp " + hargaAsli2 + "<br>");
// document.write("Harga yang dibulatkan: Rp " + hargaBulatan2 + "<br>");


/*=== Cara 2 ===*/

let harga = [19212, 19260, 19789, 19845];
let hargaBulat = [];

for (let i = 0; i < harga.length; i++) {
  let hargaAsli = harga[i];

  let hargaBulatan =
    hargaAsli - (hargaAsli % 100) + (hargaAsli % 100 >= 50 ? 100 : 0);

  hargaBulat.push(hargaBulatan);
}

document.write("Harga awal: " + harga.join(", ") + "<br>");
document.write("Harga yang dibulatkan: " + hargaBulat.join(", ") + "<br>");
