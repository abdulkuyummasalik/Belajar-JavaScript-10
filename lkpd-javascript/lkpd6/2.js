let VIP = 50;
let EKSLUTIF = 50;
let EKONOMI = 50;
let TotalKeuntungan = 0;
let JumlahTerjual = 0;

let utgVIP = 0;
let utgEKSLUTIF = 0;
let utgEKONOMI = 0;
let terjualVIP = 0;
let terjualEKSLUTIF = 0;
let terjualEKONOMI = 0;

if (terjualVIP >= 35) {
    utgVIP = VIP * 25 / 100;
} else if (terjualVIP >= 20) {
    utgVIP = VIP * 15 / 100;
} else {
    utgVIP = VIP * 5 / 100;
}

if (terjualEKSLUTIF >= 40) {
    utgEKSLUTIF = EKSLUTIF * 20 / 100;
} else if (terjualEKSLUTIF >= 20) {
    utgEKSLUTIF = EKSLUTIF * 10 / 100;
} else {
    utgEKSLUTIF = EKSLUTIF * 2 / 100;
}

utgEKONOMI = terjualEKONOMI * 7 / 100;
TotalKeuntungan = utgVIP + utgEKSLUTIF + utgEKONOMI;
JumlahTerjual = terjualVIP + terjualEKSLUTIF + terjualEKONOMI;

console.log(`Keuntungan Tiket VIP: ${utgVIP}`);
console.log(`Keuntungan Tiket EKSLUTIF: ${utgEKSLUTIF}`);
console.log(`Keuntungan Tiket EKONOMI: ${utgEKONOMI}`);
console.log(`Total Keuntungan: ${TotalKeuntungan}`);
console.log(`Jumlah Tiket VIP Terjual: ${terjualVIP}`);
console.log(`Jumlah Tiket EKSLUTIF Terjual: ${terjualEKSLUTIF}`);
console.log(`Jumlah Tiket EKONOMI Terjual: ${terjualEKONOMI}`);
console.log(`Total Jumlah Tiket Terjual: ${JumlahTerjual}`);
