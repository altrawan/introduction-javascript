const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else if (dataArray.length < nilaiAwal) {
        console.log(`Jumlah angka dalam dataArray harus lebih dari ${nilaiAwal}`);
    } else {
        const hasil = dataArray.filter(x => x >= nilaiAwal && x <= nilaiAkhir);
        if (hasil.length === 0) {
            console.log("Nilai tidak ditemukan");
        } else {
            console.log(hasil.sort((a, b) => a - b));
        }
    }
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);