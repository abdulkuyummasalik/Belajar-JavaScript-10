let arrBilangan = [];
let jumlah = 0;

for (let i = 1; i <= 20; i++) {
    let inputBil = parseFloat(prompt(`Masukkan bilangan ke - ${i}`))

    arrBilangan.push(inputBil);
}

let terkecil = Math.min(...arrBilangan);
let terbesar = Math.max(...arrBilangan);

for (let x = 0; x < arrBilangan.length; x++) {
    jumlah += arrBilangan[x];
}

let rataRata = jumlah / arrBilangan.length;

console.log(`bilangan terkecil adalah ${terkecil}`);
console.log(`bilangan terbesar adalah ${terbesar}`);
console.log(`rata-rata nya adalah ${rataRata}`);
