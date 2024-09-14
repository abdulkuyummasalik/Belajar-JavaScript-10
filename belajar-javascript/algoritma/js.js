//tulis condingan js disini
// js external
// cara buat variabel
// (keyword) let /const namaVariabel = isiVAriabel/Value/Nilai;
// variabel adalah tempat untuk menyimpan nilai/value


// let mtk = 90;
// let dpk = 82;
// let bing = 86;

// let mean = (mtk + dpk + bing) / 3;
// // console.log(mean)

// // codingan logika

// if (mean > 85) {
//     grade = "A"
// } else if (mean > 70) {
//     grade = "B"
// } else if (mean > 65) {
//     grade = "C"
// } else if (mean > 40) {
//     grade = "D"
// } else{
//     grade = "E"
// }

// console.log(mean)
// console.log(grade)

// latihan 1

let mtk = 76;
let dpk = 84;
let bing = 91;
let science = 52;
let sunda = 87;

let mean = (mtk + dpk + bing + science + sunda) / 5;

if (mean > 90) {
    grade = "A"
} else if (mean > 80) {
    grade = "B"
} else if (mean > 75) {
    grade = "C"
} else if (mean > 71) {
    grade = "D"
}else if (mean > 60) {
    grade = "E"
}
else {
    grade = "BK"
}

console.log(mean)
console.log(grade)
