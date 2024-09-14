const jumlahSiswa = 15;
let siswa = [];
let juara = null;

for (let i = 0; i < jumlahSiswa; i++) {
    let nama = prompt(`Masukkan nama siswa ke - ${i + 1}`);
    let MTK = parseFloat(prompt(`Masukkan nilai MTK siswa ke - ${i + 1}`));
    let INDO = parseFloat(prompt(`Masukkan nilai INDO siswa ke - ${i + 1}`));
    let INGG = parseFloat(prompt(`Masukkan nilai INGGRIS siswa ke - ${i + 1}`));
    let DPK = parseFloat(prompt(`Masukkan nilai DPK siswa ke - ${i + 1}`));
    let AGAMA = parseFloat(prompt(`Masukkan nilai Agama siswa ke - ${i + 1}`));
    let kehadiran = parseFloat(prompt(`Berapa persen kehadiranmu selama sekolah?`));

    siswa.push({
        nama: nama,
        nilai: {
            MTK: MTK,
            BINDO: INDO,
            INGG: INGG,
            DPK: DPK,
            AGAMA: AGAMA
        },
        kehadiran: kehadiran
    });
}

for (let i = 0; i < jumlahSiswa; i++) {
    let totalNilai = siswa[i].nilai.MTK + siswa[i].nilai.BINDO + siswa[i].nilai.INGG + siswa[i].nilai.DPK + siswa[i].nilai.AGAMA;

    if (totalNilai >= 475 && siswa[i].kehadiran == 100) {
        juara = siswa[i];
        break;
    }
}

if (juara === null) {
    console.log(`tidak ada yang juara karena belum ada yang memenuhi syarat.`)
} else {
    console.log(`siswa juara adalah : ${juara.nama}`);
}
